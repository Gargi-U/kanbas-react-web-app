import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import {createModule, findModulesForCourse, deleteModule, updateModule} from "./client";

export default function Modules() {
  const { cid } = useParams<string>();
  const dispatch = useDispatch();
  
  // Local state for course-specific modules
  const [modules, setModules] = useState<any[]>([]);
  const [moduleName, setModuleName] = useState("");

  const [editingModuleId, setEditingModuleId] = useState("");
  const [editedName, setEditedName] = useState("");

  // Fetch and set modules specific to the course ID
  useEffect(() => {
    fetchModules();
  }, [cid, modules]);

  async function fetchModules () {
    if (!cid) return;
    const modules = await findModulesForCourse(cid);
    const fetchedModules = modules ? modules.modules.map((module: any) => ({ ...module, showLessons: false })) : [];
    setModules(fetchedModules);
  };

  const handleAddModule = () => {
    if (moduleName.trim()) {
      const newModule = {
        name: moduleName,
        course: cid,  
        lessons: []
      };
      if (!cid) return;
      createModule(cid, newModule).then((_) => {
        fetchModules();
      }).catch((err) => {
        console.error(err)
      }); 

      setModuleName("");
    }
  };

  // delete module by ID
  const handleDeleteModule = (moduleId: string) => {
    deleteModule(moduleId).then((_) => {
      setModules(modules.filter(module => module._id !== moduleId));
    }).catch((err) => {
      console.error(err);
    });
  };

  
  // edit module by ID
  const handleEditModule = (moduleId: string) => {
    if (editedName.trim()) {
      const updatedModule = modules.find(module => module._id === moduleId);
      if (!updatedModule) return;
      updatedModule.name = editedName;
      updateModule(updatedModule).then((_) => {
        setModules(modules.map(module => module._id === moduleId ? updatedModule : module));
        setEditingModuleId(""); // Reset editing state
        setEditedName(""); // Reset edited name
      }).catch((err) => {
        console.error(err);
      });
    }
  };

  const toggleLessons = (moduleId: string) => {
    setModules(prevModules => 
      prevModules.map(module => 
        module._id === moduleId ? { ...module, showLessons: !module.showLessons } : module
      )
    );
  };

  return (
    <div id="wd-modules">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={handleAddModule} />
      <br /><br /><br /><br />
      <ul className="list-group rounded-0">
        {modules.map((module: any) => (
          <li key={module._id} className="list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <span onClick={() => toggleLessons(module._id)} style={{ cursor: 'pointer' }}>
              <BsGripVertical className="me-2 fs-3" />
              {editingModuleId === module._id ? (
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  onBlur={() => handleEditModule(module._id)}
                />
              ) : (
                module.name
              )}
            </span>
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={() => handleDeleteModule(module._id)}
                editModule={() => setEditingModuleId(module._id)}
              />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <strong data-bs-toggle="collapse" data-bs-target={`#${lesson._id}`}>
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </strong>
                    <div id={lesson._id} className="collapse">
                      <ul>
                        <li>{lesson.description}</li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

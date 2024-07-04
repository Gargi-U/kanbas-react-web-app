import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as db from "../../Database";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";


export default function Modules() {
  const { cid } = useParams();
  console.log("Course ID from URL:", cid);

  // Using 'any[]' to specify that modules is an array of any type of objects
  const [modules, setModules] = useState<any[]>([]);
  const [moduleName, setModuleName] = useState("");

  useEffect(() => {
    // Simulate fetching modules from database
    const course = db.modules.find((course: any) => course._id === cid);
    const fetchedModules = course ? course.modules : [];
    setModules(fetchedModules);
  }, [cid]);

  const addModule = () => {
    const newModule = {
      _id: `mod_${new Date().getTime()}`,
      name: moduleName,
      lessons: []
    };
    setModules([...modules, newModule]);
    setModuleName(""); // Reset input after adding
  };

  const deleteModule = (moduleId: string) => {
    const updatedModules = modules.filter(module => module._id !== moduleId);
    setModules(updatedModules);
  };

  const editModule = (moduleId: string, newName: string) => {
    const updatedModules = modules.map(module =>
      module._id === moduleId ? { ...module, name: newName } : module
    );
    setModules(updatedModules);
  };

  return (
    <div id="wd-modules">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
      <br /><br /><br /><br />
      <ul className="list-group rounded-0">
        {modules.map((module: any) => (
          <li key={module._id} className="list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
              </span>
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={deleteModule}
                editModule={(newName: string) => editModule(module._id, newName)}
              />
            </div>
            {module.lessons && (
              <ul className="list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson._id} className="list-group-item p-3 ps-1">
                    <strong data-bs-toggle="collapse" data-bs-target={`#${lesson._id}`}>
                      {lesson.name}
                      <LessonControlButtons />
                    </strong>
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

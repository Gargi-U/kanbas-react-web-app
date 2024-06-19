import { useParams } from "react-router";
import * as db from "../../Database";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  const { cid } = useParams();
  console.log("Course ID from URL:", cid);

  const modules = db.modules;
  console.log("All modules from database:", modules);

  // Find the course with the given cid and get its modules
  const course = modules.find((course: any) => course._id === cid);
  const courseModules = course ? course.modules : [];

  return (
    <div id="wd-modules">
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {courseModules.map((module: any) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name}
              <ModuleControlButtons />
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

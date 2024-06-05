import React from 'react';
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div id="wd-modules">
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <strong data-toggle="collapse" data-target="#learningObjectives1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </strong>
              <div id="learningObjectives1" className="collapse">
                <ul>
                  <li>Introduction to the course</li>
                  <li>Learn what is Web Development</li>
                </ul>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <strong data-toggle="collapse" data-target="#reading1">
                <BsGripVertical className="me-2 fs-3" />
                READING
                <LessonControlButtons />
              </strong>
              <div id="reading1" className="collapse">
                <ul>
                  <li>Full Stack Developer - Chapter 1 - Introduction</li>
                  <li>Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
                </ul>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <strong data-toggle="collapse" data-target="#slides1">
                <BsGripVertical className="me-2 fs-3" />
                SLIDES
                <LessonControlButtons />
              </strong>
              <div id="slides1" className="collapse">
                <ul>
                  <li>Introduction to Web Development</li>
                  <li>Creating an HTTP server with Node.js</li>
                  <li>Creating a React Application</li>
                </ul>
              </div>
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 2
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <strong data-toggle="collapse" data-target="#learningObjectives2">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </strong>
              <div id="learningObjectives2" className="collapse">
                <ul>
                  <li>Learn how to create user interfaces with HTML</li>
                  <li>Deploy the assignment to Netlify</li>
                </ul>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <strong data-toggle="collapse" data-target="#slides2">
                <BsGripVertical className="me-2 fs-3" />
                SLIDES
                <LessonControlButtons />
              </strong>
              <div id="slides2" className="collapse">
                <ul>
                  <li>Introduction to HTML and the DOM</li>
                  <li>Formatting Web content with Headings and Titles</li>
                  <li>Formatting content with Lists and Tables</li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "./index.css";

const links = [
  { text: "Home", path: "Home" },
  { text: "Modules", path: "Modules" },
  { text: "Piazza", path: "Piazza" },
  { text: "Zoom", path: "Zoom" },
  { text: "Assignments", path: "Assignments" },
  { text: "Quizzes", path: "Quizzes" },
  { text: "Grades", path: "Grades" },
  { text: "People", path: "People" },
];

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link.path);
        return (
          <a
            key={link.path}
            href={`#/Kanbas/Courses/${cid}/${link.path}`}
            className={`list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}
          >
            {link.text}
          </a>
        );
      })}
    </div>
  );
}

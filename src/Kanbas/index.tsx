import React from "react";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import "./styles.css";

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="h-100">
      <KanbasNavigation />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:cid/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}


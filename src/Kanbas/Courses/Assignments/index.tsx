import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import AssignmentControls from './AssignmentControls';
import AssignmentListItem from './AssignmentListItem';

const assignments = [
  {
    title: 'A1 - ENV + HTML',
    link: '#/Kanbas/Courses/1234/Assignments/1',
    details: 'Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts'
  },
  {
    title: 'A2 - CSS + BOOTSTRAP',
    link: '#/Kanbas/Courses/1234/Assignments/2',
    details: 'Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts'
  },
  {
    title: 'A3 - JAVASCRIPT + REACT',
    link: '#/Kanbas/Courses/1234/Assignments/3',
    details: 'Multiple Modules | Not available untilMay 20 at 12:00am | Due May 27 at 11:59pm | 100 pts'
  }
];

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: '300px' }}>
          <span className="input-group-text"><FaSearch /></span>
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            type="text"
            className="form-control"
          />
        </div>
        <AssignmentControls />
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
        <div className="d-flex align-items-center">
          <BsThreeDotsVertical className="me-2 fs-5" />
          <h3 id="wd-assignments-title" className="mb-0 d-flex align-items-center">
            ASSIGNMENTS
          </h3>
        </div>
        <div className="d-flex align-items-center">
          <span className="border px-2 py-1 rounded-circle text-muted me-2">40% of Total</span>
          <button className="btn btn-secondary btn-sm me-2">+</button>
          <BsThreeDotsVertical className="fs-5" />
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group">
        {assignments.map((assignment, index) => (
          <AssignmentListItem key={index} assignment={assignment} />
        ))}
      </ul>
    </div>
  );
}

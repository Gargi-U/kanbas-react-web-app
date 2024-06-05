import React from 'react';
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import GreenCheckmark from './GreenCheckmark';

export default function AssignmentListItem({ assignment }: { assignment: { title: string, link: string, details: string } }) {
  return (
    <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <BsGripVertical className="me-2 fs-4" />
        <FaRegEdit className="text-success me-2 fs-5" />
        <div>
          <a className="wd-assignment-link" href={assignment.link}>
            {assignment.title}
          </a><br/>
          <span className="wd-assignment-details text-muted">
            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <GreenCheckmark/>
        <IoEllipsisVertical className="fs-4" />
      </div>
    </li>
  );
}

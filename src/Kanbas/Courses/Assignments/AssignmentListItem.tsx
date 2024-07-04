import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import GreenCheckmark from './GreenCheckmark';
import { deleteAssignment, updateAssignment } from './reducer';

export default function AssignmentListItem({ assignment, courseId }: { assignment: any, courseId: string }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(assignment.title);

  const handleDelete = () => {
    dispatch(deleteAssignment({ courseId, assignmentId: assignment.id }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateAssignment({ ...assignment, title: newTitle, courseId }));
    setIsEditing(false);
  };

  return (
    <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <BsGripVertical className="me-2 fs-4" />
        {isEditing ? (
          <input
            type="text"
            className="form-control me-2"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <>
            <FaRegEdit className="text-success me-2 fs-5" onClick={handleEdit} />
            <div>
              <a className="wd-assignment-link" href={assignment.link}>
                {assignment.title}
              </a><br/>
              <span className="wd-assignment-details text-muted">
                {assignment.details}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="d-flex align-items-center">
        <GreenCheckmark/>
        <FaTrash className="text-danger ms-3" onClick={handleDelete} />
        <IoEllipsisVertical className="fs-4 ms-3" />
      </div>
    </li>
  );
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { addAssignment } from './reducer';

export default function AssignmentControls({ courseId }: { courseId: string }) {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddAssignment = () => {
    if (assignmentTitle.trim()) {
      dispatch(addAssignment({
        courseId,
        title: assignmentTitle,
        description: '',
        points: 0,
        dueDate: new Date().toISOString(),
        availableDate: new Date().toISOString()
      }));
      setAssignmentTitle('');
    }
  };

  return (
    <div className="d-flex justify-content-end mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="New Assignment Title"
        value={assignmentTitle}
        onChange={(e) => setAssignmentTitle(e.target.value)}
      />
      <button className="btn btn-danger d-flex align-items-center" onClick={handleAddAssignment}>
        <FaPlus className="me-1" /> Assignment
      </button>
    </div>
  );
}

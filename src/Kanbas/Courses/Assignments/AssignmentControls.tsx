import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function AssignmentControls() {
  return (
    <div className="d-flex justify-content-end mb-3">
      <button className="btn btn-secondary me-2 d-flex align-items-center">
        <FaPlus className="me-1" /> Group
      </button>
      <button className="btn btn-danger d-flex align-items-center">
        <FaPlus className="me-1" /> Assignment
      </button>
    </div>
  );
}

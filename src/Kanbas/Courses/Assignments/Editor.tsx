import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import assignmentsData from '../../Database/assignments.json';

export default function AssignmentEditor() {
  const { cid, id } = useParams();
  console.log("Course ID from URL:", cid);
  console.log("Assignment ID from URL:", id);

  const [assignment, setAssignment] = useState<any>(null);
  const [submissionType, setSubmissionType] = useState<string>('Online');

  useEffect(() => {
    const course = assignmentsData.assignments.find((course: any) => course.courseId === cid);
    const foundAssignment = course?.assignments.find((assignment: any) => assignment.id === id);
    setAssignment(foundAssignment);
  }, [cid, id]);

  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4 border rounded container">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          type="text"
          value={assignment.title}
          className="form-control"
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={5}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            className="form-control"
            onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
          />
        </div>
        <div className="col">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select
            id="wd-group"
            value="ASSIGNMENTS"
            className="form-select"
            onChange={(e) => setAssignment({ ...assignment, group: e.target.value })}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-grade-display" className="form-label">Display Grade as</label>
          <select
            id="wd-grade-display"
            value="Percentage"
            className="form-select"
            onChange={(e) => setAssignment({ ...assignment, gradeDisplay: e.target.value })}
          >
            <option value="Percentage">Percentage</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        <select
          id="wd-submission-type"
          value={submissionType}
          onChange={(e) => setSubmissionType(e.target.value)}
          className="form-select"
        >
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>

      {submissionType === 'Online' && (
        <div className="row mb-3">
          <div className="col">
            <div className="border p-3 rounded">
              <strong>Online Entry Options</strong>
              <div className="form-check">
                <input type="checkbox" id="text-entry" className="form-check-input" />
                <label htmlFor="text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="website-url" className="form-check-input" />
                <label htmlFor="website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="media-recordings" className="form-check-input" />
                <label htmlFor="media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="student-annotation" className="form-check-input" />
                <label htmlFor="student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="file-uploads" className="form-check-input" />
                <label htmlFor="file-uploads" className="form-check-label">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="assign-to" className="form-label">Assign To</label>
          <select
            id="assign-to"
            value="Everyone"
            className="form-select"
            onChange={(e) => setAssignment({ ...assignment, assignTo: e.target.value })}
          >
            <option value="Everyone">Everyone</option>
            <option value="Groups">Groups</option>
            <option value="Individuals">Individuals</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input
            id="wd-due-date"
            type="date"
            value={assignment.dueDate.split('T')[0]}
            className="form-control"
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
          />
        </div>
        <div className="col">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input
            id="wd-available-from"
            type="date"
            value={assignment.availableDate.split('T')[0]}
            className="form-control"
            onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })}
          />
        </div>
        <div className="col">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input
            id="wd-available-until"
            type="date"
            value="2024-05-20" 
            className="form-control"
            onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={`#/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}

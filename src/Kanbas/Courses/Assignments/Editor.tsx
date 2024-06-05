import React, { useState } from 'react';

export default function AssignmentEditor() {
  const [submissionType, setSubmissionType] = useState('Online');

  return (
    <div id="wd-assignments-editor" className="p-4 border rounded container">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" type="text" defaultValue="A1 - ENV + HTML" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" className="form-control" rows={5}
          defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.`} />
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-points" type="number" defaultValue={100} className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-grade-display" className="form-label">Display Grade as</label>
          <select id="wd-grade-display" defaultValue="Percentage" className="form-select">
            <option value="Percentage">Percentage</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        <select id="wd-submission-type" value={submissionType} onChange={(e) => setSubmissionType(e.target.value)} className="form-select">
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
          <select id="assign-to" defaultValue="Everyone" className="form-select">
            <option value="Everyone">Everyone</option>
            <option value="Groups">Groups</option>
            <option value="Individuals">Individuals</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input id="wd-due-date" type="date" defaultValue="2024-05-13" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input id="wd-available-from" type="date" defaultValue="2024-05-06" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input id="wd-available-until" type="date" defaultValue="2024-05-20" className="form-control" />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
  
        <label htmlFor="wd-description">Description</label>
        <textarea
          id="wd-description"
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page."
        /><br />
        <br/>
  
        <label htmlFor="wd-points">Points</label>
        <input id="wd-points" type="number" defaultValue={100} /><br /><br />
  
        <label htmlFor="wd-group">Assignment Group</label>
        <select id="wd-group" defaultValue="ASSIGNMENTS">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          {/* Additional options can be added here */}
        </select><br /><br />
  
        <label htmlFor="wd-grade-display">Display Grade as</label>
        <select id="wd-grade-display" defaultValue="Percentage">
          <option value="Percentage">Percentage</option>
          <option value="Complete/Incomplete">Complete/Incomplete</option>
        </select><br /><br />
  
        <label htmlFor="wd-submission-type">Submission Type</label>
        <select id="wd-submission-type" defaultValue="Online">
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select><br /><br />
  
        <fieldset style={{ border: 'none' }}>  {/* Inline style to remove border */}
          <legend>Online Entry Options</legend>
          <label htmlFor="text-entry"><input type="checkbox" id="text-entry" /> Text Entry</label><br />
          <label htmlFor="website-url"><input type="checkbox" id="website-url" /> Website URL</label><br />
          <label htmlFor="media-recordings"><input type="checkbox" id="media-recordings" /> Media Recordings</label><br />
          <label htmlFor="student-annotation"><input type="checkbox" id="student-annotation" /> Student Annotation</label><br />
          <label htmlFor="file-uploads"><input type="checkbox" id="file-uploads" /> File Uploads</label>
        </fieldset><br />
  
        <label htmlFor="assign-to">Assign To</label>
        <select id="assign-to" defaultValue="Everyone">
          <option value="Everyone">Everyone</option>
          <option value="Groups">Groups</option>
          <option value="Individuals">Individuals</option>
        </select><br /><br />
  
        <label htmlFor="wd-due-date">Due Date</label>
        <input id="wd-due-date" type="date" defaultValue="2024-05-13" /><br /><br />
  
        <label htmlFor="wd-available-from">Available from</label>
        <input id="wd-available-from" type="date" defaultValue="2024-05-06" /><br /><br />
  
        <label htmlFor="wd-available-until">Until</label>
        <input id="wd-available-until" type="date" defaultValue="2024-05-20" /><br /><br />
  
        <button>Cancel</button>
        <button>Save</button>
      </div>
    );
  }
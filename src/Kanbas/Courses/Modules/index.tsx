export default function Modules() {
    return (
      <div id="wd-modules-container">
        <div id="wd-modules-controls">
          <button>Collapse All</button>
          <button>View Progress</button>
          <select className="wd-publish-options">
            <option value="publish-all">Publish All</option>
            <option value="publish-modules-only">Publish modules only</option>
            <option value="publish-all-items">Publish all modules and items</option>
            <option value="unpublish-modules-only">Unpublish modules only</option>
            <option value="unpublish-all-items">Unpublish all modules and items</option>
          </select>
          <button>+ Module</button>
        </div>
  
        <div id="wd-modules">
          <ul>
            <li className="wd-module">
              <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
              <ul className="wd-lessons">
                <li className="wd-lesson">
                  <strong>LEARNING OBJECTIVES</strong>
                  <ul>
                    <li>Introduction to the course</li>
                    <li>Learn what is Web Development</li>
                  </ul>
                </li>
                <li className="wd-lesson">
                  <strong>READING</strong>
                  <ul>
                    <li>Full Stack Developer - Chapter 1 - Introduction</li>
                    <li>Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
                  </ul>
                </li>
                <li className="wd-lesson">
                  <strong>SLIDES</strong>
                  <ul>
                    <li>Introduction to Web Development</li>
                    <li>Creating an HTTP server with Node.js</li>
                    <li>Creating a React Application</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li className="wd-module">
              <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
              <ul className="wd-lessons">
                <li className="wd-lesson">
                  <strong>LEARNING OBJECTIVES</strong>
                  <ul>
                    <li>Learn how to create user interfaces with HTML</li>
                    <li>Deploy the assignment to Netlify</li>
                  </ul>
                </li>
                <li className="wd-lesson">
                  <strong>SLIDES</strong>
                  <ul>
                    <li>Introduction to HTML and the DOM</li>
                    <li>Formatting Web content with Headings and Titles</li>
                    <li>Formatting content with Lists and Tables</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
  
        <div id="wd-course-status">
          <div><strong>Course Status</strong></div>
          <button>Unpublish</button>
          <button>Publish</button>
          <button>Import Existing Content</button>
          <button>Import from Commons</button>
          <button>Choose Home Page</button>
          <button>View Course Stream</button>
          <button>New Announcement</button>
          <button>New Analytics</button>
          <button>View Course Notifications</button>
        </div>
      </div>
    );
  }
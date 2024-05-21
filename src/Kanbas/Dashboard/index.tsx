export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} alt="react course"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course"> 
          <img src="/images/ios.jpg" width={200} alt="iOS course" />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1235/Home">
                CS1235 iOS Development
              </a>
              <p className="wd-dashboard-course-title">
                Mobile app developer
              </p>
              <a href="#/Kanbas/Courses/1235/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course"> 
          <img src="/images/ML.jpg" width={200} alt="Machine Learning Course" />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1236/Home">
                CS1236 Machine Learning
              </a>
              <p className="wd-dashboard-course-title">
                Data Scientist
              </p>
              <a href="#/Kanbas/Courses/1236/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course"> 
          <img src="/images/angular.jpg" width={200} alt="Angular Course" />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1237/Home">
                CS1237 Angular
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1237/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course"> 
          <img src="/images/uiux.jpg" width={200} alt="UI UX Course" />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1238/Home">
                CS1238 UI/UX Design
              </a>
              <p className="wd-dashboard-course-title">
                UI/UX Designer
              </p>
              <a href="#/Kanbas/Courses/1238/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course"> 
          <img src="/images/python.jpg" width={200} alt="Python Course" />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1239/Home">
                CS1239 Python
              </a>
              <p className="wd-dashboard-course-title">
                Data Scientist
              </p>
              <a href="#/Kanbas/Courses/1239/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course"> 
          <img src="/images/genAI.jpg" width={200} alt="Generative AI Course" />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1240/Home">
                CS1240 Generative AI
              </a>
              <p className="wd-dashboard-course-title">
                Data Scientist
              </p>
              <a href="#/Kanbas/Courses/1240/Home"> Go </a>
            </div>
          </div>

        </div>
      </div>
  );}
  
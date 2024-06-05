import React from "react";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="/images/reactjs.jpg"
                className="card-img-top"
                alt="react course"
              />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="/images/ios.jpg"
                className="card-img-top"
                alt="iOS course"
              />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1235/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1235 iOS Development
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Mobile app developer
                </p>
                <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="/images/ML.jpg"
                className="card-img-top"
                alt="Machine Learning Course"
              />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1236/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1236 Machine Learning
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Data Scientist
                </p>
                <a href="#/Kanbas/Courses/1236/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="/images/angular.jpg"
                className="card-img-top"
                alt="Angular Course"
              />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1237/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1237 Angular
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1237/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="/images/uiux.jpg"
                className="card-img-top"
                alt="UI UX Course"
              />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1238/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1238 UI/UX Design
                </a>
                <p className="wd-dashboard-course-title card-text">UI/UX Designer</p>
                <a href="#/Kanbas/Courses/1238/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="/images/python.jpg"
                className="card-img-top"
                alt="Python Course"
              />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1239/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1239 Python
                </a>
                <p className="wd-dashboard-course-title card-text">Data Scientist</p>
                <a href="#/Kanbas/Courses/1239/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="/images/genAI.jpg"
                className="card-img-top"
                alt="Generative AI Course"
              />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1240/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1240 Generative AI
                </a>
                <p className="wd-dashboard-course-title card-text">Data Scientist</p>
                <a href="#/Kanbas/Courses/1240/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

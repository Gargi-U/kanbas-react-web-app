import React, { useState, useEffect } from 'react';
import { FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';
import { enrollments, grades, users, assignments as assignmentsData } from '../../Database';

const Grades = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [gradesData, setGrades] = useState<any[]>([]);
  const [courseAssignments, setAssignments] = useState<any[]>([]);
  // const [grade, setGrade] = useState<number | string>(88.03);

  useEffect(() => {
    const courseId = "CS1234"; // Replace with dynamic ID from context/route

    // Retrieve course enrollments
    const courseEnrollments = enrollments.filter(enrollment => enrollment.course === courseId);

    // Retrieve students for the course
    const courseStudents = courseEnrollments
      .map(enrollment => users.find(user => user._id === enrollment.user))
      .filter((student): student is any => student !== undefined);

    setStudents(courseStudents);

    // Retrieve grades for the students in the course
    const courseGrades = grades.filter(grade =>
      courseStudents.some(student => student && student._id === grade.student)
    );

    setGrades(courseGrades);

    // Retrieve assignments for the course
    const courseAssignments = assignmentsData.assignments
      .find(course => course.courseId === courseId)?.assignments || [];

    setAssignments(courseAssignments);

    // Log to check data
    console.log("Students:", courseStudents);
    console.log("Grades:", courseGrades);
    console.log("Assignments:", courseAssignments);
  }, []);

  // const handleIncrement = () => {
  //   setGrade((prevGrade) => (typeof prevGrade === 'number' && prevGrade < 100 ? prevGrade + 1 : prevGrade));
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   const parsedValue = parseFloat(value);

  //   if (value === '') {
  //     setGrade('');
  //   } else if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
  //     setGrade(parsedValue);
  //   }
  // };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Student Names</h5>
        <h5>Assignment Names</h5>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input type="text" className="form-control w-25" placeholder="Search Students" />
        <input type="text" className="form-control w-25" placeholder="Search Assignments" />
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-primary">Apply Filters</button>
        <div className="d-flex align-items-center">
          <button className="btn btn-light me-2">
            <FaFileImport className="me-1" /> Import
          </button>
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FaFileExport className="me-1" /> Export
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {/* Add dropdown items here if needed */}
            </div>
          </div>
          <button className="btn btn-light ms-2">
            <FaCog />
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student Name</th>
            {courseAssignments.map(assignment => (
              <th key={assignment.id}>{assignment.title} <br /> Out of {assignment.points}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td className="text-danger">{student.firstName} {student.lastName}</td>
              {courseAssignments.map(assignment => {
                const grade = gradesData.find(g => g.student === student._id && g.assignment === assignment.id);
                return (
                  <td key={assignment.id}>
                    {grade ? `${grade.grade}%` : 'N/A'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;

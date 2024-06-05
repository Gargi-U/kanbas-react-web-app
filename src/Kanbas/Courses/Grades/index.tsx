import React, { useState } from 'react';
import { FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';

const Grades = () => {
  const [grade, setGrade] = useState<number | string>(88.03);

  const handleIncrement = () => {
    setGrade((prevGrade) => (typeof prevGrade === 'number' && prevGrade < 100 ? prevGrade + 1 : prevGrade));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseFloat(value);

    if (value === '') {
      setGrade('');
    } else if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
      setGrade(parsedValue);
    }
  };

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
            <th>A1 SETUP <br /> Out of 100</th>
            <th>A2 HTML <br /> Out of 100</th>
            <th>A3 CSS <br /> Out of 100</th>
            <th>A4 BOOTSTRAP <br /> Out of 100</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-danger">Jane Adams</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>92.18%</td>
            <td>66.22%</td>
          </tr>
          <tr>
            <td className="text-danger">Christina Allen</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger">Samreen Ansari</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger">Han Bao</td>
            <td>100%</td>
            <td>100%</td>
            <td className="d-flex align-items-center">
              <input
                type="text"
                className="form-control text-center"
                value={grade}
                onChange={handleChange}
                inputMode="numeric"
              />
              <button className="btn btn-light ms-1" onClick={handleIncrement}>+</button>
            </td>
            <td>98.99%</td>
          </tr>
          <tr>
            <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>98.37%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger">Siran Cao</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Grades;

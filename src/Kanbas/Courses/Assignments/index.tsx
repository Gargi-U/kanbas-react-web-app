import { useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import AssignmentControls from './AssignmentControls';
import AssignmentListItem from './AssignmentListItem';

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => {
    const course = state.assignments.assignments.find((course: any) => course.courseId === cid);
    return course ? course.assignments : [];
  });

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: '300px' }}>
          <span className="input-group-text"><FaSearch /></span>
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            type="text"
            className="form-control"
          />
        </div>
        <AssignmentControls courseId={cid!} />
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
        <div className="d-flex align-items-center">
          <BsThreeDotsVertical className="me-2 fs-5" />
          <h3 id="wd-assignments-title" className="mb-0 d-flex align-items-center">
            ASSIGNMENTS
          </h3>
        </div>
        <div className="d-flex align-items-center">
          <span className="border px-2 py-1 rounded-circle text-muted me-2">40% of Total</span>
          <button className="btn btn-secondary btn-sm me-2">+</button>
          <BsThreeDotsVertical className="fs-5" />
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group">
        {assignments.map((assignment: any) => (
          <AssignmentListItem
            key={assignment.id}
            assignment={{
              ...assignment,
              link: `#/Kanbas/Courses/${cid}/Assignments/${assignment.id}`,
              details: `${assignment.description} | Due: ${new Date(assignment.dueDate).toLocaleString()} | Points: ${assignment.points}`
            }}
            courseId={cid!}
          />
        ))}
      </ul>
    </div>
  );
}

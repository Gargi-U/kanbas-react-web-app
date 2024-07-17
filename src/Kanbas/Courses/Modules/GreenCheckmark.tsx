import { FaCheckCircle } from "react-icons/fa";
export default function GreenCheckmark() {
  return (
    <span className="position-relative">
      <FaCheckCircle style={{height: "20px", width: "20px"}}
       className="text-success bg-white rounded-circle border-success me-2 mb-1" />
    </span>
  );
}

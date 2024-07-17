import { FaCheckCircle } from "react-icons/fa";
export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle style={{ top: "6px" }}
        className="text-success me-1 position-absolute fs-5 bg-white" />
    </span>
  );
}

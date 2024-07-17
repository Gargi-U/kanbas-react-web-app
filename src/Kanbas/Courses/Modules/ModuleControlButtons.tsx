import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";


export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: {
  moduleId: string; deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void }) {
  return (
    <div className="float-end d-flex flex-row align-items-center ">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-2 mb-1" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
      <GreenCheckmark/>
      <BsPlus className="me-1 mb-1" />
      <IoEllipsisVertical className="me-2 mb-1" />
    </div>
  );
}

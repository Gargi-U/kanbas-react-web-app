import { createSlice } from "@reduxjs/toolkit";
import assignmentsData from "../../Database/assignments.json";

const initialState = {
  assignments: assignmentsData.assignments || [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const course = state.assignments.find((course: any) => course.courseId === assignment.courseId);
      const newAssignment = {
        id: new Date().getTime().toString(),
        ...assignment
      };
      if (course) {
        course.assignments.push(newAssignment);
      } else {
        state.assignments.push({
          courseId: assignment.courseId,
          assignments: [newAssignment]
        });
      }
    },
    deleteAssignment: (state, { payload: { courseId, assignmentId } }) => {
      const course = state.assignments.find((course: any) => course.courseId === courseId);
      if (course) {
        course.assignments = course.assignments.filter((assignment: any) => assignment.id !== assignmentId);
      }
    },
    updateAssignment: (state, { payload: assignment }) => {
      const course = state.assignments.find((course: any) => course.courseId === assignment.courseId);
      if (course) {
        course.assignments = course.assignments.map((a: any) =>
          a.id === assignment.id ? assignment : a
        );
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;



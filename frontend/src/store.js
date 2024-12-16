import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./reducer/studentReducer";
import teacherReducer  from "./reducer/teacherReducer";
import { assignmentReducer, sectionReducer, studentWorkReducer,  } from "./reducer/assignmentReducer";


const store = configureStore ({
    reducer: {
        student: studentReducer,
        teacher: teacherReducer,
        assignment: assignmentReducer,
        section: sectionReducer,
        studentWork: studentWorkReducer,
    }
})

export default store;


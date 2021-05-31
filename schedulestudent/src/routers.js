import React from "react";
import { Course } from "./pages/ActionManger/Course";
import { Room } from "./pages/ActionManger/Room";
import { Student } from "./pages/ActionManger/Student";
const routes = [
  {
    path: "/add-student",
    exact: true,
    main: () => <Student />,
  },
  {
    path: "/add-course",
    exact: false,
    main: () => <Course />,
  },
  {
    path: "/add-room",
    exact: false,
    main: () => <Room/>,
  },
];
export { routes };

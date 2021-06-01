import React from "react";
import { Course } from "./pages/ActionManger/Course";
import { Room } from "./pages/ActionManger/Room";
import { Student } from "./pages/ActionManger/Student";
import { TableCourse } from "./pages/Information/Course";
import { TableRoom } from "./pages/Information/Room";
import { TableStudent } from "./pages/Information/Student";
const routes = [{
        path: "/add-student",
        exact: true,
        main: () => < Student / > ,
    },
    {
        path: "/add-course",
        exact: false,
        main: () => < Course / > ,
    },
    {
        path: "/add-room",
        exact: false,
        main: () => < Room / > ,
    },
    {
        path: "/student",
        exact: false,
        main: () => < TableStudent / >
    },
    {
        path: "/room",
        exact: false,
        main: () => < TableRoom / >
    },
    {
        path: "/course",
        exact: false,
        main: () => < TableCourse / >
    },
    {
        path: "/",
        exact: false
    },
];
export { routes };
import { createContext, useReducer } from "react";
import Courses from "../components/Courses";



export const CoursesContext = createContext({
    courses: [],
    addCourse: ({ description, amount, date }) => { },
    deleteCourse: (id) => { },
    setCourse: (courses) => { },
    updateCourse: (id, { description, amount, date }) => { },
});

function coursesReducer(state, action) { // ds cette partie vient tjrs avant action
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]

        case 'DELETE':
            return state.filter((course) => course.id !== action.payload)
        case 'SET':
            const reverseData = action.payload.reverse() //reverse fait l'inverse ds l'affichage
            return reverseData
        case 'UPDATE':
            const updatableCourseIndex = state.findIndex(
                (course) => course.id === action.payload.id
            )
            const updateableCourse = state[updatableCourseIndex]
            const updatedItem = { ...updateableCourse, ...action.payload.data }
            const updatedCourses = [...state]
            updatedCourses[updatableCourseIndex] = updatedItem
            return updatedCourses
        default:
            return state
    }
}

function CoursesContextProvider({ children }) {

    const [coursesState, dispatch] = useReducer(coursesReducer, [])
    // console.log(coursesState);

    function addCourse(courseData) {
        dispatch({ type: 'ADD', payload: courseData })
    }
    function deleteCourse(id) {
        dispatch({ type: 'DELETE', payload: id })
    }
    function setCourse(courses) {
        dispatch({ type: 'SET', payload: courses })
    }
    function updateCourse(id, courseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: courseData } })
    }
    const value = {
        courses: coursesState,
        addCourse: addCourse,
        deleteCourse: deleteCourse,
        setCourse: setCourse,
        updateCourse: updateCourse
    }

    return (
        <CoursesContext.Provider value={value}>
            {children}
        </CoursesContext.Provider>
    )
}

export default CoursesContextProvider

// case 'UPDATE':
//     const updatableCourseIndex = state.findIndex(
//         (course) => course.id === action.payload.id // Correction ici
//     );

//     if (updatableCourseIndex === -1) return state; // Vérifier si l'ID existe

//     const updateableCourse = state[updatableCourseIndex];
//     const updatedItem = { ...updateableCourse, ...action.payload.data };

//     const updatedCourses = [...state];
//     updatedCourses[updatableCourseIndex] = updatedItem;

//     return updatedCourses; on peut faire aussi de cette maniere 

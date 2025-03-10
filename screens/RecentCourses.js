import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Courses from '../components/Courses'
import { useContext } from 'react'
import { CoursesContext } from '../store/coursesContext'
import { getLastWeek } from '../helper/date'
import { getCourses } from '../helper/http'




// a revoir cette partie 
export default function RecentCourses() {

    const coursesContext = useContext(CoursesContext)

    const [fetchedCourses, setFetchedCourses] = useState([])

    useEffect(() => {
        async function takeCourses() {
            const courses = await getCourses()
            coursesContext.setCourse(courses)
            // setFetchedCourses(courses)
        }





        takeCourses()
    }, []);

    const recentCourses = coursesContext.courses.filter((course) => { // ✅ Correction ici
        const today = new Date()
        const dateLastWeek = getLastWeek(today, 7)

        return course.date >= dateLastWeek && course.date <= today
    })

    return (
        <Courses courses={recentCourses} coursPeriod="Son 1 Hafta"
            nullText="You have not been enrolled in any courses recently" />
    )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Courses from '../components/Courses'
import { useContext } from 'react'
import { CoursesContext } from '../store/coursesContext'
import { getLastWeek } from '../helper/date'



// a revoir cette partie 
export default function RecentCourses() {

    const coursesContext = useContext(CoursesContext)

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
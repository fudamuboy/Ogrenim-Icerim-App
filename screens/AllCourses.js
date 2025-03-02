import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Courses from '../components/Courses'
import { CoursesContext } from '../store/coursesContext'

export default function AllCourses() {
    const coursesContext = useContext(CoursesContext)
    return (
        <Courses courses={coursesContext.courses} coursPeriod="Hepsi"
            nullText="You are not enrolled in any course" />
    )
}

const styles = StyleSheet.create({})

// Courses sera zppele ici en first time car ill contient les autres cours
// coursPeriod cme Props lie a CoursSummary ds => Courses
// Mais d'abbord AllCours et osi ds RecentCours
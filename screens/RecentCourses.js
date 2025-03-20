import { StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import Courses from '../components/Courses'
import { useContext } from 'react'
import { CoursesContext } from '../store/coursesContext'
import { getLastWeek } from '../helper/date'
import { getCourses } from '../helper/http'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorText from '../components/ErrorText'




// a revoir cette partie 
export default function RecentCourses() {

    const coursesContext = useContext(CoursesContext)

    const [fetchedCourses, setFetchedCourses] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        async function takeCourses() {
            setError(null)
            setIsFetching(true)
            try {
                const courses = await getCourses()
                coursesContext.setCourse(courses)

            } catch (error) {
                setError('Kurlari cekemedik')
            }


            setIsFetching(false)
            // setFetchedCourses(courses)
        }

        takeCourses()
    }, []);

    if (error && !isFetching) {
        return <ErrorText mesaj={error} />
    }
    if (isFetching) {
        return <LoadingSpinner />
    }

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
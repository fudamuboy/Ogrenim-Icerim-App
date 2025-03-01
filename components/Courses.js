import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesSummary from './CoursesSummary'
import CoursesList from './CoursesList'

// op compris a revoir 
export default function Courses({ coursPeriod, courses }) {
    return (
        <View style={styles.container}>
            <CoursesSummary courses={courses} periodName={coursPeriod} />
            <CoursesList courses={courses} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 25,
    },
})

// Pour les cours et autres en general la lsiteleme
// New Props PeriodName=CoursPeriod
// ce Props=> ds CoursesSummary
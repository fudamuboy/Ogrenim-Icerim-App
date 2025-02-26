import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesSummary from './CoursesSummary'
import CoursesList from './CoursesList'

export default function Courses({ coursPeriod }) {
    return (
        <View style={styles.container}>
            <CoursesSummary periodName={coursPeriod} />
            <CoursesList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 25,
    },
})

// Pour les cours et autres en general la lsiteleme
// New Props PeriodName=CoursPeriod
// ce Props=> ds CoursesSummary
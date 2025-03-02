import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesSummary from './CoursesSummary'
import CoursesList from './CoursesList'

// op compris a revoir 
export default function Courses({ coursPeriod, courses, nullText }) {
    let content = <Text style={styles.alert}>{nullText}</Text>
    if (courses.length > 0) {
        content = <CoursesList courses={courses} />
    }

    return (


        <View style={styles.container}>
            <CoursesSummary courses={courses} periodName={coursPeriod} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 25,
    },
    alert: {
        fontSize: 16,
        marginTop: 30,
        textAlign: 'center',
        fontFamily: 'Georgia',
    },
})

// Pour les cours et autres en general la lsiteleme
// New Props PeriodName=CoursPeriod
// ce Props=> ds CoursesSummary
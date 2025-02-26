import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Courses from '../components/Courses'

export default function AllCourses() {
    return (
        <Courses coursPeriod="Hepsi" />
    )
}

const styles = StyleSheet.create({})

// Courses sera zppele ici en first time car ill contient les autres cours
// coursPeriod cme Props lie a CoursSummary ds => Courses
// Mais d'abbord AllCours et osi ds RecentCours
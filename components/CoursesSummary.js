import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CoursesSummary({ periodName }) {
    return (
        <View>
            <Text>{periodName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
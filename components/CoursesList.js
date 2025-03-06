import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseItem from './CourseItem'

export default function CoursesList({ courses }) {

    function renderCourseItem(itemData) {
        // console.log(itemData);  et puis recuperation des item grace a CourseItem
        return <CourseItem {...itemData.item} />

    }
    return (
        <View>
            <FlatList
                data={courses}
                keyExtractor={(item) => item.id}
                renderItem={renderCourseItem} />
        </View>
    )
}

const styles = StyleSheet.create({})


// La liste des cours seront ici 
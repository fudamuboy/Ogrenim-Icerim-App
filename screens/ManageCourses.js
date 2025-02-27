import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function ManageCourses({ route, navigation }) {
    const courseId = route.params?.courseId
    // liaison avec le courseId du pressable

    let isEditing = false
    if (courseId) {
        isEditing = true
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Kursu Güncelle' : 'Kursu Ekle',
        });
    }); // Ajout des dépendances
    return (
        <View>
            <Text>ManageCourses</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
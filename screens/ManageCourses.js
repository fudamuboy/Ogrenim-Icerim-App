import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useContext } from 'react';
import { CoursesContext } from '../store/coursesContext';
import CourseForm from '../components/CourseForm';

export default function ManageCourses({ route, navigation }) {
    const coursesContext = useContext(CoursesContext)
    const courseId = route.params?.courseId
    // liaison avec le courseId du pressable
    //Si courseId existe → isEditing = true (on est en mode édition du cours).
    // Si courseId n'existe pas → isEditing = false (on est en mode ajout d'un nouveau cours)
    let isEditing = false
    if (courseId) {
        isEditing = true
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Kursu Güncelle' : 'Kursu Ekle',
        });
    }, [navigation, isEditing]); // Ajout des dépendances


    // fonction de retour ds les courses 
    function deleteCourse() {
        coursesContext.deleteCourse(courseId)
        navigation.goBack()
    }
    function CancelHandler() {
        navigation.goBack()
    }
    // ds cette partie if kismin guncelle yapcak ve else de ekle de yapcak 
    function addOrUpdateHandler() {
        if (isEditing) {
            coursesContext.updateCourse(courseId, {
                description: 'Guncellenen kurs',
                amount: 169,
                date: new Date()
            })
        }
        else {
            coursesContext.addCourse({
                description: 'Eklenen Kurs',
                amount: 169,
                date: new Date()
            })
        }
        navigation.goBack() // retour permettant l'affichage de la mise a jour 
    }
    return (
        <View style={styles.container}>
            <CourseForm />
            <View style={styles.btns}>
                <Pressable onPress={CancelHandler}>
                    <View style={styles.cancel}>
                        <Text style={styles.cancelText}>Cancel </Text>
                    </View>
                </Pressable >
                <Pressable onPress={addOrUpdateHandler}>
                    <View style={styles.addOrDelete}>
                        <Text style={styles.addOrDeleteText}>{isEditing ? 'Update' : 'Add'} </Text>
                    </View>
                </Pressable>
            </View>

            {isEditing && (
                <View style={styles.deleteContainer}>
                    <EvilIcons name="trash" size={36} color="black" onPress={deleteCourse} />
                </View>

            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,

    },
    deleteContainer: {
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: 'blue',
        paddingTop: 10,
        marginTop: 16,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cancel: {
        backgroundColor: 'red',
        minWidth: 120,
        marginRight: 10,
        padding: 8,
        alignItems: 'center',

    },
    cancelText: {
        color: 'white',
    },
    addOrDelete: {
        backgroundColor: 'gray',
        minWidth: 120,
        marginRight: 10,
        padding: 8,
        alignItems: 'center',
    },
    addOrDeleteText: {
        color: 'white',
    },
})
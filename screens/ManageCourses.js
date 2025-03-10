import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useContext } from 'react';
import { CoursesContext } from '../store/coursesContext';
import CourseForm from '../components/CourseForm';
import { storeCourse, updateCourse, deleteCourseHttp } from '../helper/http';



export default function ManageCourses({ route, navigation }) {
    const coursesContext = useContext(CoursesContext)
    const courseId = route.params?.courseId
    // liaison avec le courseId du pressable
    //Si courseId existe → isEditing = true (on est en mode édition du cours).
    // Si courseId n'existe pas → isEditing = false (on est en mode ajout d'un nouveau cours)
    let isEditing = false

    const selectedCourse = coursesContext.courses.find((course) => course.id === courseId)

    if (courseId) {
        isEditing = true
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Kursu Güncelle' : 'Kursu Ekle',
        });
    }, [navigation, isEditing]); // Ajout des dépendances


    // fonction de retour ds les courses 
    async function deleteCourse() {
        coursesContext.deleteCourse(courseId)
        await deleteCourseHttp(courseId)
        navigation.goBack()
    }
    function CancelHandler() {
        navigation.goBack()
    }
    // ds cette partie if kismin guncelle yapcak ve else de ekle de yapcak 
    async function addOrUpdateHandler(courseData) {
        if (isEditing) {
            coursesContext.updateCourse(courseId, courseData)
            await updateCourse(courseId, courseData)
        }
        else {

            const id = await storeCourse(courseData)
            coursesContext.addCourse({ ...courseData, id: id })
        }
        navigation.goBack() // retour permettant l'affichage de la mise a jour 
    }
    return (
        <View style={styles.container}>
            <CourseForm
                buttonLabel={isEditing ? 'Update' : 'Add'}
                CancelHandler={CancelHandler}
                onSubmit={addOrUpdateHandler}
                defaultValues={selectedCourse} />


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

})
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useContext } from 'react';
import { CoursesContext } from '../store/coursesContext';
import CourseForm from '../components/CourseForm';
import { storeCourse, updateCourse, deleteCourseHttp } from '../helper/http';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorText from '../components/ErrorText';



export default function ManageCourses({ route, navigation }) {
    const [error, setError] = useState()
    const [isSubmitting, setIsSubmitting] = useState(false)
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
        setIsSubmitting(true)
        setError(null)
        try {
            coursesContext.deleteCourse(courseId)
            await deleteCourseHttp(courseId)
            navigation.goBack()

        } catch (error) {
            setError('Kurlari silemedik')
            setIsSubmitting(false)
        }


    }
    if (error && !isSubmitting) {
        return <ErrorText mesaj={error} />
    }
    function CancelHandler() {
        navigation.goBack()
    }
    // ds cette partie if kismin guncelle yapcak ve else de ekle de yapcak 
    async function addOrUpdateHandler(courseData) {
        setIsSubmitting(true)
        setError(null)
        try {
            if (isEditing) {
                coursesContext.updateCourse(courseId, courseData)
                await updateCourse(courseId, courseData)
            }
            else {

                const id = await storeCourse(courseData)
                coursesContext.addCourse({ ...courseData, id: id })
            }
            navigation.goBack() // retour permettant l'affichage de la mise a jour 
        } catch (error) {
            setError('Kurs ekelmede veya guncellemede problem var ')
            setIsSubmitting(false)
        }

    }
    if (isSubmitting) {
        return <LoadingSpinner />
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
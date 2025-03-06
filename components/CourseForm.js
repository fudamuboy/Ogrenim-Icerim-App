import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import { getFormattedDate } from '../helper/date'

export default function CourseForm({ CancelHandler, onSubmit, buttonLabel, defaultValues }) {
    const [inputs, setInputs] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    })
    // After the explain of this parts 
    function addOrUpdateHandler() {
        const courseData = {
            amount: Number(inputs.amount),
            date: inputs.date,
            description: inputs.description
        }
        const amountIsValid = !isNaN(courseData.amount) && courseData.amount > 0
        // Validation : vérifier que la date n'est pas vide et respecte le format YYYY-MM-DD
        const dateIsValidFormat = /^(\d{4})-(\d{2})-(\d{2})$/.test(courseData.date);

        // Vérification si la date est vide ou invalide
        const dateIsValid = courseData.date.trim() !== '' && dateIsValidFormat && !isNaN(new Date(courseData.date).getTime());
        const descriptionIsValid = courseData.description.trim().length > 0
        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            Alert.alert('Incorrect Login', 'Please enter all fields in the correct format!')
            return;
        }
        // Convertir la date en objet Date après validation
        courseData.date = new Date(courseData.date);

        // Vérification finale de la validité de la date
        if (isNaN(courseData.date.getTime())) {
            Alert.alert('Hatali Giris', 'Please enter a valid date!');
            return;
        }
        onSubmit(courseData) // props definit sera sende ds ManageCourses
    }
    // console.log(inputs);

    function inputChange(inputIdentifier, enteredValue) {
        setInputs((currentInput) => {
            return {
                ...currentInput,
                [inputIdentifier]: enteredValue
            }
        })
    }
    return (
        <View style={styles.form}>
            <Text style={styles.basligi}>Kurs Bilgileri</Text>
            <View style={styles.priceAndDate}>
                <Input
                    style={styles.flexAll}
                    label="Tutar"
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChange.bind(this, 'amount'),
                        value: inputs.amount
                    }} />
                <Input label="Tarih"
                    style={styles.flexAll}
                    textInputConfig={{
                        placeHolder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChange.bind(this, 'date'),
                        value: inputs.date
                    }} />
            </View>

            <Input label="Baslik bilgisi"
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChange.bind(this, 'description'),
                    value: inputs.description
                }} />
            <View style={styles.btns}>
                <Pressable onPress={CancelHandler}>
                    <View style={styles.cancel}>
                        <Text style={styles.cancelText}>Cancel </Text>
                    </View>
                </Pressable >
                <Pressable onPress={addOrUpdateHandler}>
                    <View style={styles.addOrDelete}>
                        <Text style={styles.addOrDeleteText}>
                            {buttonLabel}
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    priceAndDate: {
        flexDirection: 'row',

    },
    flexAll: {
        flex: 1,
    },
    form: {
        marginTop: 40,
    },
    basligi: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
        marginVertical: 20,
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
// CourseForm contient input qui possede ceux ci sont envoye ds ManageCourse
// KeyboardType decimal fait de sorte que le clavier devient numerique 
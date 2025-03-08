import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import { getFormattedDate } from '../helper/date'

export default function CourseForm({ CancelHandler, onSubmit, buttonLabel, defaultValues }) {
    const [inputs, setInputs] = useState({
        amount: { value: defaultValues ? defaultValues.amount.toString() : '', isValid: true, },
        date: { value: defaultValues ? getFormattedDate(defaultValues.date) : '', isValid: true },
        description: { value: defaultValues ? defaultValues.description : '', isValid: true },
    })
    // After the explain of this parts 
    function addOrUpdateHandler() {
        const courseData = {
            amount: Number(inputs.amount.value),
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }
        console.log(courseData);

        const amountIsValid = courseData.amount > 0


        // Vérification si la date est vide ou invalide
        const dateIsValid = courseData.date.toString() !== 'Invalid Date'
        const descriptionIsValid = courseData.description.trim().length > 0

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((currentInputs) => {
                return {
                    amount: { value: Number(currentInputs.amount.value), isValid: amountIsValid },
                    date: { value: currentInputs.date.value, isValid: dateIsValid },
                    description: { value: currentInputs.description.value, isValid: descriptionIsValid }
                }
            })
            return;
        }

        onSubmit(courseData) // props definit sera sende ds ManageCourses
    }
    // console.log(inputs);

    function inputChange(inputIdentifier, enteredValue) {
        setInputs((currentInput) => {
            return {
                ...currentInput,
                [inputIdentifier]: { value: enteredValue, isValid: true }
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
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChange.bind(this, 'amount'),
                        value: inputs.amount.value
                    }} />
                <Input label="Tarih"
                    invalid={!inputs.date.isValid}
                    style={styles.flexAll}
                    textInputConfig={{
                        placeHolder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChange.bind(this, 'date'),
                        value: inputs.date.value
                    }} />
            </View>

            <Input label="Baslik bilgisi"
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChange.bind(this, 'description'),
                    value: inputs.description.value
                }} />
            <View style={styles.error}>
                {!inputs.amount.isValid && (
                    <Text>
                        Luften tutari dogru formatta giriniz
                    </Text>
                )}
                {!inputs.date.isValid && (
                    <Text>
                        Luften tutari dogru formatta giriniz
                    </Text>
                )}
                {!inputs.description.isValid && (
                    <Text>
                        Luften tutari dogru formatta giriniz
                    </Text>
                )}
            </View>
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
    error: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
})
// CourseForm contient input qui possede ceux ci sont envoye ds ManageCourse
// KeyboardType decimal fait de sorte que le clavier devient numerique 
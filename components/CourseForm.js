import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

export default function CourseForm() {
    const [inputs, setInputs] = useState({
        amount: '',
        date: '',
        description: ''
    })
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
                        onChangeText: () => { inputChange('amount') },
                        value: inputs.amount
                    }} />
                <Input label="Tarih"
                    style={styles.flexAll}
                    textInputConfig={{
                        placeHolder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: () => { }
                    }} />
            </View>

            <Input label="Baslik bilgisi"
                textInputConfig={{
                    multiline: true,
                    onChangeText: () => { }
                }} />
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
})
// CourseForm contient input qui possede ceux ci sont envoye ds ManageCourse
// KeyboardType decimal fait de sorte que le clavier devient numerique 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

export default function CourseForm() {

    return (
        <View>
            <Input label="Tutar"
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: () => { }
                }} />
            <Input label="Tarih"
                textInputConfig={{
                    placeHolder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => { }
                }} />
            <Input label="Baslik bilgisi"
                textInputConfig={{
                    multiline: true,
                    onChangeText: () => { }
                }} />
        </View>

    )
}

const styles = StyleSheet.create({})
// CourseForm contient input qui possede ceux ci sont envoye ds ManageCourse
// KeyboardType decimal fait de sorte que le clavier devient numerique 
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ label, textInputConfig, style }) {
    const inputStyles = [styles.inputText] // op trop compris sonra bakcam
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.inputStyles} {...textInputConfig} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 10,

    },
    label: {
        fontSize: 15,
        color: 'blue',
        marginBottom: 4,
    },
    inputStyles: {
        backgroundColor: 'pink',
        padding: 5,
        borderRadius: 10,
        fontSize: 18,

    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
})

// input declaree sera envoye ds CourseForm
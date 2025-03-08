import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ label, textInputConfig, style, invalid }) {
    const inputStyles = [styles.inputText] // op trop compris sonra bakcam

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }
    // la partie de rendre le background red 
    if (invalid) {
        inputStyles.push(styles.invalidInput)
    }
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
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
    inputText: {
        backgroundColor: 'pink',
        padding: 5,
        borderRadius: 10,
        fontSize: 18,

    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidLabel: {
        color: 'red',
    },
    invalidInput: {
        backgroundColor: 'red',
    },
})

// input declaree sera envoye ds CourseForm
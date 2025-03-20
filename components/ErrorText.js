import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ErrorText({ mesaj }) {
    return (
        <View style={styles.container} >

            <Text style={styles.title} >HATA!</Text>
            <Text style={styles.mesaj}>{mesaj} </Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    mesaj: {
        textAlign: 'center',
        marginTop: 10,
    },
})





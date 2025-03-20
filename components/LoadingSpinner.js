import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native';

export default function LoadingSpinner() {
    return (
        <View style={styles.container}>

            <ActivityIndicator size="large" color="red" />
            {/* <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="large" color="#00ff00" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})
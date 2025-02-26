import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentCourses from './screens/RecentCourses';
import AllCourses from './screens/AllCourses';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function CourseOverView() {
    // const navigation=useNavigation() on peut faire de cette maniere
    // avedc cme ceci onPress={() => navigation.navigate('ManageCourse')}
    return (
        <Tab.Navigator screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: 'pink' },
            headerTintColor: 'white',
            tabBarStyle: { backgroundColor: 'pink' },
            tabBarActiveTintColor: 'darkblue',
            headerRight: () => (
                <Pressable
                    onPress={() => {
                        navigation.navigate('ManageCourse')
                    }}
                    style={({ pressed }) => pressed && styles.pressed}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="plus" size={24} color="white" />
                    </View>
                </Pressable>
            )
        })}>
            <Tab.Screen name="RecentCourses" component={RecentCourses}
                options={{
                    title: 'Recently registered',
                    tabBarLabel: 'Yakin Zaman',
                    tabBarIcon: (color, size) => (
                        <FontAwesome name="hourglass" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="AllCourses " component={AllCourses}
                options={{
                    title: 'All Courses',
                    tabBarLabel: 'Courses',
                    tabBarIcon: (color, size) => (
                        <Entypo name="list" size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        marginVertical: 2,
        marginHorizontal: 8,
    },
    pressed: {
        opacity: 0.5,
    },
})


// D'abord les donnes recentes et all de courses
// Au niveau de color et size il ya eu Destructing pour etre accorder en fonction
// du code 
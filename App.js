import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageCourses from './screens/ManageCourses';
import CourseOverView from './CourseOverView';
import CoursesContextProvider from './store/coursesContext';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CoursesContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CoursesOverView" component={CourseOverView}
            options={{ headerShown: false }} />
          <Stack.Screen name="ManageCourse" component={ManageCourses} />
        </Stack.Navigator>
      </NavigationContainer>
    </CoursesContextProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// creation d'1e CourseOverView.js lie a App.js cme Screen contenant les elements
// du Bottom Tabs
// option false est la cache l'entete
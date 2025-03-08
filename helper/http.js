import axios from "axios";

const url = 'https://react-native-8c790-default-rtdb.firebaseio.com/';

export function storeCourse(courseData) {
    axios.post(url + 'courses.json', courseData)
        .then(response => console.log(response.data)) // verification ds le console
        .catch(error => console.log(error));
}

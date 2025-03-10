import axios from "axios";

const url = 'https://react-native-8c790-default-rtdb.firebaseio.com/';

export async function storeCourse(courseData) {
    const response = await axios.post(url + 'courses.json', courseData)
    const id = response.data.name
    return id
    // .then(response => console.log(response.data)) // verification ds le console
    // .catch(error => console.log(error));

}

export async function getCourses() {
    const response = await axios.get(url + 'courses.json')

    const courses = [];
    for (const key in response.data) {
        const courseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        };
        courses.push(courseObj)
    }
    return courses

}
export function updateCourse(id, courseData) {
    return axios.put(url + `courses/${id}.json`, courseData)
}
export function deleteCourseHttp(id) {
    return axios.delete(url + `courses/${id}.json`)
}

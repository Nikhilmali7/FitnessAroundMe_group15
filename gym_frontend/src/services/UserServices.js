import axios from 'axios'

const EMP_ALL_URL = 'http://localhost:8080/users'
const EMP_PUT_URL = 'http://localhost:8080/users'
const ADMINTRAINER_PUT_URL = 'http://localhost:8080/users/saveAdTrain'



class UserServices {

    getUsers() {
        console.log("Hello");
        return axios.get(EMP_ALL_URL);
        
    }

    createUsers(user) {
        return axios.post(EMP_PUT_URL, user);
    }

    createTrainerAdmin(user) {
        return axios.post(ADMINTRAINER_PUT_URL,user)
    }
}

export default new UserServices()
import axios from 'axios'


const GYMMEMBER_PUT_URL = 'http://localhost:8080/gymmembers/save'


class GymMemberServices {

    

    createGymMember(gymMember) {
        console.log(gymMember);
        return axios.post(GYMMEMBER_PUT_URL, gymMember);
    }
}

export default new GymMemberServices()
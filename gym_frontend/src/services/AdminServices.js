import axios from 'axios'

const SUBPLAN_ALL_URL = 'http://localhost:8080/plans'
const SUBPLAN_PUT_URL = 'http://localhost:8080/plans/save'
const SUBPLAN_DELETE_URL = 'http://localhost:8080/plans/delete'

const GYMMEMB_ALL_URL = 'http://localhost:8080/gymmembers'
const GYMMEMB_DELETE_URL = 'http://localhost:8080/gymmembers/delete'

const CENTER_ALL_URL = 'http://localhost:8080/getcenters'
const CENTER_POST_URL = 'http://localhost:8080/center'
const CENTER_GET_BY_ID_URL = 'http://localhost:8080/my_centers'
const CENTER_GET_BY_Locality_URL = 'http://localhost:8080/all_centers'
const CENTER_PUT_URL = 'http://localhost:8080/centers'
const CENTER_DELETE_URL = 'http://localhost:8080/centers'
const GET_LOCALITIES = 'http://localhost:8080/localities'


class AdminServices {

    getSubplans() {
        console.log("Hello");
        return axios.get(SUBPLAN_ALL_URL);
        
    }

    createSubplans(subplan) {
        return axios.post(SUBPLAN_PUT_URL, subplan);
    }

    deleteSubplans(subplanId) {
        return axios.delete(SUBPLAN_DELETE_URL  + '/' + subplanId);
    }


    getGymMembers() {
        return axios.get(GYMMEMB_ALL_URL)
    }

    deleteGymMembers(memberId) {
        return axios.delete(GYMMEMB_DELETE_URL  + '/' + memberId);
    }

    getCenters(){
        return axios.get(CENTER_ALL_URL);
    }

    getCenterById(owner_id){
        return axios.get(CENTER_GET_BY_ID_URL + '/' + owner_id);
    }

    centerById(centerId){
        return axios.get(CENTER_DELETE_URL + '/' + centerId);
    }

    getCenterByLocation(locality){
        return axios.get(CENTER_GET_BY_Locality_URL + '/' + locality);
    }

    createCenter(center){
        return axios.post(CENTER_POST_URL , center);
    }
    
    updateCenter(center){
        return axios.put(CENTER_DELETE_URL + '/' + center.id, center);
    }

    deleteCenter(id){
        return axios.delete(CENTER_DELETE_URL + '/' + id);
    }

    getLocalities() {
        return axios.get(GET_LOCALITIES);
    }

}

export default new AdminServices()
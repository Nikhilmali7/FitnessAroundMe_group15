import axios from 'axios'

const DIET_ALL_URL = 'http://localhost:8080/dietplans'
const DIET_PUT_URL = 'http://localhost:8080/dietplans/save'
const DIET_UPDATE_URL = 'http://localhost:8080/dietplans/update'
const DIET_DELETE_URL = 'http://localhost:8080/dietplans/delete'

const WORKOUTS_ALL_URL = 'http://localhost:8080/workouts'
const WORKOUTS_PUT_URL = 'http://localhost:8080/workouts/save'
const WORKOUTS_UPDATE_URL = 'http://localhost:8080/workouts/update'
const WORKOUTS_DELETE_URL = 'http://localhost:8080/workouts/delete'


class TrainerServices {

   
    getWorkoutPlan() {
        return axios.get(WORKOUTS_ALL_URL);
    }

    createWorkoutplan(workoutplan) {
        return axios.post(WORKOUTS_PUT_URL, workoutplan);
    }

    getWorkoutPlanById(workoutid) {
        return axios.get(WORKOUTS_ALL_URL + '/' + workoutid);
    }

    updateWorkoutplan(workoutplan, workoutid) {
        return axios.put(WORKOUTS_UPDATE_URL + '/' + workoutid, workoutplan);
    }

    deleteWorkoutplan(workoutid) {
        return axios.delete(WORKOUTS_DELETE_URL + '/' + workoutid)
    }



    getDietPlan() {
        console.log("Hello");
        return axios.get(DIET_ALL_URL);
        
    }

    createDietPlan(dietplan) {
        return axios.post(DIET_PUT_URL, dietplan);
    }

    getDietPlanById(planid) {
        return axios.get(DIET_ALL_URL + '/' + planid);
    }

    updateDietplan(dietplan, planid) {
        return axios.put(DIET_UPDATE_URL + '/' + planid, dietplan);
    }

    deleteDietPlan(planid) {
        return axios.delete(DIET_DELETE_URL + '/' + planid);
    }

    

   
}

export default new TrainerServices()
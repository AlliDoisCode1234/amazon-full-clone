import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: "https://us-central1-full-clone-cd754.cloudfunctions.net/api" 
    // http://localhost:5001/full-clone-cd754/us-central1/api
});

export default instance;


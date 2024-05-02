import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://127.0.0.1:5001/zaio-amazn-clone/us-central1/api", //THE API (cloud function) URL

  //"http://localhost:5001/amaznclone-v1/us-central1/api"
});

export default instance;

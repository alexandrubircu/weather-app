import axios from 'axios';

const API_KEY = '976161379bc40f4c310ea73859f37efb';
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY
  }
});


export default instance;



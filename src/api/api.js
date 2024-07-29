import axios from 'axios';

const API_KEY = 'e6a16a7208ed6692c250eb5d6e84e684';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY
  }
});

export default api;
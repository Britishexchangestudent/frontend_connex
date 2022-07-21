import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.headers.common = {
    Authorization: "mysecrettoken"
}

export const getTime = async () => {
   const epochTimeResponse = await axios.get('/time')
   return epochTimeResponse.data
}

export const getMetricsData = async () => {
    const epochTimeResponse = await axios.get('/metrics')
    return epochTimeResponse.data
 }
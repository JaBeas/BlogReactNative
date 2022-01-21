import axios from 'axios';

export default axios.create({
  // baseURL must be updated manually every 8 hours
  baseURL: ' http://2217-73-162-253-129.ngrok.io',
});

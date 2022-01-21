import axios from 'axios';

export default axios.create({
  // baseURL must be updated manually every 8 hours
  //npm run db
  // npm run tunnel
  baseURL: 'https://c305-73-162-253-129.ngrok.io',
});

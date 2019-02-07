import axios from 'axios';

export default {
  submitEmail: (email) => {
    console.log(email);
    return axios.post('/api/email', email)
  }
}
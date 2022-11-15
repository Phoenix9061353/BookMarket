import axios from 'axios';

const API_URL = 'http://localhost:3030/bookapi/v1/auth';

//http://localhost:3030

class AuthService {
  login(email, password) {
    return axios.post(API_URL + '/login', { email, password });
  }
  logout() {
    localStorage.removeItem('user');
  }
  signup(data) {
    return axios.post(API_URL + '/signup', data);
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();

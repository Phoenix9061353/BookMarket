import axios from 'axios';

const API_URL = 'http://localhost:3030/bookapi/v1/reviews';

class ReviewService {
  createReview(book_id, data) {
    let token = '';
    if (localStorage.getItem('user')) {
      token = JSON.parse(localStorage.getItem('user')).token;
    }

    return axios.post(API_URL + '/' + book_id, data, {
      headers: {
        Authorization: token,
      },
    });
  }
  getUserReview() {
    let token = '';
    if (localStorage.getItem('user')) {
      token = JSON.parse(localStorage.getItem('user')).token;
    }

    return axios.get(API_URL + '/user-reviews', {
      headers: {
        Authorization: token,
      },
    });
  }

  updateReview(review_id, data) {
    let token = '';
    if (localStorage.getItem('user')) {
      token = JSON.parse(localStorage.getItem('user')).token;
    }

    return axios.patch(API_URL + '/' + review_id, data, {
      headers: {
        Authorization: token,
      },
    });
  }

  deleteReview(review_id) {
    let token = '';
    if (localStorage.getItem('user')) {
      token = JSON.parse(localStorage.getItem('user')).token;
    }

    return axios.delete(API_URL + '/' + review_id, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new ReviewService();
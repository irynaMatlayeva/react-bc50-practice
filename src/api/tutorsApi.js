import axios from 'axios';

const TUTORS_URL = 'tutors';

const instance = axios.create({
  baseURL: 'https://63a99dbd594f75dc1dbb0bc9.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchTutors = () => {
    return instance.get(`/${TUTORS_URL}`);
}

export const createTutor = (tutor) => {
    return instance.post(`/${TUTORS_URL}`, JSON.stringify(tutor));
}

export const deleteTutor = (id) => {
    return instance.delete(`/${TUTORS_URL}/${id}`);
}

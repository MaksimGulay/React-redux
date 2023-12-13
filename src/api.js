import axios from 'axios';

axios.defaults.baseURL = 'https://65242edeea560a22a4e98d0e.mockapi.io/';

export const fetchQuizzes = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const deleteQuiz = async quizId => {
  const response = await axios.delete(`/quizzes/${quizId}`);
  return response.data;
};

export const createQuiz = async quiz => {
  const response = await axios.post('/quizzes', quiz);
  return response.data;
};

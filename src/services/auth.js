import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async credentials => {
  const { data } = await instance.post('/users/signup', credentials);
  setToken(data.token);
  // console.log(data);
  return data;
};

export const login = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  setToken(data.token);

  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/users/logout');
  setToken();
  return data;
};

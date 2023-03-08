import { instance } from './contacts';

export const signup = data => {
  return instance.post('/user/signup', data);
};

export const login = data => {
  return instance.post('/user/login', data);
};

import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signup = data => {
  return contactsInstance.post('/user/signup', data);
};

export const login = data => {
  return contactsInstance.post('/user/login', data);
};

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const addContactByData = async data => {
  const { data: result } = await contactsInstance.post('/contacts', data);
  return result;
};

export const deleteContactById = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};

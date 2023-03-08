import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContactByData = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContactById = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};

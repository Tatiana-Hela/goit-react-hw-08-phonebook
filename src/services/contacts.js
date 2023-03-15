import { instance } from './auth';

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

export const updateContactById = async (contactId, values) => {
  const { data } = await instance.patch(`/contacts/${contactId}`, values);
  return data;
};

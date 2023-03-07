const fields = {
  name: {
    type: 'text',
    name: 'name',
    require: true,
    label: 'Name',
    placeholder: 'Enter name',
  },
  email: {
    type: 'email',
    name: 'email',
    require: true,
    label: 'Email',
    placeholder: 'Enter email',
  },
  password: {
    type: 'password',
    name: 'password',
    require: true,
    label: 'Password',
    placeholder: 'Enter password',
  },
};
export default fields;

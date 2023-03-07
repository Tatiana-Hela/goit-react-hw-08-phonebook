import useForm from 'shared/hooks/useForm';
import Button from 'shared/Button/Button';
import TextField from 'shared/TextField/TextField';
import fields from './fields';
import initialState from './initialState';

import css from '../RegisterForm/RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};
export default RegisterForm;

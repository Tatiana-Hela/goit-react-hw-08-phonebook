import useForm from 'hooks/useForm';
import Button from 'shared/Button/Button';
import TextField from 'shared/TextField/TextField';
import fields from './fields';
import initialState from './initialState';

import css from '../LoginForm/LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};
export default LoginForm;

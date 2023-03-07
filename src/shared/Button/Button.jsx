import css from '../Button/Button.module.css';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button className={css.button} type={type}>
      {children}
    </button>
  );
};
export default Button;

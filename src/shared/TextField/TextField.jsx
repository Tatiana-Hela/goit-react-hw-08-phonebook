import css from '../TextField/TextField.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        {label}
        <input className={css.input} onChange={handleChange} {...props} />
      </label>
    </div>
  );
};
export default TextField;

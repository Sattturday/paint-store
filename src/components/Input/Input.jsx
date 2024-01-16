import './Input.scss';

export const Input = ({
  name,
  title,
  errors,
  values,
  handleChange,
  ...props
}) => {
  return (
    <label className='input'>
      <span className={`input__icon input__icon_type_${name}`}></span>
      <input
        className={`input__field${
          (errors[name] && ' input__field_type_error') || ''
        }`}
        name={name}
        value={values[name] || ''}
        onChange={handleChange}
        required
        {...props}
      />
      <span className='input__error'>{errors[name]}</span>
    </label>
  );
};

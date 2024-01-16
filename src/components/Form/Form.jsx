import './Form.scss';

export const Form = ({ name, buttonText, onSubmit, isValid, children }) => {
  return (
    <form
      className={`form form_type_${name}`}
      name={name}
      onSubmit={onSubmit}
      noValidate
    >
      {children}
      <p className='form__confirm'>
        Нажимая на кнопку «Отправить», Вы принимаете условия&nbsp;
        <span>Соглашения</span>
      </p>
      <button
        className={`form__submit form__submit_type_${name}${
          (!isValid && ' form__submit_disabled') || ''
        }`}
        type='submit'
        disabled={!isValid}
      >
        {buttonText}
        <span />
      </button>
    </form>
  );
};

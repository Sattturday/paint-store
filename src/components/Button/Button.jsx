import img from '../../images/icons/arrow-right-btn.svg';
import basket from '../../images/icons/basket-white.svg';
import './Button.scss';

export const Button = ({ type, text }) => {
  const src = type === 'empty' ? basket : img;

  return (
    <button className={`button button_type_${type}`}>
      {text}
      <img className='button__image' src={src} alt='Стрелка вправо' />
    </button>
  );
};

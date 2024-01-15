import img from '../../images/icons/arrow-right-btn.svg';
import './Button.scss';

export const Button = ({ type, text }) => {
  return (
    <button className={`button button_type_${type}`}>
      {text}
      <img src={img} alt='Стрелка вправо' />
    </button>
  );
};

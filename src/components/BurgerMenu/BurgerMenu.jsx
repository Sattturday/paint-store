import './BurgerMenu.scss';
import { useState } from 'react';

import cat from '../../images/icons/catalog-pink.svg';
import basket from '../../images/icons/basket-pink.svg';
import favorit from '../../images/icons/favorites-pink.svg';
import profile from '../../images/icons/profile-pink.svg';
import mail from '../../images/icons/mail-pink.svg';
import call from '../../images/icons/call-pink.svg';
import burgerIcon from '../../images/icons/burger_icon.svg';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className='burger-menu'>
      <img
        className='burger-menu__img'
        src={burgerIcon}
        alt='Открыть боковое меню'
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className='burger-menu__owerlay' onMouseDown={handleOverlay} />
      )}
      <div
        className={
          isOpen
            ? 'burger-menu__container burger-menu__container_open'
            : 'burger-menu__container'
        }
        onClick={() => setIsOpen(false)}
      >
        <ul className='burger-menu__list'>
          <li className='burger-menu__item'>
            <img className='burger-menu__icon' src={cat} alt='Иконка' />
            Каталог
          </li>
          <li className='burger-menu__item'>
            <img className='burger-menu__icon' src={basket} alt='Иконка' />
            Корзина
          </li>
          <li className='burger-menu__item'>
            <img className='burger-menu__icon' src={favorit} alt='Иконка' />
            Избранное
          </li>
          <li className='burger-menu__item'>
            <img className='burger-menu__icon' src={profile} alt='Иконка' />
            Профиль
          </li>
        </ul>
        <ul className='burger-menu__list'>
          <li className='burger-menu__item'>
            <img className='burger-menu__icon' src={mail} alt='Иконка' />
            info@kraskizdes.ru
          </li>
          <li className='burger-menu__item'>
            <img className='burger-menu__icon' src={call} alt='Иконка' />8 (495)
            120-81-55
          </li>
        </ul>
        <ul className='burger-menu__list burger-menu__list_bottom'>
          <li className='burger-menu__item'>Доставка</li>
          <li className='burger-menu__item'>Оплата</li>
          <li className='burger-menu__item'>Возврат</li>
          <li className='burger-menu__item'>Помощь</li>
          <li className='burger-menu__item'>О нас</li>
          <li className='burger-menu__item'>Для бизнеса</li>
        </ul>

        <button
          className='burger-menu__close-btn'
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

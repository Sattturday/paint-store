import { NavLink } from 'react-router-dom';
import './HeaderNav.scss';

export const HeaderNav = () => {
  return (
    <nav className='header-nav'>
      <ul className='header-nav__list'>
        <li>
          <NavLink className='header-nav__link' to=''>
            Доставка
          </NavLink>
        </li>
        <li>
          <NavLink className='header-nav__link' to=''>
            Оплата
          </NavLink>
        </li>
        <li>
          <NavLink className='header-nav__link' to=''>
            Возврат
          </NavLink>
        </li>
        <li>
          <NavLink className='header-nav__link' to=''>
            Помощь
          </NavLink>
        </li>
        <li>
          <NavLink className='header-nav__link' to=''>
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink className='header-nav__link' to='#'>
            Для бизнеса
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

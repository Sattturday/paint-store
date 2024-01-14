import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

import img1 from '../../images/icons/1.svg';
import img2 from '../../images/icons/2.svg';
import img3 from '../../images/icons/3.svg';
import img4 from '../../images/icons/4.svg';
import img5 from '../../images/icons/5.svg';
import img6 from '../../images/icons/6.svg';

import './HeaderNavBottom.scss';

export const HeaderNavBottom = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li>
          <NavLink className='nav__link' to=''>
            <img src={img1} alt='Акции' />
            Акции
          </NavLink>
        </li>
        <li>
          <NavLink className='nav__link' to=''>
            <img src={img2} alt='Бренды' />
            Бренды
          </NavLink>
        </li>
        <li>
          <NavLink className='nav__link' to=''>
            <img src={img3} alt='Premium бренды' />
            Premium бренды
          </NavLink>
        </li>
        <li>
          <NavLink className='nav__link' to=''>
            <img src={img4} alt='Подбор по параметрам' />
            Подбор по параметрам
          </NavLink>
        </li>
        <li>
          <NavLink className='nav__link' to=''>
            <img src={img5} alt='Онлайн-колеровка' />
            Онлайн-колеровка
          </NavLink>
        </li>
        <li>
          <NavLink className='nav__link' to='#'>
            <img src={img6} alt='Новости компании' />
            Новости компании
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

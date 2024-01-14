import { Link } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';
import profile from '../../images/icons/profile.svg';
import favorites from '../../images/icons/favorites.svg';
import basket from '../../images/icons/basket.svg';
import catalog from '../../images/icons/catalog.svg';
import call from '../../images/icons/call.svg';
import { HeaderNav } from '../HeaderNav';
import { SearchForm } from '../SearchForm';

import './Header.scss';
import { HeaderNavBottom } from '../HeaderNavBottom';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container header__container_type_up'>
        <div className='wrapper'>
          <div className='header__items'>
            <Link className='header__item header__item_type_location' to=''>
              Магазины
            </Link>
            <Link className='header__item header__item_type_mail' to=''>
              info@kraskizdes.ru
            </Link>
          </div>
          <HeaderNav />
        </div>
      </div>
      <div className='header__container header__container_type_center'>
        <div className='wrapper'>
          <img className='header__logo' src={logo} alt='Логотип магазина' />
          <button className='header__catalog-btn'>
            Каталог
            <img src={catalog} alt='Перейти в Каталог' />
          </button>
          <SearchForm />
          <div className='header__buttons'>
            <button className='header__btn'>
              <img src={profile} alt='Войти в аккаунт' />
              Войти
            </button>
            <button className='header__btn'>
              <img src={favorites} alt='Перейти в Избранное' />
              Избранное
              <span className='header__count'>7</span>
            </button>
            <button className='header__btn'>
              <img src={basket} alt='Перейти в Корзину' />
              Корзина
              <span className='header__count'>4</span>
            </button>
          </div>
        </div>
      </div>
      <div className='header__container header__container_type_bottom'>
        <div className='wrapper'>
          <HeaderNavBottom />
          <button className='header__call-btn'>
            <img src={call} alt='Позвонить' />8 (495) 120-81-55
          </button>
        </div>
      </div>
    </header>
  );
};

import { Link } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';
import profile from '../../images/icons/profile.svg';
import favorites from '../../images/icons/favorites.svg';
import basket from '../../images/icons/basket.svg';
import catalog from '../../images/icons/catalog.svg';
import call from '../../images/icons/call.svg';
import callBlack from '../../images/icons/call-black.svg';
import map from '../../images/icons/location.svg';
import color from '../../images/1.png';
import { headerTags } from '../../utils/tagsData';
import { Button } from '../Button';
import { HeaderNav } from '../HeaderNav';
import { SearchForm } from '../SearchForm';
import { TagSlider } from '../TagSlider';

import './Header.scss';
import { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header = () => {
  const [isBasketOpen, setBasketOpen] = useState(false);

  const handleMouseEnter = () => {
    setBasketOpen(true);
  };

  const handleMouseLeave = () => {
    setBasketOpen(false);
  };

  return (
    <header className='header'>
      <div className='header__container header__container_type_up'>
        <div className='wrapper'>
          <div className='header__items'>
            <Link className='header__item header__item_type_location' to=''>
              <span>Магазины</span>
            </Link>
            <Link className='header__item header__item_type_mail' to=''>
              info@kraskizdes.ru
            </Link>
          </div>
          <HeaderNav />
        </div>
      </div>
      <div className='header__small'>
        <img className='header__icon' src={map} alt='Иконка' />
        <img className='header__icon header__icon_m' src={logo} alt='Иконка' />
        <img className='header__icon' src={callBlack} alt='Иконка' />
      </div>

      <div className='header__container header__container_type_center'>
        <div className='wrapper'>
          <img className='header__logo' src={logo} alt='Логотип магазина' />
          <button className='header__catalog-btn'>
            Каталог
            <img src={catalog} alt='Перейти в Каталог' />
          </button>
          <div className='header__burger'>
            <BurgerMenu />
          </div>
          <SearchForm />
          <div className='header__buttons'>
            <button className='header__btn'>
              <img
                className='header__btn-img'
                src={profile}
                alt='Войти в аккаунт'
              />
              Войти
            </button>
            <button className='header__btn'>
              <img
                className='header__btn-img'
                src={favorites}
                alt='Перейти в Избранное'
              />
              Избранное
              <span className='header__count'>7</span>
            </button>
            <button
              className='header__btn'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className='header__btn-img'
                src={basket}
                alt='Перейти в Корзину'
              />
              Корзина
              <span className='header__count'>4</span>
              {isBasketOpen && (
                <div className='basket-modal'>
                  <p className='basket-modal__title'>
                    Корзина<span>&nbsp;6</span>
                  </p>
                  <ul className='basket-modal__list'>
                    <li className='gorizontal-card'>
                      <img
                        className='gorizontal-card__image'
                        src={color}
                        alt='Ведерко краски'
                      />
                      <div className='gorizontal-card__info'>
                        <p className='gorizontal-card__title'>
                          Flugger Dekso 25 Краска полуматовая с очень высокой
                          прочностью для внутренних работ
                        </p>
                        <div>
                          <p className='gorizontal-card__item'>0.75 л</p>
                          <p className='gorizontal-card__item'>Полуматовый</p>
                          <p className='gorizontal-card__item gorizontal-card__item_color'>
                            Flugger 900 FL 1358
                          </p>
                        </div>
                      </div>
                      <div className='gorizontal-card__info'>
                        <div className='gorizontal-card__price-block'>
                          <p className='gorizontal-card__price'>3 360 ₽</p>
                          <p className='gorizontal-card__old-price'>3 850 ₽</p>
                        </div>
                        <p className='gorizontal-card__item'>1 шт</p>
                      </div>
                    </li>
                    <li className='gorizontal-card'>
                      <img
                        className='gorizontal-card__image'
                        src={color}
                        alt='Ведерко краски'
                      />
                      <div className='gorizontal-card__info'>
                        <p className='gorizontal-card__title'>
                          Flugger Dekso 25 Краска полуматовая с очень высокой
                          прочностью для внутренних работ
                        </p>
                        <div>
                          <p className='gorizontal-card__item'>2.8 л</p>
                          <p className='gorizontal-card__item'>Полуматовый</p>
                          <p className='gorizontal-card__item gorizontal-card__item_color'>
                            Flugger 900 FL 1443
                          </p>
                        </div>
                      </div>
                      <div className='gorizontal-card__info'>
                        <div className='gorizontal-card__price-block'>
                          <p className='gorizontal-card__price'>18 740 ₽</p>
                          <p className='gorizontal-card__old-price'>19 520 ₽</p>
                        </div>
                        <p className='gorizontal-card__item'>1 шт</p>
                      </div>
                    </li>
                  </ul>
                  <p className='basket-modal__all'>
                    <span>Итого:&nbsp;</span>40 780 ₽
                  </p>
                  <div className='basket-modal__buttons'>
                    <Button text='Купить в 1 клик' />
                    <Button text='Перейти в корзину' type='empty' />
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className='header__container header__container_type_bottom'>
        <div className='wrapper'>
          <TagSlider type='header' tagsData={headerTags} />
          <button className='header__call-btn'>
            <img src={call} alt='Позвонить' />8 (495) 120-81-55
          </button>
        </div>
      </div>
    </header>
  );
};

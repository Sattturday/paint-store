import { Link } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';
import mastercard from '../../images/icons/mastercard.svg';
import visa from '../../images/icons/visa.svg';
import mir from '../../images/icons/mir-logo.svg';

import './Footer.scss';
import { aboutData, catalogData1, catalogData2 } from '../../utils/data';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='footer__container'>
          <div className='footer__wrapper'>
            <div className='footer__block footer__block_type_left'>
              <img className='footer__logo' src={logo} alt='Логотип магазина' />
              <p className='footer__rating'>5/5</p>
              <button className='footer__button'>Написать директору</button>
            </div>
            <div className='footer__block footer__block_type_right'>
              <div className='footer__contact'>
                <p className='footer__title'>Телефон</p>
                <p className='footer__item'>8 (495) 120-81-55</p>
              </div>
              <div className='footer__contact'>
                <p className='footer__title'>Электронная почта</p>
                <p className='footer__item'>info@kraskizdes.ru</p>
              </div>
              <ul className='footer__icons'>
                <a
                  className='footer__icon footer__icon_type_vk'
                  href='http://vk.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='VK'
                />
                <a
                  className='footer__icon footer__icon_type_youtube'
                  href='https://www.youtube.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='VK'
                />
              </ul>
              <ul className='footer__cards'>
                <img
                  className='footer__card'
                  src={mastercard}
                  alt='MasterCard'
                />
                <img className='footer__card' src={visa} alt='VISA' />
                <img className='footer__card' src={mir} alt='МИР' />
              </ul>
            </div>
            <div className='footer__list'>
              <p className='footer__title'>О компании</p>
              <ul>
                {aboutData.map((item, index) => (
                  <li key={index}>
                    <Link className='footer__link' to=''>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer__list footer__list_cat'>
              <p className='footer__title'>Каталог</p>
              <ul>
                {catalogData1.map((item, index) => (
                  <li key={index}>
                    <Link className='footer__link' to=''>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                {catalogData2.map((item, index) => (
                  <li key={index}>
                    <Link className='footer__link' to=''>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className='footer__copyright'>
            © 2023 Интернет-магазин лакокрасочной продукции
          </p>
        </div>
      </div>
    </footer>
  );
};

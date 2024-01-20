import img1 from '../../images/about1.png';
import img2 from '../../images/about2.png';
import img3 from '../../images/about3.png';
import './About.scss';

export const About = () => {
  return (
    <section className='about'>
      <div className='wrapper'>
        <ul className='about__list'>
          <li className='about__item'>
            <img className='about__image' src={img1} alt='Подбор цвета' />
            <p className='about__title'>Профессиональный подбор цвета</p>
            <p className='about__subtitle'>
              Отвечаем на&nbsp;вопросы покупателей в&nbsp;течение 10&nbsp;минут
            </p>
          </li>
          <li className='about__item'>
            <img className='about__image' src={img2} alt='Выбор краски' />
            <p className='about__title'>Широкий выбор красок</p>
            <p className='about__subtitle'>
              Дарим подарки и скидки до 70% всем покупателям
            </p>
          </li>
          <li className='about__item'>
            <img className='about__image' src={img3} alt='Гарантия' />
            <p className='about__title'>Гарантия качества продукции</p>
            <p className='about__subtitle'>
              Соответствуем требованиям и стандартам качества
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

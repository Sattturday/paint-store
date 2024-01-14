import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { cardsData } from '../../utils/data';
import { SliderButton } from '../SliderButton';
import { Card } from '../Card';
import './Promo.scss';

export const Promo = () => {
  const promoSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    prevArrow: <SliderButton type='prev' />,
    nextArrow: <SliderButton type='next' />,
  };

  return (
    <section className='promo'>
      <div className='wrapper'>
        <div className='promo__container'>
          <div className='promo__slider'>
            <Slider {...promoSettings}>
              <div className='promo__slide'>
                <div className='promo__banner'>
                  <button className='promo__banner-btn' type='button' />
                </div>
              </div>
              {cardsData.map((cardData) => (
                <div key={cardData.id} className='promo__slide'>
                  <Card data={cardData} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

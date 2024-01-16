import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SliderButton } from '../SliderButton';
import './CardsSlider.scss';

export const CardsSlider = ({ cards, type = 'popular' }) => {
  const cardsSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
    arrows: true,
    prevArrow: <SliderButton type='prev' />,
    nextArrow: <SliderButton type='cat-next' />,
  };
  return (
    <div className={`cards cards_type_${type}`}>
      <Slider {...cardsSettings}>
        {cards.map((card, index) => (
          <div className='cards__slide' key={index}>
            {card}
          </div>
        ))}
      </Slider>
    </div>
  );
};

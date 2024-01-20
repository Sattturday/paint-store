import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './TagSlider.scss';

export const TagSlider = ({ type = 'popular', tagsData }) => {
  const tagsSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    arrows: false,
  };
  return (
    <div className={`tags tags_type_${type}`}>
      <Slider {...tagsSettings}>
        {tagsData.map((item, index) => (
          <div className='tags__slide' key={index}>
            <div
              className={`tags__item${
                index === 1 ? ' tags__item_special' : ''
              }`}
            >
              {item.img && <img src={item.img} alt={item.name} />}
              {item.name}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

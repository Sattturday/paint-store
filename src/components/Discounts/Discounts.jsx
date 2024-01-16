import { cardsData } from '../../utils/data';
import { Button } from '../Button';
import { CardsSlider } from '../CardsSlider/CardsSlider';
import { Card } from '../Card';
import './Discounts.scss';

export const Discounts = () => {
  const cards = cardsData.map((data) => <Card data={data} />);

  return (
    <section className='discounts'>
      <div className='wrapper'>
        <div className='discounts__container'>
          <p className='discounts__title'>Скидки</p>
          <Button type='discounts' text='Все скидки' />
          <CardsSlider cards={cards} type='discounts' />
        </div>
      </div>
    </section>
  );
};

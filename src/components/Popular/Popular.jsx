import { categoriesData } from '../../utils/data';
import { popularTags } from '../../utils/tagsData';
import { Button } from '../Button';
import { CardsSlider } from '../CardsSlider/CardsSlider';
import { CategoryCard } from '../CategoryCard';
import { TagSlider } from '../TagSlider';
import './Popular.scss';

export const Popular = () => {
  const cards = categoriesData.map((data) => <CategoryCard data={data} />);

  return (
    <section className='popular'>
      <div className='wrapper'>
        <div className='popular__container'>
          <p className='popular__title'>Популярные категории</p>
          <Button type='popular' text='Все категории' />
          <TagSlider tagsData={popularTags} />
          <CardsSlider cards={cards} />
        </div>
      </div>
    </section>
  );
};

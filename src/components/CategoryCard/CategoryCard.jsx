import './CategoryCard.scss';

export const CategoryCard = ({ data }) => {
  return (
    <div className='category-card'>
      <img className='category-card__image' src={data.img} alt={data.title} />
      <button className='category-card__button' type='button'>
        <p className='category-card__title'>{data.title}</p>
        <p className='category-card__subtitle'>{data.subtitle}</p>
      </button>
    </div>
  );
};

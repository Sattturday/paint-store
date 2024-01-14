import './Card.scss';

export const Card = ({ data }) => {
  return (
    <div className='card'>
      <span className='card__sale'>
        {`-${Math.floor((data.price / data.old_price) * 100)}%`}
      </span>
      <img className='card__image' src={data.img} alt={data.name} />
      <p className='card__name'>{data.name}</p>
      <p className='card__volume'>
        {`${data.volume1} л `}
        &middot;
        {` ${data.volume1} л`}
      </p>
      <p className='card__price'>
        {`${data.price} ₽ `}
        <span>{`${data.price} ₽`}</span>
      </p>
      <button className='card__button' type='button' />
    </div>
  );
};

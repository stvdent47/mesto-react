import React from 'react';

const Card = (props) => {
  const handleCardClick = () => {
    props.onCardClick(props.card);
  }
  
  return (
    <li className='photo-elements__item'>
      <img
        className='photo-elements__image'
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />

      <div className='photo-elements__caption'>
        <h2 className='photo-elements__text'>{props.card.name}</h2>
        <div className='photo-elements__like-container'>
          <button
            className='photo-elements__like-button'
            type='button'
            aria-label='Нравится'
          ></button>
          <p className='photo-elements__like-counter'>{props.card.likes.length}</p>
        </div>
        <button
          className='photo-elements__delete-button'
          type='button'
          aria-label='Удалить'
        ></button>
      </div>
    </li>
  );
};

export default Card;
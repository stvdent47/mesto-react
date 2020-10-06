import React from 'react';

const Card = (props) => {
  return (
    <li className='photo-elements__item'>
      <img
        className='photo-elements__image'
        src={props.link}
        alt={props.name}
      />

      <div className='photo-elements__caption'>
        <h2 className='photo-elements__text'>{props.name}</h2>
        <div className='photo-elements__like-container'>
          <button
            className='photo-elements__like-button'
            type='button'
            aria-label='Нравится'
          ></button>
          <p className='photo-elements__like-counter'>{props.likes}</p>
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

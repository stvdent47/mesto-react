import React, { useState, useEffect, useContext } from 'react';
import Card from './Card.jsx';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

const Main = (props) => {
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch(err => alert(err));
  }

  const handleCardDelete = (card) => {
    api.removeCard(card._id)
      .then(() => {
        const newCards = cards.filter(item => item._id !== card._id);
        setCards(newCards);
      })
      .catch(err => alert(err));
  }

  useEffect(() => {
    api.getCards().then((initialCards) => setCards(initialCards));
  }, []);

  return (
    <main className='main'>
      <section className='profile'>
        <div
          className='profile__photo-container'
          onClick={props.onEditAvatar}
        >
          <img
            src={currentUser.avatar}
            alt='фото профиля'
            className='profile__photo'
          />
        </div>

        <div className='profile__info'>
          <div className='profile__title'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button
              className='profile__edit-button'
              type='button'
              aria-label='Редактировать'
              onClick={props.onEditProfile}
            ></button>
          </div>

          <p className='profile__description'>{currentUser.about}</p>
        </div>

        <button
          className='profile__add-button'
          type='button'
          aria-label='Добавить'
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className='photo-elements'>
        <ul className='photo-elements__list'>
          {cards.map((item) => {
            return (
              <Card
                card={item}
                key={item._id}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;

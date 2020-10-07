import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import profilePhoto from '../images/profile-photo.jpg';
import api from '../utils/api.js';

const Main = (props) => {
  const [userName, setUserName] = useState('...');
  const [userDescription, setUserDescription] = useState('...');
  const [userAvatar, setUserAvatar] = useState(profilePhoto);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getCards()])
      .then((res) => {
        const [profileInfo, initialCards] = res;
        setUserName(profileInfo.name);
        setUserDescription(profileInfo.about);
        setUserAvatar(profileInfo.avatar);
        setCards(initialCards);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__photo-container' onClick={props.onEditAvatar}>
          <img src={userAvatar} alt='фото профиля' className='profile__photo' />
        </div>

        <div className='profile__info'>
          <div className='profile__title'>
            <h1 className='profile__name'>{userName}</h1>
            <button
              className='profile__edit-button'
              type='button'
              aria-label='Редактировать'
              onClick={props.onEditProfile}
            ></button>
          </div>

          <p className='profile__description'>{userDescription}</p>
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
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;

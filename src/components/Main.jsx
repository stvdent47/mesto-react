import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import profilePhoto from '../images/profile-photo.jpg';
import api from '../utils/Api.js';

const Main = (props) => {
  const [userName, setUserName] = useState('...');
  const [userDescription, setUserDescription] = useState('...');
  const [userAvatar, setUserAvatar] = useState(profilePhoto);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProfileInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => alert(err));

    api
      .getCards()
      .then((res) => setCards(res))
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
                key={item._id}
                link={item.link}
                name={item.name}
                likes={item.likes.length}
                card={item}
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

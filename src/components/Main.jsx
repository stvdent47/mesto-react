import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import api from '../utils/api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

const Main = (props) => {
  // const [userName, setUserName] = useState('...');
  // const [userDescription, setUserDescription] = useState('...');
  // const [userAvatar, setUserAvatar] = useState(profilePhoto);
  const [cards, setCards] = useState([]);

  const currentUser = React.useContext(CurrentUserContext)

  useEffect(() => {
    // Promise.all([api.getProfileInfo(), api.getCards()])
    //   .then((res) => {
    //     const [profileInfo, initialCards] = res;
    //     // setUserName(profileInfo.name);
    //     // setUserDescription(profileInfo.about);
    //     // setUserAvatar(profileInfo.avatar);
    //     setCards(initialCards);
    //   })
    //   .catch((err) => alert(err));
    api.getCards()
      .then(initialCards => setCards(initialCards))
  }, []);

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__photo-container' onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt='фото профиля' className='profile__photo' />
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
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;

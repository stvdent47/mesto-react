import React from 'react';
import profilePhoto from '../images/profile-photo.jpg';

const Main = (props) => {
  return (
    <main className='main'>
      <section className='profile'>
        <div
          className='profile__photo-container'
          onClick={props.onEditAvatar}
        >
          <img
            src={profilePhoto}
            alt='фото профиля'
            className='profile__photo'
          />
        </div>

        <div className='profile__info'>
          <div className='profile__title'>
            <h1 className='profile__name'>...</h1>
            <button
              className='profile__edit-button'
              type='button'
              aria-label='Редактировать'
              onClick={props.onEditProfile}
            ></button>
          </div>

          <p className='profile__description'>...</p>
        </div>

        <button
          className='profile__add-button'
          type='button'
          aria-label='Добавить'
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className='photo-elements'>
        <ul className='photo-elements__list'></ul>
      </section>
    </main>
  );
}

export default Main;
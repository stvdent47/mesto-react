import React, { Component } from 'react';
import profilePhoto from '../../images/profile-photo.jpg';

export default class Main extends Component {
  handleEditAvatarClick = () => {
    document.querySelector('.avatar-update-modal').classList.add('modal_opened');
  };

  handleEditProfileClick = () => {
    document.querySelector('.edit-modal').classList.add('modal_opened');
  };

  handleAddPlaceClick = () => {
    document.querySelector('.add-modal').classList.add('modal_opened');
  };

  render() {
    return (
      <main className='main'>
        <section className='profile'>
          <div
            className='profile__photo-container'
            onClick={this.handleEditAvatarClick}
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
                onClick={this.handleEditProfileClick}
              ></button>
            </div>

            <p className='profile__description'>...</p>
          </div>

          <button
            className='profile__add-button'
            type='button'
            aria-label='Добавить'
            onClick={this.handleAddPlaceClick}
          ></button>
        </section>

        <section className='photo-elements'>
          <ul className='photo-elements__list'></ul>
        </section>
      </main>
    );
  }
}

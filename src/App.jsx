import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import PopupWithForm from './components/PopupWithForm.jsx';
import ImagePopup from './components/ImagePopup.jsx';

const App = (props) => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={() => handleEditProfileClick()}
        onAddPlace={() => handleAddPlaceClick()}
        onEditAvatar={() => handleEditAvatarClick()}
      />
      <Footer />
      <PopupWithForm
        name='edit-modal'
        title='Редактировать профиль'
        submitText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        children={
          <>
            <input
              type='text'
              name='profile-name'
              id='profile-name-input'
              placeholder='Ваше имя'
              className='modal__input'
              required
              minLength='2'
              maxLength='40'
              autoComplete='off'
            />
            <p
              className='modal__input-error-message'
              id='profile-name-error'
            ></p>
            <input
              type='text'
              name='profile-job'
              id='profile-job-input'
              placeholder='Ваша профессия'
              className='modal__input'
              required
              minLength='2'
              maxLength='200'
              autoComplete='off'
            />
            <p
              className='modal__input-error-message'
              id='profile-job-error'
            ></p>
          </>
        }
      />
      <PopupWithForm
        name='add-modal'
        title='Новое место'
        submitText='Сохранить'
        isOpen={isAddPlacePopupOpen}
        children={
          <>
            <input
              type='text'
              name='place-name'
              id='place-name-input'
              placeholder='Название'
              className='modal__input'
              required
              minLength='1'
              maxLength='30'
              autoComplete='off'
            />
            <p className='modal__input-error-message' id='place-name-error'></p>

            <input
              type='url'
              name='place-link'
              id='place-link-input'
              placeholder='Ссылка на картинку'
              className='modal__input'
              required
            />
            <p className='modal__input-error-message' id='place-link-error'></p>
          </>
        }
      />
      <PopupWithForm
        name='avatar-update-modal'
        title='Обновить аватар'
        submitText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        children={
          <>
            <input
              type='url'
              name='avatar-link'
              id='avatar-link-input'
              placeholder='Ссылка на картинку'
              className='modal__input'
              required
            />
            <p
              className='modal__input-error-message'
              id='avatar-link-error'
            ></p>
          </>
        }
      />
      <PopupWithForm
        name='remove-card-modal'
        title='Вы уверены?'
        submitText='Да'
        children=''
      />
      <ImagePopup />
    </>
  );
};

export default App;

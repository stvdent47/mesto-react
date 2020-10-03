import React from 'react';
import logo from '../../logo.svg';
import './App.css';

function App() {
  return (
      <header className="header">
        <img src="./images/logo.svg" alt="логотип место" className="header__logo" />
      </header>

  <main className="main">
    <section className="profile">
      <div className="profile__photo-container">
        <img src="./images/profile-photo.jpg" alt="фото профиля" className="profile__photo">
      </div>

      <div className="profile__info">
        <div className="profile__title">
          <h1 className="profile__name">...</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
        </div>

        <p className="profile__description">...</p>

      </div>

      <button className="profile__add-button" type="button" aria-label="Добавить"></button>
    </section>

    <section className="photo-elements">
      <ul className="photo-elements__list"></ul>
    </section>
  </main>

  <footer className="footer">
    <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
  </footer>

  <div className="modal edit-modal">
    <div className="modal__container">
      <h2 className="modal__title">Редактировать профиль</h2>

      <form action="#" name="form-edit-modal" className="modal__form" method="POST" noValidate>
        <input type="text" name="profile-name" id="profile-name-input" placeholder="Ваше имя" className="modal__input"
               required minLength="2" maxLength="40" autoComplete="off">
          <p className='modal__input-error-message' id="profile-name-error"></p>

          <input type="text" name="profile-job" id="profile-job-input" placeholder="Ваша профессия"
                 className="modal__input" required minLength="2" maxLength="200" autoComplete="off">
            <p className='modal__input-error-message' id="profile-job-error"></p>

            <button type="submit" className="modal__button">Сохранить</button>
      </form>

      <button className="modal__close-button" type="button" aria-label="Закрыть"></button>
    </div>
  </div>

  <div className="modal add-modal">
    <div className="modal__container">
      <h2 className="modal__title">Новое место</h2>

      <form action="#" name="form-add-modal" className="modal__form" method="POST" noValidate>
        <input type="text" name="place-name" id="place-name-input" placeholder="Название" className="modal__input"
               required minLength="1" maxLength="30" autoComplete="off">
          <p className="modal__input-error-message" id="place-name-error"></p>

          <input type="url" name="place-link" id="place-link-input" placeholder="Ссылка на картинку"
                 className="modal__input" required>
            <p className="modal__input-error-message" id="place-link-error"></p>

            <button type="submit" className="modal__button modal__button_disabled" disabled>Создать</button>
      </form>

      <button className="modal__close-button" type="button" aria-label="Закрыть"></button>
    </div>
  </div>

  <div className="modal avatar-update-modal">
    <div className="modal__container">
      <h2 className="modal__title">Обновить аватар</h2>

      <form action="#" name="form-add-modal" className="modal__form" method="POST" noValidate>
        <input type="url" name="avatar-link" id="avatar-link-input" placeholder="Ссылка на картинку"
               className="modal__input" required>
          <p className="modal__input-error-message" id="avatar-link-error"></p>

          <button type="submit" className="modal__button modal__button_type_update modal__button_disabled"
                  disabled>Сохранить
          </button>
      </form>

      <button className="modal__close-button" type="button" aria-label="Закрыть"></button>
    </div>
  </div>

  <div className="modal remove-card-modal">
    <div className="modal__container">
      <h2 className="modal__title modal__title_type_remove">Вы уверены?</h2>

      <form action="#" name="form-add-modal" className="modal__form" method="POST" noValidate>
        <button type="submit" className="modal__button modal__button_type_remove">Да</button>
      </form>

      <button className="modal__close-button" type="button" aria-label="Закрыть"></button>
    </div>
  </div>

  <div className="pic-modal">
    <div className="pic-modal__container">
      <figure className="pic-modal__picture">
        <img alt="Полноразмерное фото места" className="pic-modal__image">
          <figcaption className="pic-modal__caption"></figcaption>
      </figure>

      <button className="pic-modal__close-button" type="button" aria-label="Закрыть"></button>
    </div>
  </div>
  );
}

export default App;

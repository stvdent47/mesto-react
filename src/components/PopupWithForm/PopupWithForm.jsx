import React, { Component } from 'react';

export default class PopupWithForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={`modal ${this.props.name}`}>
        <div className='modal__container'>
          <h2 className='modal__title'>Редактировать профиль</h2>

          <form
            action='#'
            name={`form-${this.props.name}`}
            className='modal__form'
            method='POST'
            noValidate
          >
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

            <button type='submit' className='modal__button'>
              Сохранить
            </button>
          </form>

          <button
            className='modal__close-button'
            type='button'
            aria-label='Закрыть'
          ></button>
        </div>
      </div>
    );
  }
}

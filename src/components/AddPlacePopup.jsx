import React, {useRef } from 'react';
import PopupWithForm from './PopupWithForm.jsx';

const AddPlacePopup = (props) => {
  const nameRef = useRef('');
  const linkRef = useRef('');
  const handleAddPlaceSubmit = (e) => {
    e.preventDefault();

    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    })
  }

  return (
    <PopupWithForm
    name='add-modal'
    title='Новое место'
    submitText='Сохранить'
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleAddPlaceSubmit}
    children={
      <>
            <input
              ref={nameRef}
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
              ref={linkRef}
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
  )
}

export default AddPlacePopup;
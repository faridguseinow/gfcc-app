// src/components/PopupModal.js
import React, { useState } from 'react';

const PopupModal = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Кнопка-триггер — можно вставлять в любой div */}
      <div onClick={openModal} style={{ display: 'inline-block', cursor: 'pointer' }}>
        {trigger}
      </div>

      {/* Модальное окно */}
      {isOpen && (
        <>
          <div className="overlay" onClick={closeModal}></div>
          <div className="popup">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="popup-content">{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default PopupModal;

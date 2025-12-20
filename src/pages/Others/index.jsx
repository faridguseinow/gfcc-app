import React from 'react';
import './style.scss';
import FAQWrapper from '/src/components/FaqWrapper';
import Converter from "/src/components/Converter";

import ClientQR from '/src/components/ClientQR'; // добавь импорт

export default function index() {
  return (
    <div className='others_container'>

      <div className="clientqr_wrapper">
        <h1>QR клиента</h1>
        <ClientQR />
      </div>
      
      <div className="tools_wrapper">
        <h1>Конвертер валют</h1>
        <Converter />
      </div>

      <div className="faq_wrapper">
        <h1>Частые вопросы</h1>
        <FAQWrapper />
      </div>


    </div>
  );
}

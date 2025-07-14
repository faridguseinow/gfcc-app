import React from 'react';
import './style.scss';
import FAQWrapper from '/src/components/FaqWrapper';
import Converter from "/src/components/Converter";

export default function index() {

  return (

    <div className='others_container'>
      <div className="tools_wrapper ">
        <h1>Конвертер валют</h1>
        <Converter />
      </div>
      <div className="faq_wrapper">
        <h1>Частые вопросы</h1>
        <FAQWrapper />
      </div>

    </div>
  )
}

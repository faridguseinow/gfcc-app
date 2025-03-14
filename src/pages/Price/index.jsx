import React from 'react'
import './style.scss';
import GoogleSheet from '/src/components/GoogleSheet/index';


export default function index() {
  return (
    <div className='pricelist_container'>

      <div className='googlesheets_container'>
        <GoogleSheet />
      </div>

    </div>
  )
}

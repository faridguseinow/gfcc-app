import React from 'react';
import './style.scss';

// import Toggle from "react-toggle";

import LogoSM from '/src/assets/icons/logo_sm.svg';
import LogoTextWhite from '/src/assets/icons/logo_text.svg';
import LogoTextBlack from '/src/assets/icons/logo_text_black.svg';

export default function index() {
  // const [isDark, setIsDark] = useState(true);

  return (
    <div className="header">

        <a href={'/'}>
          <img src={LogoSM} width={35} alt="logo"/>
          <img className='logo_white' src={LogoTextWhite} width={100} alt="logo"/>
          <img className='logo_black' src={LogoTextBlack} width={100} alt="logo"/>
        </a>
    </div>
  )
}

import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

export default function index() {
  return (
    <nav className="bottom-nav">
      <NavLink className="nav-button" to="/">
        {/* <img src={HomeIcon} alt="home" /> */}
        {/* <span>🏠︎</span> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M126-86v-531l354-266 354 265.67V-86H568v-322H392v322H126Z"/></svg>
        <div className='nav_line'></div>
      </NavLink>
      <NavLink className="nav-button" to="/price">
        {/* <img src={PriceIcon} alt="price" /> */}
        {/* <span>₽</span> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M878-359 601-82q-18.29 18-41.14 27Q537-46 513-46t-46.86-9Q443.29-64 425-82L83-424q-17-17-27-39.88Q46-486.76 46-512v-277q0-51.56 36.72-88.28T171-914h277q24.7 0 47.85 9.5Q519-895 536-877l342 341q19 19 28 42t9 46.9q0 23.9-9 47T878-359ZM269.88-632Q294-632 311-648.88q17-16.88 17-41T311.12-731q-16.88-17-41-17T229-731.12q-17 16.88-17 41T228.88-649q16.88 17 41 17Z"/></svg>        <div className='nav_line'></div>
      </NavLink>
      <NavLink className="nav-button" to="/contacts">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M800-86q-131 0-259-57T307-305Q201-411 144-539.5T87-799q0-32 21-53.5t53-21.5h161q37 0 60 18t31 52l25 119q6 31-.5 53T411-593l-103 90q16 26 37.5 52.5T396-396q26 26 50 45.5t48 33.5l101-98q20-19 44.5-25.5t53.5-.5l111 25q35 10 52.5 31t17.5 55v169q0 32-21.5 53.5T800-86Z"/></svg>        {/* <img src={ContactsIcon} alt="contacts" /> */}
        {/* <span>☎</span> */}
        <div className='nav_line'></div>
      </NavLink>
      <NavLink className="nav-button" to="/maps">
        {/* <img src={MapsIcon} alt="maps" /> */}
        {/* <span>➤</span> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m600-85-240-84-174 69q-36 14-68-8t-32-62v-560q0-24 14-43t37-27l223-75 240 84 174-69q36-14 68 8t32 62v560q0 24-14 43t-37 27L600-85Zm-40-147v-440l-160-56v440l160 56Z"/></svg>        <div className='nav_line'></div>
      </NavLink>
      <NavLink className="nav-button" to="/profile">
        {/* <img src={MoreIcon} alt="profile" /> */}
        {/* <span>•••</span> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M239-291q51-37 112-57.5T480-369q68 0 130.5 22T721-290q32-42 49.5-88.5T788-480q0-127-90.5-217.5T480-788q-127 0-217.5 90.5T172-480q0 54 17 100.5t50 88.5Zm241-140q-63 0-105.5-42T332-578q0-63 42.5-105.5T480-726q63 0 105.5 42.5T628-578q0 63-42.5 105T480-431Zm0 385q-90 0-169-34t-138-93q-59-59-93-138T46-480q0-90 34-169t93-138q59-59 138-93t169-34q90 0 169 34t138 93q59 59 93 138t34 169q0 90-34 169t-93 138q-59 59-138 93T480-46Z" /></svg>        <div className='nav_line'></div>
      </NavLink>
    </nav>
  )
}

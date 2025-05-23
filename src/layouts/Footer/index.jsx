import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

export default function index() {
  return (
    <nav className="bottom-nav">
      <NavLink className="nav-button" to="/">
        {/* <img src={HomeIcon} alt="home" /> */}
        {/* <span>🏠︎</span> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M126-86v-531l354-266 354 265.67V-86H568v-322H392v322H126Z" /></svg>
        <div className='nav_line'></div>
      </NavLink>
      <NavLink className="nav-button" to="/price">
        {/* <img src={PriceIcon} alt="price" /> */}
        {/* <span>₽</span> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M878-359 601-82q-18.29 18-41.14 27Q537-46 513-46t-46.86-9Q443.29-64 425-82L83-424q-17-17-27-39.88Q46-486.76 46-512v-277q0-51.56 36.72-88.28T171-914h277q24.7 0 47.85 9.5Q519-895 536-877l342 341q19 19 28 42t9 46.9q0 23.9-9 47T878-359ZM269.88-632Q294-632 311-648.88q17-16.88 17-41T311.12-731q-16.88-17-41-17T229-731.12q-17 16.88-17 41T228.88-649q16.88 17 41 17Z" /></svg>        <div className='nav_line'></div>
      </NavLink>
      <NavLink className="nav-button" to="/contacts">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M800-86q-131 0-259-57T307-305Q201-411 144-539.5T87-799q0-32 21-53.5t53-21.5h161q37 0 60 18t31 52l25 119q6 31-.5 53T411-593l-103 90q16 26 37.5 52.5T396-396q26 26 50 45.5t48 33.5l101-98q20-19 44.5-25.5t53.5-.5l111 25q35 10 52.5 31t17.5 55v169q0 32-21.5 53.5T800-86Z" /></svg>        {/* <img src={ContactsIcon} alt="contacts" /> */}
        {/* <span>☎</span> */}
        <div className='nav_line'></div>
      </NavLink>
      <NavLink className="nav-button profile" to="/others">
        {/* <img src={MoreIcon} alt="profile" /> */}
        {/* <span>•••</span> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M436.33-267.67h91.34V-520h-91.34v252.33Zm43.72-311.66q22.12 0 37.03-14.76Q532-608.85 532-630.67q0-23.13-14.95-37.9-14.94-14.76-37.04-14.76-22.84 0-37.43 14.76Q428-653.8 428-631q0 22.23 14.96 36.95 14.97 14.72 37.09 14.72ZM480.27-52q-89.58 0-167.41-33.42-77.83-33.41-135.93-91.51-58.1-58.1-91.51-135.88Q52-390.6 52-480.24t33.42-167.52q33.41-77.88 91.4-135.68 58-57.8 135.83-91.51 77.84-33.72 167.54-33.72 89.69 0 167.65 33.67 77.96 33.66 135.71 91.37 57.74 57.71 91.43 135.72 33.69 78.02 33.69 167.73 0 89.68-33.72 167.5-33.71 77.82-91.51 135.71-57.8 57.89-135.69 91.43Q569.85-52 480.27-52Zm.06-104.67q135 0 229-93.91 94-93.92 94-229.75 0-135-93.87-229-93.88-94-229.79-94-135 0-229 93.87-94 93.88-94 229.79 0 135 93.91 229 93.92 94 229.75 94ZM480-480Z"/></svg>
        <div className='nav_line'></div>
      </NavLink>
    </nav>
  )
}

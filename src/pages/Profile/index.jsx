import React from 'react';
import './style.scss';


import UserPhoto from '/src/assets/media/photo.jpg'

export default function index() {
  return (
    <div className="profile_container">

      <div className="user_wrapper">

        <div className="user_bg">
        </div>

        <div className="user_items">

          <div className="profile_photo">
            <img src={UserPhoto} alt="user_photo" />
          </div>

          <h2>Райан Гослинг</h2>

          <a className='user_edit' href={'/user_edit'}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9999"><path d="M86-86v-234l526-526q14-14 31.5-21t36.5-7q18 0 36 7t33 21l98 96q14 14 21 32.5t7 37.5q0 19-7 37t-21 32L322-86H86Zm596-539 56-55-57-58-57 56 58 57Z" /></svg>
          </a>

        </div>

      </div>

      <div className="options_wrapper">

        <div className="options theme_wrapper">

          <div className="theme_toggle">
            <h2>Темная тема</h2>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M280-209q-112.92 0-191.96-79.06T9-480.06Q9-593 88.04-672T280-751h400q112.92 0 191.96 79.06t79.04 192Q951-367 871.96-288T680-209H280Zm0-151q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" /></svg>
          </div>
        </div>

        <div className="options conditions_wrapper">

          <a className="arrow_down">
            <h2>Условия компании</h2>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z" /></svg>
          </a>

          <div className="hidden_info">
            <p>Если вы работаете с нами дольше 2 месяцев и если у вас есть организация, зарегистрированная у нас, то вы можете оставить заказ на сумму не менее 30 тысяч рублей.  Хочу отметить, что в случаях когда вы часто меняете ассортимент отправленного заказа, когда вы отказываетесь или не вовремя забираете заказ — то заказ разбирается.</p>
          </div>
        </div>

        <div className="options faq_wrapper">

          <a className="arrow_down">
            <h2>Часто задаваемые вопросы</h2>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z" /></svg>
          </a>

          <div className="hidden_info">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe, voluptate quam iste culpa velit repellendus aliquam. Voluptatibus dolores odio omnis a cumque quisquam, totam sequi dolorum, laboriosam velit vero?</p>
          </div>

        </div>

        <div className="options instruments_wrapper">

          <a className="arrow_down">
            <h2>Полезные инструменты</h2>
            <div>
            <PopupModal />
            </div>
            
          </a>
          
          <div className="hidden_info">
            <div className="currency">
              <fxwidget-cc amount="1" decimals="2" large="false" shadow="true" symbol="false" grouping="true" border="false" from="USD" to="RUB" background-color="#003153" border-radius="0.5" lang="ru" separator=" " decimal-point="."></fxwidget-cc>
            </div>
          </div>

        </div>

      </div>



    </div>
  )
}

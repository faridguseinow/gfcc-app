import React from 'react';
import './style.scss';
import Slider from '/src/components/Slider/index.jsx';

// import catalogue images
import Roses from '/src/assets/media/catalogue/roses.jpg';
import Plants from '/src/assets/media/catalogue/plants.jpg';
import Green from '/src/assets/media/catalogue/green.jpg';
import Exotics from '/src/assets/media/catalogue/exotics.jpg';
import Dianthus from '/src/assets/media/catalogue/dianthus.jpg';
import Drugs from '/src/assets/media/catalogue/drugs.jpg';
import Chrysant from '/src/assets/media/catalogue/chrysant.jpg';
import Accessories from '/src/assets/media/catalogue/accessories.jpg';
import Package from '/src/assets/media/catalogue/packing.jpg';
import Boxes from '/src/assets/media/catalogue/boxes.jpg';
import Decor from '/src/assets/media/catalogue/dekor.jpg';
import Toys from '/src/assets/media/catalogue/iqruwki.jpg';
import Baskets from '/src/assets/media/catalogue/korzina.jpg';
import Plastic from '/src/assets/media/catalogue/plastic.jpg';
import Dried from '/src/assets/media/catalogue/dried.jpg';
import Altaj from '/src/assets/media/catalogue/altaj.jpg';
import Candlelight from '/src/assets/media/catalogue/candlelight.jpg';
import Gypsophile from '/src/assets/media/catalogue/gypsophile.jpg';
import Eucalyptus from '/src/assets/media/catalogue/eucalyptus.jpg';
import Pistach from '/src/assets/media/catalogue/pistach.jpg';
import Anthurium from '/src/assets/media/catalogue/anthurium.jpg';
import Lily from '/src/assets/media/catalogue/lily.jpg';
import Naqrada from '/src/assets/media/catalogue/naqrada.jpg';


export default function index() {

  return (
    <div className="main_container ">

      <h1>Бестселлеры</h1>

      <div className="bestsellers">

        <div className="bestsellers_items glass">
          <a href="https://gfcc.ru/product?productType=flowers&productName=spray&collection=chrysanthemum">
            <img src={Altaj}
              alt="altaj" />
          </a>
          <p>Алтай</p>
        </div>

        <div className="bestsellers_items glass">
          <a href="https://gfcc.ru/product?productType=flowers&productName=single-headed%20ecuador&collection=roses">
            <img src={Candlelight}
              alt="candlelight" />
          </a>
          <p>Кэндлайт</p>
        </div>

        <div className="bestsellers_items glass">
          <a href="https://gfcc.ru/product?productType=plants&productName=anthurium&collection=domestic">
            <img src={Anthurium}
              alt="anthurium" />
          </a>
          <p>Антуриум</p>
        </div>

        <div className="bestsellers_items glass">
          <a href="https://gfcc.ru/product?productType=flowers&productName=lily">
            <img src={Lily}
              alt="lily" />
          </a>
          <p>Лилия</p>
        </div>

        <div className="bestsellers_items glass">
          <a href="https://gfcc.ru/product?productType=plants&productName=gypsophila&collection=greenery">
            <img src={Gypsophile}
              alt="gypsophile" />
          </a>
          <p>Гипсофила</p>
        </div>

        <div className="bestsellers_items glass">
          <a href="https://gfcc.ru/product?productType=plants&productName=eucalyptus&collection=greenery">
            <img src={Eucalyptus}
              alt="eucalyptus" />
          </a>
          <p>Эвкалипт</p>
        </div>

        <div className="bestsellers_items glass">
          <a href="https://gfcc.ru/product?productType=plants&productName=pistacia&collection=greenery">
            <img src={Pistach}
              alt="pistach" />
          </a>
          <p>Фисташка</p>
        </div>

      </div>

      <h1>Награда от <span>Я</span>ндекс</h1>

      <div className="slide_wrapper glass">
        {/* <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M560-208 288-480l272-272 88 88-184 184 184 184-88 88Z" /></svg></span> */}
        {/* <Slider
          loop={true}
          options={sliderOptions}
        /> */}
        {/* <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M472-480 288-664l88-88 272 272-272 272-88-88 184-184Z"/></svg></span> */}

        <img src={Naqrada} alt="" />
      </div>

      <h1 className='catalogue_text'>Каталог товаров</h1>

      <div className="catalogue">

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/products/flowers/roses">
            <img src={Roses}
              alt="roses" />
          </a>
          <p>Розы</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/products/flowers">
            <img src={Exotics}
              alt="exotics" />
          </a>
          <p>Экзотика</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/products/flowers/chrysanthemum">
            <img src={Chrysant}
              alt="chrysant" />
          </a>
          <p>Хризантема</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/products/flowers/dianthus">
            <img src={Dianthus}
              alt="dianthus" />
          </a>
          <p>Гвоздика</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/products/plants/greenery">
            <img src={Green}
              alt="greenery" />
          </a>
          <p>Зелень</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/products/plants/domestic">
            <img src={Plants}
              alt="plants" />
          </a>
          <p>Горшечные</p>
        </div>

      </div>

      <h1 className='catalogue_text'>Сопутствующие</h1>

      <div className="catalogue">

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/products/plants/grunt">
            <img src={Drugs}
              alt="drugs" />
          </a>
          <p>Удобрения</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/product?productType=accessories&productName=dried%20flowers">
            <img src={Dried}
              alt="dried" />
          </a>
          <p>Сухоцветы</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/product?productType=accessories&productName=for%20floristry">
            <img src={Accessories}
              alt="accessories" />
          </a>
          <p>Инструменты</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/product?productType=accessories&productName=package">
            <img src={Package}
              alt="package" />
          </a>
          <p>Упаковка</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/product?productType=accessories&productName=boxes">
            <img src={Boxes}
              alt="boxes" />
          </a>
          <p>Ящики</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/product?productType=accessories&productName=baskets">
            <img src={Baskets}
              alt="baskets" />
          </a>
          <p>Корзины</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/product?productType=accessories&productName=plastic%20pots">
            <img src={Plastic}
              alt="pots" />
          </a>
          <p>Горшки</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/product?productType=accessories&productName=interior%20items">
            <img src={Decor}
              alt="decor" />
          </a>
          <p>Декор</p>
        </div>

        <div className="catalogue_items glass">
          <a href="https://gfcc.ru/product?productType=accessories&productName=soft%20toy">
            <img src={Toys}
              alt="toys" />
          </a>
          <p>Игрушки</p>
        </div>

      </div>

    </div>
  )
}

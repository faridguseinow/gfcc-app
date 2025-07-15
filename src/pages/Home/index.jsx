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


export default function index() {

  let sliderBanner = [
    {
      img: 'https://sun9-35.userapi.com/s/v1/if2/puA_I_OVHmLaimt0wyZlmnmpUppR7yLa-6Ry0TN6ByORGCJooLje3r4qhhGLgyrRTOpkORP6z_XXbpoh-Yp2whdU.jpg?quality=95&as=32x22,48x33,72x50,108x75,160x111,240x167,360x250,480x334,540x375,640x445,720x500,1080x750,1280x889,1440x1001,2360x1640&from=bu&cs=1280x0',
      title: 'Награда от Яндекс'
    },
    {
      img: 'https://sun9-17.userapi.com/s/v1/if2/fRxY17qW6a2h6uR6AwHkUzcbHeS71U2R-7q-9LnjxXjt4PfPRpX7ku1sxbiUfrZtqElvy1vGK8b9fNMQLFNOfxo6.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1920x1280&from=bu&cs=1280x0',
      title: 'Экзотические цветы'
    },
    {
      img: 'https://sun9-67.userapi.com/s/v1/if2/dyHHbT2RtUZrLA2kQx8TAZ9tBAKjQZJUHD3he01o1qb0pnPtgYFUVEuXVM6eaTYm78h01hZDpf18mBthr8y6jtiR.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=1280x0',
      title: 'Комнатные растения'
    },
    {
      img: 'https://sun9-19.userapi.com/s/v1/if2/rimasQ7GnrJrlvJ4oL5-W3YLu8QUZxpnRFJ3BMkQqRv2SPGLQ4r-WXEEyfqtDkZ_Vg4jwPp4uBDLKeipV8YULL3k.jpg?quality=95&as=32x22,48x33,72x50,108x74,160x110,240x165,360x248,480x331,540x372,640x441,720x496,1080x745,1280x882,1440x993,2560x1765&from=bu&cs=1280x0',
      title: 'Витрина хризантемы'
    },
    {
      img: 'https://sun9-33.userapi.com/s/v1/if2/zjDO0AODcUWDGuPlgdU99KKricSLjlfW3bmJk1E_LQtPAdJQ1kixmhVacgxR_PeB6QH1p-TcDRr3BCswfvfomtZA.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1920x1080&from=bu&cs=1280x0',
      title: 'Зелень'
    },
    {
      img: 'https://sun9-33.userapi.com/s/v1/if2/I9IZ4A6sTGJnM1-7PwbtpEshBdgfH1w4n6LlxE6lB3cuMaOx3kKSGr0YbduD3swAXDgTPRsMO2f0aEUKGGW8l7bv.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=1280x0',
      title: 'Розы из Голландии'
    },
    {
      img: 'https://sun9-21.userapi.com/s/v1/ig2/ple6jquWreiXUbyZoihAJEyO62sOba913rDn0bBtoC-2EoLA9QmaSBofUeZXpahpbTNsYGrAa1KH0jY2JPL06P6s.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,960x1280&from=bu&cs=960x0',
      title: 'Розы из Эквадора'
    },
    {
      img: 'https://sun9-19.userapi.com/s/v1/if2/haPD3hdfSReKddBskZO6AihqNJ-y7bJLxBSzd4LTfRJotp1_m7M02_HLTtj04rQmaNzy6GqrMRokrw3AVwfIefMA.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=1280x0',
      title: 'Розы из Кении'
    },
    {
      img: 'https://sun9-77.userapi.com/s/v1/if2/DaDT8PW_Oby2kBhXps6iHFvFWVCtgVTmdU_hUBe0kF0LHFFE0XiMRlD0tz7esjde0nMGSFpDun2WC7JVWPx-Scyi.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=1280x0',
      title: 'Сухоцветы и Силиконовые цветы'
    },
    {
      img: 'https://sun9-36.userapi.com/s/v1/if2/e67w6ABAocZ9CTJSObYA-OVZmpEi3G4AhGPvgnNn-ylAd4LWpRmKHC23S9dBxkU_H2ssfaADgBVhDHp2uG0KNcjH.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&cs=1280x0',
      title: 'Цветы из Китая'
    },
    {
      img: 'https://sun9-84.userapi.com/s/v1/if2/uT-B6tntqyG9lgwMjFQpSe5hcR0PbCePcmX3kWidyLuflG0pkwOENGUd5I1bm_AzJA78t_tf6Knbg9xhHRdgtwpR.jpg?quality=95&as=32x27,48x41,72x61,108x92,160x136,240x204,360x305,480x407,540x458,640x543,720x611,1080x916,1206x1023&from=bu&cs=1206x0',
      title: 'Упаковка'
    }

  ]

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

      <div className="slide_wrapper glass">
        <Slider
          loop={true}
          options={sliderBanner}
        />
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

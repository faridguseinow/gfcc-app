import React from 'react'
import './style.scss';

export default function index() {
  return (
    <div className="map">
      <div className='map_inner'>
        <iframe src="https://yandex.ru/map-widget/v1/?ll=37.762914%2C55.567408&mode=poi&poi%5Bpoint%5D=37.761437%2C55.567365&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D57660294184&z=18.14">
        </iframe>
      </div>
    </div>
  )
}

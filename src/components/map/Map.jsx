/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import './Map.css';

const Map = () => {
   const mapRef = useRef(null); // Создаем реф для контейнера карты

   useEffect(() => {
      if (!window.google || !window.google.maps) {
         console.error('Google Maps API не загружен. Убедитесь, что вы подключили скрипт.');
         return;
      }

      const mapOptions = {
         center: { lat: 41.88864893393547, lng: -87.71127913482755 },
         zoom: 12,
         disableDefaultUI: true, // Отключение всех кнопок
         styles: [
            {
               featureType: 'all',
               elementType: 'labels.text',
               stylers: [
                  { visibility: 'simplified' },
                  { hue: '#ff0000' }
               ]
            },
            {
               featureType: 'administrative',
               elementType: 'labels.text.fill',
               stylers: [{ color: '#803D0E' }]
            },
            {
               featureType: 'landscape',
               elementType: 'all',
               stylers: [{ color: '#fffcf3' }]
            },
            {
               featureType: 'poi',
               elementType: 'all',
               stylers: [{ visibility: 'off' }]
            },
            {
               featureType: 'road',
               elementType: 'all',
               stylers: [
                  { saturation: -100 },
                  { lightness: 45 }
               ]
            },
            {
               featureType: 'road.highway',
               elementType: 'all',
               stylers: [{ visibility: 'simplified' }]
            },
            {
               featureType: 'road.arterial',
               elementType: 'labels.icon',
               stylers: [{ visibility: 'off' }]
            },
            {
               featureType: 'transit',
               elementType: 'all',
               stylers: [{ visibility: 'off' }]
            },
            {
               featureType: 'water',
               elementType: 'all',
               stylers: [
                  { color: '#e9e4da' },
                  { visibility: 'on' }
               ]
            }
         ]
      };

      // Создаем карту, используя реф
      const map = new window.google.maps.Map(mapRef.current, mapOptions);

      // Добавляем маркер
      new window.google.maps.Marker({
         position: { lat: 41.89076559500852, lng: -87.63176836057292 },
         map: map,
         title: 'Моя локация'
      });
   }, []);

   return <div ref={mapRef} className="map-container"></div>;
};

export default Map;

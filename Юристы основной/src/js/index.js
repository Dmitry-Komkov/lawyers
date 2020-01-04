// Main js file

// Bootstrap

import Modal from 'bootstrap';

// Swiper js

import Swiper from 'swiper';

$(document).ready(function() {
    let questionSlider = new Swiper('#questions-carousel', {
        slidesPerView: 5,
        autoplay: {
            delay: 2000,
        },
        spaceBetween: 30,
        navigation : {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 3
            },
            765: {
                slidesPerView: 4
            },
            980: {
                slidesPerView: 5
            }
        }
    });

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 13,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            });

        myMap.geoObjects
            .add(new ymaps.Placemark([55.763764, 37.623446], {
                balloonContent: 'Юристы здесь'
            }, {
                preset: 'islands#icon',
                iconColor: '#4564AA'
            }))
    }

})
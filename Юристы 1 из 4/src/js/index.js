// Main js file

// Bootstrap

import Modal from 'bootstrap';

// Swiper js

import Swiper from 'swiper';

$(document).ready(function() {
    let questionSlider = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        // autoHeight: true,
        navigation : {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            980: {
                slidesPerView: 3
            }
        }
    });

    let specialistsSwiper = new Swiper('.specialists__grid-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation : {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            980: {
                slidesPerView: 4,
            }
        }
    })

    let specArrImg = Array.from($('.specialists__grid-item__img'));
    let specArrName = Array.from($('.specialists__grid-item__name'));
    
    for (let i = 0; i < specArrImg.length; i++) {
        let singleItem = specArrImg[i];
        singleItem.addEventListener('mouseenter', function() {
            document.querySelector(`.specialists__grid-item__img.img-item-${i+1}`).classList.add('hover');
        });
        singleItem.addEventListener('mouseleave', function() {
            document.querySelector(`.specialists__grid-item__img.img-item-${i+1}`).classList.remove('hover');
        });
    };
    for (let x = 0; x < specArrName.length; x++) {
        let singleItemName = specArrName[x];
        singleItemName.addEventListener('mouseenter', function() {
            document.querySelector(`.specialists__grid-item__img.img-item-${x+1}`).classList.add('hover');
        });
        singleItemName.addEventListener('mouseleave', function() {
            document.querySelector(`.specialists__grid-item__img.img-item-${x+1}`).classList.remove('hover');
        });
    };

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
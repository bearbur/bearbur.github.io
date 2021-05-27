'use strict';
/*Выбрали все из div slides с классом slide*/
var slides = document.querySelectorAll('#slides .slide');
/*выбрали первый*/
var currentSlide = 0;
/*выбрали интервал смены слайдов*/
var slideInterval = setInterval(nextSlide,3333);
/**
*функция листания
*меняет класс текущего на slide
*выбирает следующий слайд
*меняет стиль следующего (выбранного) слайда на slide showing
**/
/*function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}*/
function nextSlide() {
    goToSlide(currentSlide+1);
}
function previousSlide() {
    goToSlide(currentSlide-1);
}
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
/*Переменная, отвечающая за воспроизведение*/
var playing = true;
/*Получим элемент, отвечающий за кнопку паузы*/
var pauseButton = document.getElementById('pause');
/**
*Функция постановка на паузу
*Замена HTML у кнопки
*Остановка воспроизведения
*Пауза листания
**/
function pauseSlideshow() {
    pauseButton.innerHTML = '&#9199';
    playing = false;
    clearInterval(slideInterval);
}
/**
*Функция снятие с паузы
*Замена HTML кнопки
*Начало воспроизведения
*Запуск листания
**/
function playSlideshow() {
    pauseButton.innerHTML = '&#9208';
    playing = true;
    slideInterval = setInterval(nextSlide,3333);
}
/**
*функция клика на кнопке паузы
*если возспроизводится - то при клике пауза
*если не воспроизводится - то при клике плей
**/
pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};
/*
*Функция работоспособности кнопок
*/
var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};

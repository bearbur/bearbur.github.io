'use strict';

var slides = document.querySelectorAll('#slides-box .slide-box');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3333);
var playing = true;
var pauseButton = document.getElementById('pause');
var next = document.getElementById('next');
var previous = document.getElementById('previous');


function nextSlide() {
    goToSlide(currentSlide+1);
}
function previousSlide() {
    goToSlide(currentSlide-1);
}
function goToSlide(n) {
    slides[currentSlide].className = 'slide-box';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide-box showing';
}

function pauseSlideshow() {
    pauseButton.innerHTML = '&#9199';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '&#9208';
    playing = true;
    slideInterval = setInterval(nextSlide,3333);
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};

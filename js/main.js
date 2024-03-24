const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults =document.querySelector('.url-shortener__results');

elUrlShortenerForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    // classList b-n ishlaganda classning nuqtasi kerak emas
    elUrlShortenerResults.classList.add('url-shortener__results--open')
});
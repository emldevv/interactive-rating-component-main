const rating = document.querySelector('.star-rating-panel');
const ratingButtons = rating.querySelectorAll('.star-rating-panel_btn');
const submitButton = document.querySelector('.rating-card__submit-btn');


function ratingNumberClick(event) {
    console.log(event);
}

submitButton.addEventListener('click', function () {
    console.log('Ya clicked it!');
});

// rating.addEventListener('click', ratingNumberClick);

ratingButtons.forEach(button => button.addEventListener('click', ratingNumberClick));
const rating = document.querySelector('.star-rating-panel');
const ratingButtons = rating.querySelectorAll('.star-rating-panel__btn');
const submitButton = document.querySelector('.rating-card__submit-btn');
const cards = document.querySelector('.cards');
const ratingCards = cards.querySelector('[role="card"]');


function ratingNumberClick(event) {
    console.log(event.currentTarget); // Identifies each radio button
    // Return radio button value
}

submitButton.addEventListener('click', function (event) {
    console.log(event.currentTarget);
    // Submit button steps
    // hide both cards
    
    // mark both cards as unselected


    // mark the submit button as selected


    // Find the thankyou card and show it

    // Add an alert if no rating selected
    
})


ratingButtons.forEach(button => button.addEventListener('click', ratingNumberClick));


// Obtaining rating value
/*
var ratingValue = 0;
var valueField = document.querySelector('.star-value');


document.querySelectorAll('.star-rating input[name="rating"]').forEach(function(radio){
   radio.addEventListener('change', function(){
      ratingValue = document.querySelector('.star-rating input[name="rating"]:checked').value;
      valueField.innerHTML = "Rating: " + ratingValue;
   });
});
*/
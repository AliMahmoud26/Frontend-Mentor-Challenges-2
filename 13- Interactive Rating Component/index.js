const ratingSection = document.querySelector('.rating__section'),
thankSection = document.querySelector('.thank__section'),
ratings = document.querySelectorAll('.ratings span'),
submitBtn = document.querySelector('.submit__btn'),
ratingNum = document.querySelector('.rate');

let selectedRate = null;

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        // This Snippet Code Was By ChatGpt
        ratings.forEach(r => r.classList.remove('active'));
        rating.classList.add('active');
        selectedRate = parseInt(rating.innerText); // Remove the 'const' keyword here
        ratingNum.innerText = selectedRate;
    });
});

submitBtn.addEventListener('click', () => {
    if (selectedRate !== null) {
        ratingSection.style.display = 'none';
        thankSection.style.display = 'block';

        const rateText = document.querySelector('.rate__text');
        rateText.innerText = `You selected ${selectedRate} out of 5`;
    }
});

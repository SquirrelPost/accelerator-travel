const starWidthIndex = 16;
const starRatings = document.querySelectorAll('.star-rating');

const calcStarsWidth = () => {
  starRatings?.forEach((rating) => {
    let countedWidth = 0;
    const starCount = rating.getAttribute('data-rating');
    countedWidth = (Number(starCount) * starWidthIndex) + Number(starCount);
    rating.style.setProperty('--var-width', `${countedWidth }px`);
  });
};

export { calcStarsWidth };

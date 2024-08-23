const starRatings = document.querySelectorAll('.star-rating');

const calcStarsWidth = () => {
  starRatings?.forEach((rating) => {
    let countedWidth = 0;
    const starCount = rating.getAttribute('data-rating');
    countedWidth = (Number(starCount) * 16) + Number(starCount);
    rating.style.setProperty('--var-width', `${countedWidth }px`);
  });
};

export { calcStarsWidth };

console.log('Hello from 3navigation');
const modalCard = document.querySelector('.modalCard');
const backDropRef = document.querySelector('.js-modal');
const overlayRef = document.querySelector('.overlay');

// listItem.addEventListener('click', activeDetailsPage);

function activeDetailsPage(movie) {
  window.addEventListener('keydown', onPressEscape);
  overlayRef.addEventListener('click', onBackDropClick);
  backDropRef.classList.add('is-open');
  showDetails(movie);
}

function showDetails({
  poster_path: imgPath,
  title: filmTitle,
  vote_average: voteAverage,
  vote_count: voteCount,
  popularity: popularity,
  original_title: originalTitle,
  genre_ids: genre,
  overview: description,
}) {
  const modalCardinfo = `<img class="gallery__item__picture"
                    src='${basicPosterUrl}${imgPath}'
                    alt=${filmTitle}
                    />
        <h2 class="gallery__item__title">${filmTitle}</h2>
        <p class="votes">Vote/Votes${voteAverage}${voteCount}</p>
        <p class="votes">Popularity${popularity}</p>
        <p class="votes">Original Title${originalTitle}</p>
        <p class="votes">${genreString(genre)}</p>
        <h2 class="about">ABOUT</h2>
        <p class="votes about">${description}</p>`;

  modalCard.insertAdjacentHTML('afterbegin', modalCardinfo);
}

function onCloseModal() {
  window.removeEventListener('keydown', onPressEscape);
  backDropRef.classList.remove('is-open');
  modalCard.innerHTML = '';
}

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onPressEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

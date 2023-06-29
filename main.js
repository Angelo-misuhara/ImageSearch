// Dark mode
const darkMode = document.querySelector('.dark-mode');
const body = document.querySelector('body');
const navbar = document.querySelector(".navbar-brand");

let isDark = true;

darkMode.addEventListener('click', () => {
  if (isDark) {
    body.style.backgroundColor = '#212529';
    body.style.transition = '1s';
    darkMode.src = 'img/light-mode-32px.png';
    body.style.color = 'white';
    navbar.style.color = 'white';
    isDark = false;
  } else {
    body.style.backgroundColor = 'white';
    body.style.transition = '1s';
    darkMode.src = 'img/dark-mode-32px.png';
    body.style.color = '#212529';
    navbar.style.color = '#212529';
    isDark = true;
  }
});

// Search logic
const searchImage = document.querySelector('#search-image');
const searchButton = document.querySelector('#button-addon2');
const searchContainer = document.querySelector('.container-image');
const showMore = document.querySelector('#button-More');

const key = 'sC1T9zaRwtaGYTHEFY_VSg-mzzo2jH4PXUcs2T5py-c';

let inputUserData = '';
let page = 1;

const search = async () => {
  inputUserData = searchImage.value;

  const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputUserData}&client_id=${key}`);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchContainer.innerHTML = '';
  }

  results.forEach((result) => {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('col', 'ontainer-image');

    const image = document.createElement('img');
    image.src = result.urls.small;

    image.style.width = '100%';// Adjust the width to your desired size
    image.style.height = 'auto'; // Adjust the height to your desired size
    imageWrapper.style.display = 'flex';
    imageWrapper.style.padding = '15px';
    imageWrapper.style.justifyContent = 'center';
    imageWrapper.style.alignItems = 'center';
    image.style.borderRadius = '10px';
    image.style.resolution= '300dpi';
    imageWrapper.appendChild(image);
    searchContainer.appendChild(imageWrapper);
  });
  page++;
  if (page > 1) {
    showMore.style.display = 'block';
  }
};

searchButton.addEventListener('click', (value) => {
  value.preventDefault();
  page = 1;
  search();
});

showMore.addEventListener('click', () => {
  search();
});

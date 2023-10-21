import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const loaderText = document.querySelector('.loader-text');
const errorText = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function displayBreedOptions(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

function displayCatInfo(cat) {
  const [catData] = cat;
  catInfo.innerHTML = `
    <img class="cat__img" src="${catData.url}" alt="Cat">
    <div class="cat__breed">
        <p class="cat__breed-name">${catData.breeds[0].name}</p>
        <p class="cat__breed-descr">${catData.breeds[0].description}</p>
        <p><span class="cat__breed-temperament">Temperament: </span>${catData.breeds[0].temperament}</p>
    </div>
  `;
}

function showLoader() {
  loaderText.style.display = 'block';
  errorText.style.display = 'none';
  breedSelect.style.display = 'none';
}

function hideLoader() {
  loaderText.style.display = 'none';
  breedSelect.style.display = 'block';
}

function showError() {
  errorText.style.display = 'block';
  loaderText.style.display = 'none';
}

breedSelect.addEventListener('change', (event) => {
    catInfo.innerHTML ="";
  showLoader();
  const selectedBreedId = event.target.value;
  fetchCatByBreed(selectedBreedId)
    .then(displayCatInfo)
    .catch(showError)
    .finally(hideLoader);
});

showLoader();

fetchBreeds()
  .then(displayBreedOptions)
  .catch(showError)
  .finally(hideLoader);

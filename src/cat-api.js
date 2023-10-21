import axios from 'axios';

const API_KEY = 'live_9YeH9wiaavIArq7nwCyY7zCWIm83wRzlIksJacHEsUgT6jD0Mt3QhYEyWMYM65J6';

axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds')
      .then(response => response.data)
      .catch(error => {
        throw new Error(error);
      });
  }

  export { fetchBreeds };
  
  function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(error);
      });
  }

  export { fetchCatByBreed };
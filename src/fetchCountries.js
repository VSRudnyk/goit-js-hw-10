import countryCardTpl from './templates/country-card.hbs';
// var debounce = require('lodash.debounce');

const refs = {
  countryCard: document.querySelector('.country-info'),
  countryList: document.querySelector('.country-list'),
  inputEl: document.querySelector('#search-box'),
};

export function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
  )
    .then(response => {
      return response.json();
    })
    .then(renderCountryCard)
    .catch(error => {
      console.log(error);
    });
}

function renderCountryCard(country) {
  if (country.length > 10) {
    console.log('Too many matches found. Please enter a more specific name.');
  } else if (country.length >= 2 || country.length <= 10) {
    console.log('world');
    refs.countryCard.innerHTML = `<h1>123</h1>`;
  } else if (country.length === 1) {
    const markup = countryCardTpl(country);
    refs.countryCard.innerHTML = markup;
  }
}

import './css/styles.css';
import API from './api-service';
import countryCardTpl from './templates/country-card.hbs';
var debounce = require('lodash.debounce');
import getRefs from './get-refs';

const refs = getRefs();
const DEBOUNCE_DELAY = 300;
const debuonced = debounce(onSearch, DEBOUNCE_DELAY);

refs.searchForm.addEventListener('input', debuonced);

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.target.value;
  API.fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('We cant find your country');
}

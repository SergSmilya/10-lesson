import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';

const refs = {
  inputEl: document.getElementById('search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;
refs.inputEl.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  let countryName = e.target.value.trim();
  fetchCountries(countryName)
    .then(dataCountry => {
      const countryArr = mapCountries(dataCountry);
      if (countryArr.length > 10) {
        Notify.warning(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countryArr.length === 1) {
        let oneCountry = findOneCountry(dataCountry).join('');
        refs.countryListEl.innerHTML = '';
        addCountryInfo(oneCountry);
      } else addCountryList(countryArr.join(''));
    })
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}
function mapCountries(arr) {
  return arr.map(({ name: { official }, flag }) => {
    return `<li>
      <p><span>${flag}</span>${official}</p>
    </li>`;
  });
}

function findOneCountry(arr) {
  return arr.map(
    ({
      name: { official },
      capital,
      population,
      flags: { svg },
      languages,
    }) => {
      return `<h1>Country: ${official}</h1>
    <h2>Capital: ${capital}</h2>
    <p>Population: ${population}</p>
    <img src=${svg} alt="flag of ${official}" width="300">
    <p>Languages: ${Object.values(languages).join(', ')}</p>`;
    }
  );
}

function addCountryList(str) {
  refs.countryListEl.innerHTML = str;
}
function addCountryInfo(str) {
  refs.countryInfoEl.innerHTML = str;
}

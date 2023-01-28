import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
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
  console.log(countryName);
  fetchCountries(countryName).then(dataCountry => {
    console.log(mapCountries(dataCountry));
    return addCountryList(mapCountries(dataCountry));
  });
}
function mapCountries(arr) {
  return arr
    .map(
      ({
        name: { official },
        capital,
        population,
        flag,
        flags: { svg },
        languages,
      }) => {
        return `<li>
      <p><span>${flag}</span>${official}</p>
    </li>`;
      }
    )
    .join('');
}

function addCountryList(a) {
  refs.countryListEl.innerHTML = a;
}
function addCountryInfo({ official, capital, population, svg, languages }) {
  refs.countryInfoEl.innerHTML = `<h1>Country: ${official}</h1>
    <h2>Capital: ${capital}</h2>
    <p>Population: ${population}</p>
    <img src=${svg} alt="flag of ${official}">
    <p>Languages: ${languages}</p>`;
}

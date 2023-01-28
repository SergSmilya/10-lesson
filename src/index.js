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
  fetchCountries(countryName).then(dataCountry =>
    dataCountry.map(
      ({
        name: { official },
        capital,
        population,
        flag,
        flags: { svg },
        languages,
      }) => addCountryList({ official, flag })
    )
  );
}

function addCountryList({ official, flag }) {
  refs.countryListEl.insertAdjacentHTML(
    'beforeend',
    `<li>
      <p><span>${flag}</span>${official}</p>
    </li>`
  );
}
function addCountryInfo({ official, capital, population, svg, languages }) {
  refs.countryInfoEl.insertAdjacentHTML(
    'beforeend',
    `<h1>Country: ${official}</h1>
    <h2>Capital: ${capital}</h2>
    <p>Population: ${population}</p>
    <img src=${svg} alt="flag of ${official}">
    <p>Languages: ${languages}</p>`
  );
}

const loadacountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displaycountries(data))

}

loadacountries()

const displaycountries = (countries) => {
    const displayDiv = document.getElementById("countries")
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
                    <img src="${country.flags.png}" alt="">
                    <h3>Name: ${country.name.common}</h3>
                   <h3>Capital: ${country.capital}</h3>
                    <h3>continents: ${country.continents}</h3> 
                   <h3>Area: ${country.area}</h3>
                   <button onclick="loadcountryDetails('${country.name.common}')">Show Details</button>
    
               `
        displayDiv.appendChild(div)
    })

}

const loadcountryDetails = (countryName) => {

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(data => displaycountryDetails(data[0]))

}

const displaycountryDetails = (country) => {
    console.log(country);

    const detailsUi = document.getElementById('details');
    detailsUi.innerHTML = `
          <div class="country-details">
                <img src="${country.flags.png}" alt="">
                <h3>Name: ${country.name.common}</h3>
                <h3>Capital: ${country.capital}</h3>
                <h3>Population: ${country.population}</h3>
         
          </div>
          
          `

}

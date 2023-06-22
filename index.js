const allData = [
  {
    sport: 'Football',
    img: './assets/football.webp',
    year: 2022,
    brand: 'Nike',
    cardNumber: 555555,
    id: 1,
    variation: 'First',
    teamName: 'Rmd'
  },
  {
    sport: 'Football',
    img: './assets/football.webp',
    year: 2021,
    brand: 'Puma',
    cardNumber: 66666,
    id: 2,
    variation: 'First 1',
    teamName: 'Fcb'
  },
  {
    sport: 'Football',
    img: './assets/football.webp',
    year: 2021,
    brand: 'Puma',
    cardNumber: 66666,
    id: 3,
    variation: 'First 2',
    teamName: 'Fcb2'
  },
  {
    sport: 'Cricket',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvXEBpRZaGNCTDbk4ZXEEQCy4pI5Q4oGf7aSABZlU&s',
    year: 2019,
    brand: 'Puma',
    cardNumber: 66666,
    id: 4,
    variation: 'First 5',
    teamName: 'Fcb3'
  },
  {
    sport: 'Cricket',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvXEBpRZaGNCTDbk4ZXEEQCy4pI5Q4oGf7aSABZlU&s',
    year: 2019,
    brand: 'Puma',
    cardNumber: 66666,
    id: 5,
    variation: 'Last',
    teamName: 'Fcb4'
  },
  {
    sport: 'Cricket',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvXEBpRZaGNCTDbk4ZXEEQCy4pI5Q4oGf7aSABZlU&s',
    year: 2019,
    brand: 'Puma',
    cardNumber: 66666,
    id: 6,
    variation: 'Last 2',
    teamName: 'Fcb5'
  },
  {
    sport: 'Cricket',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvXEBpRZaGNCTDbk4ZXEEQCy4pI5Q4oGf7aSABZlU&s',
    year: 2019,
    brand: 'Puma',
    cardNumber: 66666,
    id: 6,
    variation: 'Last 2',
    teamName: 'Fcb6'
  },
];

// input fields
const sport = document.getElementById('sport');
const year = document.getElementById('year');
const brand = document.getElementById('brand');
const cardNumber = document.getElementById('cardNumber');

const inputFields = [
  document.getElementById('sport'),
  document.getElementById('year'),
  document.getElementById('brand'),
  document.getElementById('cardNumber'),
];

let inputFieldsValues = {};

// bottom map for get the input fields value
inputFields.map(input => input.addEventListener('input', (e) => {
  inputFieldsValues = {
    ...inputFieldsValues,
    [e.target.name]: e.target.value
  }
}))


// filtered data showing container
const cardNumberFilteredData = document.getElementById('cardNumberFilteredData');

// bottom function is for hide the filtered data div when user click in the outside or inside.
window.addEventListener('click', function (e) {
  if (document.getElementById('cardNumberFilteredData').contains(e.target)) {
    // Clicked in box
    cardNumberFilteredData.style.display = 'none';
  } else {
    // Clicked outside the box
    cardNumberFilteredData.style.display = 'none';
  }
});


let uiData = [];

const setIntoDefaultValue = (data) => {
  const variation = document.getElementById('variation');
  const team = document.getElementById('team');
  variation.value = data.variation;
  team.value = data.teamName;
}


cardNumber.addEventListener('input', (e) => {
  const filteredData = allData.filter(item =>
    item.sport.toLowerCase() === inputFieldsValues?.sport?.toLowerCase() &&
    item.year.toString() === inputFieldsValues?.year?.toString() &&
    item.brand.toLowerCase() === inputFieldsValues?.brand?.toLowerCase() &&
    item.cardNumber.toString().includes(inputFieldsValues?.cardNumber?.toString())
  );
  cardNumberFilteredData.innerHTML = '';
  cardNumberFilteredData.style.display = 'block';
  if (filteredData.length < 1) {
    const p = document.createElement('p');
    p.innerText = 'Nothing to show';
    cardNumberFilteredData.appendChild(p);
    return;
  }


  // Now showing the filtered data in ui.

  filteredData.forEach((data) => {

    const div = document.createElement('div');
    div.className = 'itemsContainer'
    div.innerHTML = `
   <div class="filteredItem">
    <img src="${data.img}" alt="" class='filteredImg' /> 
    <img src="${data.img}" alt="" class='filteredImg' /> 
    <div>
    <p>${data?.sport} </p> <p>${data?.year}</p> 
    <p>${data?.brand} </p>
    </div>
    </div>
  `
    div.addEventListener('click', () => {
      setIntoDefaultValue(data)
    })
    cardNumberFilteredData.appendChild(div);
  })

})
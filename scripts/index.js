const apiKey = 'c053e06f';
const endpoint = 'http://www.omdbapi.com?';

const movies = [
    'Star Wars',
    'Harry Potter',
    'Taken',
    'Cars',
    // 'The Assassination of Jesse James by the Coward Robert Ford'
];

// Initialization logic
init();

function init() {
    movies.forEach(movie => {
        // movie.split(' ').forEach(word => {
        //     const obj = {
        //         apiKey: apiKey,
        //         t: encodeURI(word)
        //     };
        //
        //     makeRequest(obj);
        // });
        const obj = {
            apiKey: apiKey,
            t: encodeURI(movie)
        };

        makeRequest(obj);
    });
}

document.forms[0].onsubmit = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const obj = {
        apiKey: apiKey,
        t: encodeURI(searchInput.value)
    };
    clearData();
    makeRequest(obj);
}

function makeRequest(searchObj) {
    const searchString = buildQueryParams(searchObj);

    fetch(endpoint + searchString)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.Response === 'True') {
                createMovieCard(data);
            } else {
                alert(data.Error);
            }
        });
}

/**
 *
 * @param obj
 * @returns {string} apiKey=c053e06f&t=Star%20Wars
 */
function buildQueryParams(obj) {
    return Object.keys(obj).map(key => {
        return `${key}=${obj[key]}`;
    }).join('&');
}

function createMovieCard(movie) {
    const mainElem = document.getElementsByTagName('main')[0];

    const cardElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const detailsElem = document.createElement('div');
    const titleElem = document.createElement('h5');
    const yearElem = document.createElement('h6');
    const plotElem = document.createElement('p');

    titleElem.innerText = movie.Title;
    yearElem.innerText = movie.Year;
    plotElem.innerText = movie.Plot;

    imgElem.setAttribute('src', movie.Poster);
    imgElem.setAttribute('width', '150px');

    cardElem.append(imgElem);
    cardElem.append(detailsElem);

    detailsElem.append(titleElem);
    detailsElem.append(yearElem);
    detailsElem.append(plotElem);

    cardElem.classList.add('movie-card');
    mainElem.append(cardElem);
}

function clearData() {
    const mainElem = document.getElementsByTagName('main')[0];
    mainElem.innerHTML = '';
}

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
            t: encodeURI(movie),
            pageNumber: 2
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
    const card = new Card(movie);
    mainElem.append(card.elem);
}

function clearData() {
    const mainElem = document.getElementsByTagName('main')[0];
    mainElem.innerHTML = '';
}

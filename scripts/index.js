const apiKey = 'c053e06f';
const endpoint = 'http://www.omdbapi.com?';

const movies = [
    'Star Wars',
    'Harry Potter',
    'Taken',
    'Cars'
];

// Initialization logic
init();

document.forms[0].onsubmit = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const obj = {
        apiKey: apiKey,
        t: encodeURI(searchInput.value)
    };
    makeRequest(obj);
}

function makeRequest(searchObj) {
    const searchString = buildQueryParams(searchObj);

    fetch(endpoint + searchString)
        .then(response => response.json())
        .then(data => console.log(data));
}

function buildQueryParams(obj) {
    return Object.keys(obj).map(key => {
        return `${key}=${obj[key]}`;
    }).join('&');
}

function init() {
    movies.forEach(movie => {
        const obj = {
            apiKey: apiKey,
            t: encodeURI(movie)
        };
        makeRequest(obj);
    });
}

const elem = document.getElementsByClassName('search-form');
console.log();

document.forms[0].onsubmit = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    console.log(searchInput.value);
}

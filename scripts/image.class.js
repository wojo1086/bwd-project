class Image extends BaseCard {

    constructor(movie) {
        super();
        this.elem = document.createElement('img');
        this.elem.setAttribute('src', movie.Poster);
        this.elem.setAttribute('width', '150px');
        this.elem.setAttribute('alt', movie.Title);
    }
}

class Card extends BaseCard {

    constructor(movie) {
        super();
        this.elem = document.createElement('div');
        const img = new Image(movie);
        const detailsElem = new Details(movie);

        this.elem.append(img.elem);
        this.elem.append(detailsElem.elem);

        this.elem.classList.add('movie-card');
    }
}

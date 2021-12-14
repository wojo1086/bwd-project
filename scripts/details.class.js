class Details extends BaseCard{

    constructor(movie) {
        super();
        this.elem = document.createElement('div');
        const titleElem = document.createElement('h5');
        const yearElem = document.createElement('h6');
        const plotElem = document.createElement('p');

        titleElem.innerText = movie.Title;
        yearElem.innerText = movie.Year;
        plotElem.innerText = movie.Plot;

        this.elem.append(titleElem);
        this.elem.append(yearElem);
        this.elem.append(plotElem);
    }

}

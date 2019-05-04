class App {
    constructor() {
        let list = document.querySelectorAll(".card");

        this.cardList = [];

        list.forEach(x => {
            let p = x.dataset.percent;
            let c = x.querySelector("canvas");
            this.cardList.push(new Card(c, p));
        });

        this.isDrawed = false;
        this.p = document.querySelector("#portfolio");
        window.addEventListener("scroll", this.scrollHandle.bind(this));
    }

    scrollHandle(e) {
        if (window.scrollY >= this.p.offsetTop && !this.isDrawed) {
            this.draw();
            this.isDrawed = true;
        }
    }

    draw() {
        this.cardList.forEach(x => x.start());
    }
}

window.onload = function() {
    let app = new App();
}
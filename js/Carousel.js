class Carousel {
    constructor (content) {
        this.img = document.getElementById("carousel-img");
        this.link = document.getElementById("carousel-link");
        this.text = document.getElementById("carousel-title");
        this.index = 0;
        this.content = content;
    }

    updateValue() {
        this.img.src = this.content[this.index].imageSrc;
        this.img.alt = this.content[this.index].imageAlt;
        this.link.href = "lancamento.html";
        this.text.innerHTML = this.content[this.index].title;
    }

    start (interval) {
        this.updateValue();
        this.index++;

        setInterval(() => {
            this.updateValue();
            this.next(interval)
        }, interval)
    }

    next () {
        if (this.index === this.content.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
    }
}

const content = [
    {
        imageSrc: "./img/imagem_1.jpg",
        imageAlt: "primeira imagem",
        title: "Esta é a nova Ranger Ford 2022. Verifique novidades."
    },
    {
        imageSrc: "./img/imagem_2.jpg",
        imageAlt: "segunda imagem",
        title: "Ford a nossa história"
    },
    {
        imageSrc: "./img/imagem_3.jpg",
        imageAlt: "terceira imagem",
        title: "Nova Ford Bronco Sport 2022"
    }
];

const carousel = new Carousel(content);
carousel.start(2000);
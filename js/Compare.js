class Car {
    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaLivreSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, img) {
        this.modelo = modelo;
        this.alturaC = alturaCacamba;
        this.alturaV = alturaVeiculo;
        this.alturaLS = alturaLivreSolo;
        this.capacidadeC = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeC = volumeCacamba;
        this.roda = roda;
        this.preco = preco;
        this.img = img;
    }
}

let cars = []

function SetCarToCompare(input, car) {
    if (input.checked == false) {
        const carIndex = GetCarArrPosition(car);
        cars.splice(carIndex, 1);
        return;
    }

    if (cars.length > 1) {
        input.checked = false;
        alert("Não é possível selecionar mais de 2 carros!");
        return;
    }

    cars.push(car);
};

function GetCarArrPosition(car) {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].modelo === car.modelo) {
            return i;
        }
    }
    return -1;
}

/* O laço de repetição cria uma variável temporária
    essa variável armazena uma célula da tabela
    a célula armazenada depende do id passado (idName)
    a função altera o texto exibido com base no atributo (attribute) de determinado elemento (index 0 ou 1) da lista cars
*/ 
function update(idName, attribute) {
    for(let i=0; i < 2; i++) {
        let variavel = document.getElementById(`compare_${idName}_${i}`)
        variavel.innerHTML = cars[i][attribute];
    }
}

function UpdateCompareTable() {
    const img0 = document.getElementById("compare_image_0");
    const img1 = document.getElementById("compare_image_1");
    img0.src = cars[0].img;
    img1.src = cars[1].img;

    update("modelo", "modelo");
    update("alturacacamba", "alturaC");
    update("alturaveiculo", "alturaV");
    update("alturasolo", "alturaLS");
    update("capacidadecarga", "capacidadeC");
    update("motor", "motor");
    update("potencia", "potencia");
    update("volumecacamba", "volumeC");
    update("roda", "roda");
    update("preco", "preco");
};

let dialog = document.getElementById("compare");

function ShowCompare() {
    if (cars.length !== 2) {
        alert("É preciso selecionar pelo menos 2 carros!");
        return;
    }

    UpdateCompareTable();
    dialog.showModal();
}

function HideCompare() {
    dialog.close();
};

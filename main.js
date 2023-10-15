const products = [
    //Cervezas
    {
        title: "Cerveza Polar x Caja",
        price: 18,
        imagen: '/assets/productos/cervezas/polar-caja.png',
        categoria: "cerveza",
    },

    {
        title: "Cerveza Polar Lata",
        price: 2,
        imagen: '/assets/productos/cervezas/polar-lata.png',
        categoria: "cerveza",
    },

    {
        title: "Cerveza Polar Light Lata",
        price: 2,
        imagen: '/assets/productos/cervezas/polar-light-lata.jpg',
        categoria: "cerveza",
    },

    {
        title: "Cerveza Zulia x Caja",
        price: 18,
        imagen: '/assets/productos/cervezas/zulia-caja.png',
        categoria: "cerveza",
    },

    {
        title: "Cerveza Zulia Lata Sixpac",
        price: 5.49,
        imagen: '/assets/productos/cervezas/zulia-lata.png',
        categoria: "cerveza",
    },

    //Rones
    {
        title: "Ron Añejo Carúpano Reserva 6 Especial de 0.750ml",
        price: 9.05,
        imagen: '/assets/productos/rones/añejo-carupano-reserva-6-especial-0.750.jpg',
        categoria: "ron",
    },

    {
        title: "Ron Añejo Carúpano Reserva 12 Exclusiva de 0.750ml",
        price: 15,
        imagen: '/assets/productos/rones/añejo-reserva-exclusiva-carupano-750ml.jpg',
        categoria: "ron",
    },

    {
        title: "Ron Cacique 500 Golden 750ml",
        price: 18.50,
        imagen: '/assets/productos/rones/cacique-500-golden-750ml.jpg',
        categoria: "ron",
    },

    {
        title: "Ron Cacique Añejo 750ml",
        price: 10.10,
        imagen: '/assets/productos/rones/cacique-añejo-750ml.jpg',
        categoria: "ron",
    },

    {
        title: "Ron Cinco Estrellas Blanco",
        price: 5,
        imagen: '/assets/productos/rones/cinco-estrellas-blanco.jpg',
        categoria: "ron",
    },

    {
        title: "Ron Cinco Estrellas",
        price: 5.15,
        imagen: '/assets/productos/rones/cinco-estrellas.jpg',
        categoria: "ron",
    },

    {
        title: "Ron Diplomático Panas",
        price: 16.53,
        imagen: '/assets/productos/rones/diplomatico-panas.jpg',
        categoria: "ron",
    },

    {
        title: "Ron Diplomático Reserva Exclusiva",
        price: 27,
        imagen: '/assets/productos/rones/diplomatico-reserva-exclusiva.jpg',
        categoria: "ron",
    },

    {
        title: "Ron Extra Añejo Santa Teresa Gran Reserva Linaje 0.75lts",
        price: 22.90,
        imagen: '/assets/productos/rones/extra-añejo-santa-teresa-gran-reserva-linaje-0.75.jpg',
        categoria: "ron",
    },

    {
        title: "Ron  Santa Teresa Gran Reserva 0.70lts",
        price: 9,
        imagen: '/assets/productos/rones/gran-reserva-santa-teresa-0.70.jpg',
        categoria: "ron",
    },

    // Vinos

    {
        title: "Sangría Caroreña 1.75lts",
        price: 9,
        imagen: '/assets/productos/vinos/caroreña-1.75.jpg',
        categoria: "vinos",
    },

    {
        title: "Sangría Caroreña Blanca 1.75lts",
        price: 9,
        imagen: '/assets/productos/vinos/caroreña-blanca-1.75.jpg',
        categoria: "vinos",
    },

    {
        title: "Sangría Caroreña Rosada 1.75lts",
        price: 9,
        imagen: '/assets/productos/vinos/caroreña-rosada-1.75.jpg',
        categoria: "vinos",
    },

    {
        title: "Vino Blanco Linda Mora Chardonay Chenin 0.75lts",
        price: 6,
        imagen: '/assets/productos/vinos/vino-blanco-linda-mora-chardonay-chenin-0.75.jpg',
        categoria: "vinos",
    },

    {
        title: "Vino Blanco Mia Freixenet 750ml",
        price: 10.40,
        imagen: '/assets/productos/vinos/vino-blanco-mia-freixenet-750.jpg',
        categoria: "vinos",
    },

    {
        title: "Vino Espumante Valdivieso Demi Sec 750ml",
        price: 14.20,
        imagen: '/assets/productos/vinos/vino-espumante-valdivieso-demi-sec-750.jpg',
        categoria: "vinos",
    },

    {
        title: "Vino Tinto Alpaca Cabernet Sauvignon 750ml",
        price: 5.80,
        imagen: '/assets/productos/vinos/vino-tinto-alpaca-cabernet-sauvignon-750.jpg',
        categoria: "vinos",
    },

    {
        title: "Vino Tinto Alpaca Merlot 750ml",
        price: 5.80,
        imagen: '/assets/productos/vinos/vino-tinto-alpaca-merlot-750.jpg',
        categoria: "vinos",
    },

    {
        title: "Vino Tinto Tierra Del Fuego 750ml",
        price: 5,
        imagen: '/assets/productos/vinos/vino-tinto-tierra-del-fuego-750.jpg',
        categoria: "vinos",
    },

    {
        title: "Vino Valdivieso Sauvignon Blanc 0.75lts ",
        price: 12.90,
        imagen: '/assets/productos/vinos/vino-valdivieso-sauvignon-blanc-0.75.jpg',
        categoria: "vinos",
    },

    // Wiskies
    
    {
        title: "Wisky Black & White 750ml ",
        price: 15.40,
        imagen: '/assets/productos/wiskies/black-white-750.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Buchanans Deluxe 12 años 0.75lts ",
        price: 30.50,
        imagen: '/assets/productos/wiskies/buchanans-deluxe-escoces-12años-0.75.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Buchanans Red Seal 750ml ",
        price: 208.80,
        imagen: '/assets/productos/wiskies/buchanans-red-seal-750.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Escoceés Highland Queen ",
        price: 17.40,
        imagen: '/assets/productos/wiskies/escoces-highland-queen-750.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Escoceés Willian Lawson's 750ml",
        price: 15.90,
        imagen: '/assets/productos/wiskies/escoces-william-lawsons-750.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Grand Old Parr 750ml",
        price: 30.70,
        imagen: '/assets/productos/wiskies/grand-old-parr-750.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Grant's Triple Wood 750ml",
        price: 30.60,
        imagen: '/assets/productos/wiskies/grants-triple-wood-750.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Jack Daniels 750ml",
        price: 56.30,
        imagen: '/assets/productos/wiskies/jack-daniels-750.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Jhonnie Walker Blue Label 750ml",
        price: 243.60,
        imagen: '/assets/productos/wiskies/jhonnie-walker-blue-label-750.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Jhonnie Walker Black Label 750ml",
        price: 30.50,
        imagen: '/assets/productos/wiskies/johnnie-walker-black-label-750.jpg',
        categoria: "vwisky",
    },

    {
        title: "Wisky Jhonnie Walker Black Label Sherry 700ml",
        price: 35,
        imagen: '/assets/productos/wiskies/johnnie-walker-black-label-sherry-700.jpg',
        categoria: "vwisky",
    },
]

const divContainer = document.querySelector('#containerCards')

function cargarProductos (product) {

    const div = document.createElement("div");
    div.classList.add("container__cards")

    div.innerHTML = `
                        <div class="card" id="cards">
                            <div class="card__img">
                                <img src="${product.imagen}" alt="${product.title}" class="card__img-img">
                            </div>
                            <div class="card__description">
                                <p class="card__description-product">${product.title}</p>
                                <p class="card__description-price">$ ${product.price}</p>
                            </div>
                        </div>
                    `
    
    divContainer.append(div);
    
}

products.forEach(product => {
    cargarProductos(product);
});
let products = [];

fetch('/productos.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        products.forEach(product => {
            cargarProductos(product);
        });
    });

const divContainer = document.querySelector('#containerCards');
const titulo = document.querySelector('#titulo');

function cargarProductos(product) {
    const div = document.createElement("div");
    div.classList.add("container__cards");
    div.innerHTML = `
        <div class="card" id="cards">
            <div class="card__img">
                <img src="${product.image}" alt="${product.title}" class="card__img-img">
            </div>
            <div class="card__description">
                <p class="card__description-product"> <i class="fa-solid fa-star"></i> ${product.title}</p>
                <p class="card__description-price">$ ${product.price}</p>
            </div>
        </div>
    `;
    divContainer.appendChild(div);
}

const botonesCategorias = document.querySelectorAll('.buttons__categories');

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        divContainer.innerHTML = "";
        titulo.innerHTML = e.currentTarget.textContent.trim();

        botonesCategorias.forEach(otherButton => {
            otherButton.querySelector('button').classList.remove("active");
        });
        e.currentTarget.querySelector('button').classList.add("active");

        if (e.currentTarget.id !== "todos") {
            const productsSelected = products.filter(product => product.categorie.toLowerCase() === e.currentTarget.id.toLowerCase());
            productsSelected.forEach(product => {
                cargarProductos(product);
            });
        } else {
            titulo.innerHTML = "Todos los productos";
            products.forEach(product => {
                cargarProductos(product);
            });
        }
    });
});

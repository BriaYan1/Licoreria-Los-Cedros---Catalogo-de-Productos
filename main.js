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
    divContainer.append(div);
}
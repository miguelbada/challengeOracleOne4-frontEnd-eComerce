import getProductosService from '../service/getProductosService.js';

async function getProductosController() {
    let productos = await getProductosService();

    let starWars = productos.filter(producto => producto.categoria == "star-wars");
    let consolas = productos.filter(producto => producto.categoria == "consolas");
    let diversos = productos.filter(producto => producto.categoria == "diversos");

    let containerStarWars = document.querySelector('.galeria__productos___star-wars');
    let containerConsolas = document.querySelector('.galeria__productos___consolas');
    let containerDiversos = document.querySelector('.galeria__productos___diversos');
    
    containerStarWars.innerHTML = renderProductos(starWars);
    containerConsolas.innerHTML = renderProductos(consolas);
    containerDiversos.innerHTML = renderProductos(diversos);

    console.log(productos);
     
}

function renderProductos(listaProductos) {
    let html = '';

    listaProductos.forEach(producto => {
        let htmlSegment = `<ul>
                               <img src="${ producto.imagen }" alt="" class="galeria__imagen">
                               <h3 class="galeria__productos___nombre">${ producto.nombre }</h3>
                               <p class="galeria__productos___destacado">$ ${ producto.precio }</p>
                               <a href="#" class="galeria__link">Ver producto</a>
                           </ul>`;
        
        html += htmlSegment;
    });
    
    return html;
}

getProductosController();
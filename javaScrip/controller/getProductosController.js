import getProductosService from '../service/getProductosService.js';

async function getProductosController() {
    let productos = await getProductosService();
    let container = document.querySelector('.galeria__productos___star-wars');
    
    container.innerHTML = renderProductos(productos);
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
        
        
        
        
        
        
        
        
        
        
        /* 
                            `<ul>
                                <img src="${ producto.imagen }" alt="" class="container__imagen">
                                <h3 class="container__nombre">${ producto.nombre }</h3>
                                <p class="container__precio">$ ${ producto.precio }</p>
                                <p class="container__descripcion">${ producto.descripcion }</p>
                                <a href="#" class="galeria__link">Ver producto</a>
                           </ul>`; */

        html += htmlSegment;
    });
    
    return html;
}

getProductosController();
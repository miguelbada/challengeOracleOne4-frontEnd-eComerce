import searchProductService from "../service/searchProductService.js";
import { renderProductos } from "./getProductosController.js";

let search = document.querySelector('.encabezado__container___busqueda');

search.addEventListener('input', async e => {
    let looking = await searchProductService(e.currentTarget.value);

    console.log(e.data);
    console.log(looking.length);

    if(e.data) {
        $('.galeria_search').css('display', 'block');

        let containerSearch = document.querySelector('.galeria__productos___search');

        containerSearch.innerHTML = renderProductos(looking);
    } else {
        $('.galeria_search').css('display', 'none');
    }
    
})
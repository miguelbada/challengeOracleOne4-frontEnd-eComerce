import getProductosService from "../service/getProductosService.js";
import renderProductos from "./getProductosController.js";

async function getAllProductosController() {
    let container = document.querySelector('.container');
    let productos = await getProductosService();

    container.innerHTML = renderProductos(productos);
}

getAllProductosController();
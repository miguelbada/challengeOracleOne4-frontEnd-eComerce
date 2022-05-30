import getProductosService from "../service/getProductosService.js";
import renderProductos from "./getProductosController.js";

async function getAllConsolasController() {
    let container = document.querySelector('.container');
    let productos = await getProductosService();
    let consolas = productos.filter(consola => consola.categoria == "consolas");

    container.innerHTML = renderProductos(consolas);
}

getAllConsolasController();
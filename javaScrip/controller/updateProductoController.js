import getProductoService from "../service/getProductoService.js";


let id = new URL(window.location).searchParams.get('id');

if(id != null) {
    updatePage();
    updateData(id);
}

async function updateData(idProducto) {
    let producto = getProducto(idProducto);
    
    producto.then(product => {
        getNombre().value = product.nombre;
        getPrecio().value = product.precio;
        getDescripcion().value = product.descripcion;
        getCategoria().value = product.categoria;
        getImagen().src = product.imagen;
    });
}

function updatePage() {
    let titulo = document.querySelector('.add-producto__titulo');
    let btn = document.querySelector('.add-producto__btn');
    titulo.innerHTML = "Editar producto";
    btn.innerHTML = "Editar Producto";
}

async function getProducto(idProducto) {
    return await getProductoService(idProducto);       
}

function getImagen() {
    return document.querySelector('[data-producto-imagen]');
}

function getNombre() {
    return document.querySelector('[data-producto-nombre]');
}

function getPrecio() {
    return document.querySelector('[data-producto-precio]');
}

function getDescripcion() {
    return document.querySelector('[data-producto-descripcion]');
}

function getCategoria() { 
    return document.querySelector(".add-producto__categoria___option");
}

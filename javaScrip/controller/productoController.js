import getProductoService from "../service/getProductoService.js";
import getProductosService from "../service/getProductosService.js";
import renderProductos from "./getProductosController.js";

let id = new URL(window.location).searchParams.get('id');
let producto = await getProductoService(id);

let imagen = document.querySelector('[data-producto-img]');
let nombre = document.querySelector('[data-producto-nombre]');
let precio = document.querySelector('[data-producto-precio]');
let descripcion = document.querySelector('[data-producto-descripcion]');
let productosRelacionados = document.querySelector('[data-producto-relacionado]');

imagen.src = producto.imagen;
imagen.classList.add('producto__img');

nombre.innerHTML = producto.nombre;
nombre.classList.add('producto__nombre');

precio.innerHTML = producto.precio;
precio.classList.add('producto__precio');

descripcion.innerHTML = producto.descripcion;
descripcion.classList.add('producto__descripcion');

let productosSimilares = await getProductosService();
let productos = productosSimilares.filter(productoS => productoS.categoria == producto.categoria);

productosRelacionados.innerHTML = renderProductos(productos);
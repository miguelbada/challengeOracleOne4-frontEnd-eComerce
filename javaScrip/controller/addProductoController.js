import addProductoService from '../service/addProductoService.js';

let inputFile = document.querySelector('[data-producto-file]');

inputFile.addEventListener("change", () => {
    let imagenPreview = document.querySelector('[data-producto-imagen]');
    let reader = new FileReader();
    reader.readAsDataURL(inputFile.files[0]);
    
    reader.onload = function(e) {
        var imagenSrc = reader.result;
        imagenPreview.src = imagenSrc;
    };
});

let formulario = document.querySelector('.add-producto__form');

formulario.addEventListener('submit',async evento => {
    evento.preventDefault();  
    addProductoService(imagen(), nombre(), precio(), descripcion(), categoria());
})

function imagen() {
    return document.querySelector('[data-producto-imagen]').getAttribute('src');
}

function nombre() {
    return formulario.querySelector('[data-producto-nombre]').value;
}

function precio() {
    return formulario.querySelector('[data-producto-precio]').value;
}

function descripcion() {
    return formulario.querySelector('[data-producto-descripcion]').value;
}

function categoria() {
    let indice = formulario.select.selectedIndex;

    return formulario.select.options[indice].value;
}
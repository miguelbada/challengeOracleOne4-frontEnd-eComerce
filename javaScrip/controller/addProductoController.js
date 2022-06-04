import addProductoService from '../service/addProductoService.js';
import updateProductoService from '../service/updateProductoService.js';

let id = new URL(window.location).searchParams.get('id');
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
    console.log(nombre());
    if(id != null) {
        let isUpd = confirm(`Estas seguro que deseas editar el producto ${ nombre() } ?`);

        if(isUpd) {
            try {
                let updateProduct = await updateProductoService(imagen(), nombre(), precio(), descripcion(), categoria(), id);
                window.location.href = "./listaProductos.html";
            } catch (error) {
                console.log("Se produjo un error al tratar de editar el producto " + nombre(), error);
            }
        }   
    } else {
        let isAdd = confirm(`Estas seguro que deseas agregar el producto ${ nombre() } ?`);
    
        if(isAdd) {
            try {
                let addProduct = await addProductoService(imagen(), nombre(), precio(), descripcion(), categoria());
                window.location.href = "./listaProductos.html";
            } catch (error) {
                console.log("Se produjo un error al tratar de agregar el producto " + nombre(), error);
            }
        }
    }
});

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

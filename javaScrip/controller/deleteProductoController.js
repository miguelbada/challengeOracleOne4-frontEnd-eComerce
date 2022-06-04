import deleteProductoService from "../service/deleteProductoService.js";
import on from "./onController.js";



on(document, 'click', '[data-producto-delete]', async e => {
    let name = e.target.parentElement.parentElement.children[1].children[0].innerHTML;
    let id = new URL(window.location).searchParams.get('id');
    let isDelete = confirm(`Estas seguro que deseas aliminar el producto ${ name } ?`);

    if(isDelete) {
        try {
            let response = await deleteProductoService(id);
            window.location.href = "./listaProductos.html";
        } catch (error) {
            console.log(error);
        }
    }
});

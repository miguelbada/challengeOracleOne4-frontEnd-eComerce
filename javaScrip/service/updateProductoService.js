import url from "../url.js";

async function updateProductoService(imagen, nombre, precio, descripcion, categoria, id) {
    
    let response = await fetch(url + '/productos/' + id, {
        method: 'PUT',
        headers: {
            'content-Type': 'application/json;charset=utf-8'
        },
    body: JSON.stringify({imagen, nombre, precio, descripcion, categoria})
    });

    return await response.json();
}



export default updateProductoService;
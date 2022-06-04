import url from "../url.js";

async function deleteProductoService(id) {
    let urlProducto = url + '/productos/' + id;
    try {
        let response = await fetch(urlProducto, {
            method: 'DELETE'
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
    

    return await response.json();
}



export default deleteProductoService;
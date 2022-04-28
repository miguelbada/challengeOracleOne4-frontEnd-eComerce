import url from '../url.js';

async function addProductoService(imagen, nombre, precio, descripcion, categoria) {
    
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({imagen, nombre, precio, descripcion, id: uuid.v4(), categoria})
        });
    
        return await response.json();
    } catch (error) {
        console.log(error);
    }   
}

export default addProductoService;
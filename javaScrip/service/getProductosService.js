import url from '../url.js';

async function getProductosService() {
    let urlProducto = '/productos';
    try {
        let res = await fetch(url + urlProducto);

        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export default getProductosService;
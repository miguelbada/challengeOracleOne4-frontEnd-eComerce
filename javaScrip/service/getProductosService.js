import url from '../url.js';

async function getProductosService() {
    let urlProducto = '/productos';
    try {
        let res = await fetch('https://challenge-oracle-one-e-comerce.herokuapp.com' + urlProducto);

        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export default getProductosService;
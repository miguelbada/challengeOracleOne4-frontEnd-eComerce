import url from '../url.js'

async function getProductosService() {
    try {
        let res = await fetch(url);

        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export default getProductosService;
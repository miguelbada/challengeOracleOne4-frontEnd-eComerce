import url from '../url.js';

async function signUpUsuarioService(email, password) {
    let urlUsuario = '/usuarios';
    try {
        let response = await fetch(url + urlUsuario, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
    
        return await response.json();
    } catch (error) {
        console.log(error);
    }   
}

export default signUpUsuarioService;
let regexEmail = new RegExp(/^[a-zA-Z0-9\._-]+@+[a-zA-Z0-9\._-]+\..{1,15}$/, 'gm');
let regexNombre = new RegExp(/^[a-zA-Z0-9\._-]{3,40}$/ , 'gm');
let regexMensaje = new RegExp(/^[a-zA-Z0-9\._-]{3,120}$/ , 'gm');
let regexPassword = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, 'gm'); /* La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
Puede tener otros símbolos. */


/* let text = "miguel";
let textTrue = "miguel@hotmail.com";

console.log(regexEmail.test(text));
console.log(regexEmail.test(textTrue)); */


export {regexEmail, regexNombre, regexMensaje, regexPassword};
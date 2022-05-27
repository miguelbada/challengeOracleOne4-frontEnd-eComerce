class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="encabezado">
                    <div class="encabezado__container">
                            <a href="index.html"><img src="asset/img/Logo.svg" alt="logo de AluraGeek" class="encabezado__logo"></a>
                            <input type="search" placeholder="¿Qué deseas buscar?" class="encabezado__container___icono encabezado__container___busqueda">
                    </div>
                    <div class="encabezado__container">
                        <a href="login.html"><button class="encabezado__container___login">login</button></a>
                        <h2 class="login-name"></h2>
                        <button class="encabezado__container___sign-out" data-sing-out>Sign out</button>
                        <i class="fa-solid fa-magnifying-glass encabezado__container___busqueda-icono"></i>
                    </div>
                </div> 
            </header>
        `
    }
}

window.customElements.define("header-component", Header);
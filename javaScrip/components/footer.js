class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <section class="info">
                    <div class="info__informacion">
                        <img src="asset/img/Logo.svg" alt="logo de AluraGeek" class="galeria__imagen">
                        <ul class="info__text">
                            <li class="info__lista"><a href="#">Quienes somos</a></li>
                            <li class="info__lista"><a href="#">Política de privacidad</a></li>
                            <li class="info__lista"><a href="#">Programa de fidelidad</a></li>
                            <li class="info__lista"><a href="#">Nuestras Tiendas</a></li>
                            <li class="info__lista"><a href="#">Quiero ser franquiciado</a></li>
                            <li class="info__lista"><a href="#">Anúncie aquí</a></li>
                        </ul>
                    </div>
                    <div class="info__informacion___formulario">
                        <form class="info__formulario">
                            <label for="nombre" class="galeria__productos___destacado">Hable con nosotros</label>
                            <input type="text" placeholder="Nombre" name="nombre" class="info__formulario___nombre">
                            <input type="text" placeholder="Escribe tu mensaje" class="info__formulario___mensaje">
                            <button class="banner__btn">Enviar mensaje</button>
                        </form>
                    </div>
                </section>
                <section class="pie-de-pagina">
                    <p>Desarrollado por Miguel Bada</p>
                    <p>2021</p>
                </section>
            </footer>
        `
    }
}

window.customElements.define("footer-component", Footer);
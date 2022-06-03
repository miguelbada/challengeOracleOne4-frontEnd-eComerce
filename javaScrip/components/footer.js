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
                        <form class="info__formulario" action="https://formsubmit.co/ec2517e64e81ef5c893ac48d9b81836e" method="POST">
                            <label for="name" class="galeria__productos___destacado">Hable con nosotros</label>
                            <input type="text" placeholder="Nombre" name="name" class="info__formulario___nombre" required>
                            <input type="hidden" name="_subject" value="New submission!">
                            <textarea type="text" name="comments" cols="15" rows="5" placeholder="Escribe tu mensaje" class="info__formulario___mensaje"></textarea>
                            <input type="hidden" name="_next" value="https://miguelbada.github.io/challengeOracleOne4-frontEnd-eComerce/">
                            <button type="submit" class="banner__btn">Enviar mensaje</button>
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
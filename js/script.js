/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("menu-aberto");
    });

    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {
            menu.classList.remove("menu-aberto");
        });

    });
}


/* =========================
   FORMULÁRIO DE CONTATO
========================= */

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!formulario.checkValidity()) {

            alert("Por favor, preencha todos os campos obrigatórios.");

            return;
        }

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const ambiente = document.getElementById("ambiente").value;
        const mensagem = document.getElementById("mensagem").value;

        alert(
            "Dados recebidos!\n\n" +
            "Nome: " + nome +
            "\nE-mail: " + email +
            "\nTelefone: " + telefone +
            "\nAmbiente: " + ambiente +
            "\nMensagem: " + mensagem
        );

        const numeroWhatsApp = "5519982463512";

        const textoWhatsApp =
            "Olá! Gostaria de solicitar um orçamento para móveis planejados.%0A%0A" +
            "Nome: " + nome + "%0A" +
            "E-mail: " + email + "%0A" +
            "Telefone: " + telefone + "%0A" +
            "Ambiente: " + ambiente + "%0A" +
            "Mensagem: " + mensagem;

        window.open(
            "https://wa.me/" + numeroWhatsApp + "?text=" + textoWhatsApp,
            "_blank"
        );

        formulario.reset();

    });
}


/* =========================
   VOLTAR AO TOPO
========================= */

const voltarTopo = document.getElementById("voltarTopo");

if (voltarTopo) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            voltarTopo.classList.add("mostrar");

        } else {

            voltarTopo.classList.remove("mostrar");

        }

    });

    voltarTopo.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");

let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
}

const sr = ScrollReveal ({
    distance:'45px',
    duration:2700,
    reset: true
})

sr.reveal('.home-text', {delay:350, origin:'left'})
sr.reveal('.home-img', {delay:350, origin:'right'})
sr.reveal('.sub-service, .about, .portfolio,.service,.cta, .contact', {delay:200, origin:'bottom'})

function unloadScrollBars() {
    document.documentElement.style.overflowX = 'hidden';
    document.body.scrollX = "no"; // IE
}
unloadScrollBars();

/*********Função para a data (ano) estar sempre atualizada na página******************/
const data = new Date ();
data2 = data.getFullYear();
const ano = document.querySelector('#ano');
ano.innerHTML = data2;

/*********Função para confirmar o envio******************/
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio automático do formulário

    const form = this;

    fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            Swal.fire({
                title: "Sucesso!",
                text: "Mensagem enviada!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Erro!",
                text: "Não foi possível enviar a mensagem.",
                icon: "error"
            });
        }
    })
    .catch(() => {
        Swal.fire({
            title: "Erro!",
            text: "Erro de conexão com o servidor.",
            icon: "error"
        });
    });
});



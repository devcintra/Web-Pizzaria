let carrinho = document.querySelector(".carrinho");
let login = document.querySelector(".login-form");

document.querySelector("#cart").onclick = () => {
    carrinho.classList.toggle("active");
    login.classList.remove("active");
};

document.querySelector("#login").onclick = () => {
    login.classList.toggle("active");
    carrinho.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


let verModalCorpo = document.querySelector(".menu-modal-container");
let verModalBox = verModalCorpo.querySelectorAll(".menu-modal");  // Corrigida para querySelectorAll

document.querySelectorAll(".menu .box").forEach(menu => {  // Corrigida para querySelectorAll
    menu.onclick = () => {
        verModalCorpo.style.display = "flex";
        let nome = menu.getAttribute("data-name");

        verModalBox.forEach(visualizar => {  // Agora é uma lista, então o forEach funcionará
            let chamada = visualizar.getAttribute("data-target");
            if (nome === chamada) {
                visualizar.classList.add("active");
            } else {
                visualizar.classList.remove("active");  // Remove a classe dos outros elementos, se necessário
            }
        });
    };
});

verModalCorpo.querySelector("#fechar").onclick = () => {
    verModalCorpo.style.display = "none";
    verModalBox.forEach(fechar =>{
        fechar.classList.remove("active");
    })
}
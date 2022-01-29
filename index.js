let btnMenu = document.getElementById('menu-bars');
let navbar = document.querySelector(".navbar");
const fechar = document.getElementById("fechar");
const cards = document.querySelectorAll(".plan");

btnMenu.addEventListener("click",() =>{
    navbar.classList.add("active");
    fecharMenu(fechar);
});

function fecharMenu(fechar){
    fechar.addEventListener("click", ()=>{
        navbar.classList.remove("active");
    });
};
//Para os cards

cards.forEach(plano =>{
    plano.addEventListener("mouseover", ()=>{
        esconderCards();
        plano.classList.add("active");
    });
});

function esconderCards() {
    cards.forEach(plano => {
        plano.classList.remove("active");
    });
};

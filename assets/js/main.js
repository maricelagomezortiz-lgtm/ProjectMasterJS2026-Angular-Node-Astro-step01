//alert("hola");

window.addEventListener("load", ()=>{
    btnTop = document.querySelector(".footer__top");
    btnTop.addEventListener("click",()=>{
        window.scroll({
            top:150,
            left:0,
            behavior:"smooth"
        });

    });
});
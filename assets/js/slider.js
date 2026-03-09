window.addEventListener("load",()=>{
    let btnPrev = document.querySelector(".slider__btnprev");
    let btnNext = document.querySelector(".slider__btnnext");
    let slides = document.querySelectorAll(".slider__item");

    let allslides = slides.length;
    let counter=0;

    console.log(slides);
    console.log(allslides);

    //boton sig
    btnNext.addEventListener("click",()=>{      
        counter++;       
        if (counter >= allslides){
            counter = 0;
        }
        activaSlide(counter);
    });

    //boton anterior

     btnPrev.addEventListener("click",()=>{
        counter--;       
        if (counter <= -1){
            counter = allslides -1;
        }
         activaSlide(counter);
    });

    let activaSlide = (index)=>{
        clearActives();
        slides[index].classList.add("slider__item--active");
    };
    let clearActives = ()=>{
        slides.forEach(slide => {
            slide.classList.remove("slider__item--active");
        });
    };
});
let articles = document.querySelector(".layout__articles");
let post = [
    
    {
        title: "Articulo de Prueba 1",
        date: "30/12/2025",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reiciendis ad voluptatum in exercitationem enim perferendis voluptate impedit velit recusandae eligendi expedita aliquid, porro numquam assumenda atque! Eaque, quibusdam architecto?"
    },
     {
        title: "Articulo de Prueba 2",
        date: "31/12/2025",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reiciendis ad voluptatum in exercitationem enim perferendis voluptate impedit velit recusandae eligendi expedita aliquid, porro numquam assumenda atque! Eaque, quibusdam architecto?"
    },
     {
        title: "Articulo de Prueba 3",
        date: "1/1/2026",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reiciendis ad voluptatum in exercitationem enim perferendis voluptate impedit velit recusandae eligendi expedita aliquid, porro numquam assumenda atque! Eaque, quibusdam architecto?"
    },
     {
        title: "Articulo de Prueba 4",
        date: "2/1/2026",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reiciendis ad voluptatum in exercitationem enim perferendis voluptate impedit velit recusandae eligendi expedita aliquid, porro numquam assumenda atque! Eaque, quibusdam architecto?"
    }
];

post.forEach(article => {
    articles.innerHTML+=`
            <article class="articles__article">
                <h3 class="article__title">${article.title}</h3>
                <span class="article__date">${article.date}</span>
                <p class="article__body">${article.body}</p>
                <button class="article__btn">Leer mas...</button>
            </article>`
});
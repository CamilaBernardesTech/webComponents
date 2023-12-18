class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
       const componentRoot = document.createElement("div");
       componentRoot.setAttribute("class", "card");
       const cardLeft = document.createElement("div");
       cardLeft.setAttribute("class", "card__left");

       const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Autor Desconhecido");

       const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

       const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

       cardLeft.appendChild(autor);
       cardLeft.appendChild(linkTitle);
       cardLeft.appendChild(newsContent);

       const cardRight = document.createElement("div");
       cardRight.setAttribute("class", "card__right");

       const newsImg = document.createElement("img");
       newsImg.src = this.getAttribute("photo") || "assets/default.png";
       newsImg.alt = "Foto descritiva da notícia";

       cardRight.appendChild(newsImg);

       componentRoot.appendChild(cardLeft);
       componentRoot.appendChild(cardRight);

       return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        
        .card{
            width: 720px;
            border: 1px solid gray;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        .card__right{
         
        }
        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .card__left > span{
            font-weight: 400;
        }
        .card__right > img{
            max-width: 200px;
            max-height: 150px;
            width: auto;
            height: auto;
            padding: .25rem;
        }
        
        
        `;
        return style;

    }
}

customElements.define("card-news", CardNews);
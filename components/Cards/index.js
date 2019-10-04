// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

articleArr = []
console.log(articleArr);


axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response)
    response.data.articles.bootstrap.forEach(item => {
        console.log(item)
        articleArr.push(item)
    });
    response.data.articles.javascript.forEach(item => {
        console.log(item)
        articleArr.push(item)
    });
    response.data.articles.jquery.forEach(item => {
        console.log(item)
        articleArr.push(item)
    });
    response.data.articles.node.forEach(item => {
        console.log(item)
        articleArr.push(item)
    });
    response.data.articles.technology.forEach(item => {
        console.log(item)
        articleArr.push(item)
    });
    articleArr.forEach(item => {
        console.log(item)
        const articleContainer= cards(item);
        cardsContainer.appendChild(articleContainer);
    });
  })
.catch(error => {
  console.log("The data was not returned", error);
});

function cards(article) {

    const 
    card = document.createElement("div"),
    headline = document.createElement("div"),
    author = document.createElement("div"),
    imgContainer = document.createElement("div"),
    img = document.createElement("img"),
    authorsName = document.createElement("span");

    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    authorsName.textContent = article.authorName; 

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorsName);

    return card;
}
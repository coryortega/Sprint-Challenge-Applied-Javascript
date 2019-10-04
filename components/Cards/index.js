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


axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response)
//   response.data.topics.forEach(item => {

//       const tabContainer= createMenu(item);
//       topic.appendChild(tabContainer);

    // });
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

    date.textContent ="SMARCH 28, 2019";
    title.textContent = "98°"
    header.classList.add("header");
    date.classList.add("date");
    temperature.classList.add("temp");

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temperature);

    return header;
}
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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(obj => {
        const articles = obj.data.articles;
        const articleTopic = Object.keys(articles);
        const cardContainer = document.querySelector('.cards-container');

        articleTopic.map(topic =>
            articles[`${topic}`].map(article => {
                cardContainer.appendChild(cardCreator(article));
            }))
    })
    .catch(error => {
        console.log('Error:', error);
    })

function cardCreator(data){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    author.appendChild(name);
    imgCont.appendChild(img);

    name.textContent = data.authorName;
    headline.textContent = data.headline;
    img.src = data.authorPhoto;

    return card;
}
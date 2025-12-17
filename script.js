function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {       
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER

// 1 sélection du container
const h1 = document.getElementById("nom-journal"); 
console.log(h1);

// 2 sélection de l'élément dans la data
let nomJournal = journal.journalTitre;
console.log(nomJournal);

// 3 injecter le contenu dans le container
h1.insertAdjacentHTML("beforeend", nomJournal);

// 1 sélection du container
const p = document.getElementById("phrase-accroche");
console.log(p);

// 2 sélection de l'élément dans la data
let phraseAccroche = journal.hookPhrase;
console.log(phraseAccroche);

// 3 injecter le contenu dans le container
p.insertAdjacentHTML("beforeend", phraseAccroche);

     // TODO 2: REMPLIR LA NAVIGATION

const nav = document.getElementById("themes-nav"); 
console.log(nav);

let topicCards = journal.topicCards;
console.log(topicCards);

topicCards.forEach(topicCard => {
  console.log(topicCard.title);

nav.insertAdjacentHTML("beforeend", topicCards.title);
})

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

const articlePrincipalContainer = document.getElementById("article-principal")
console.log(articlePrincipalContainer);

let featureStory = journal.featureStory;  
console.log(featureStory.heading);

articlePrincipalContainer.insertAdjacentHTML("beforeend" , featureStory.heading)

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
     // array.forEach(element => {
        
const articlesGrid = document.getElementById("articles-grid");
console.log(articlesGrid);

let storyLists = journal.storyList;
console.log(storyLists);

//  let card = ["heading" , "shortDesc" , "body" , "publishDate" , "topic" , "writer" , "image" , "score" , "viewsCount" , "readTime" , "labels" , "titre" , "description" , "corps"
// , "date" , "theme" , "auteur"];

storyLists.forEach(storyList => { 
let card = `
<div>
  <h2>${storyList.heading}</h2>
  <p>${storyList.shortDesc}</p>
  <p>${storyList.body}</p>
  <p>${storyList.publishDate}</p>
  <p>${storyList.topic}</p>
  <p>${storyList.writer}</p>
  <p>${storyList.image}</p>
  <p>${storyList.score}</p>
  <p>${storyList.viewsCount}</p>
  <p>${storyList.readTime}</p>
  <p>${storyList.labels}</p>
  <p>${storyList.titre}</p>
  <p>${storyList.description}</p>
  <p>${storyList.corps}</p>
  <p>${storyList.date}</p>
</div>`
console.log(storyList);

articlesGrid.insertAdjacentHTML("beforeend" , card);
})
//  <p>${storyList.theme}</p>
//<p>${storyList.auteur}</p> //

      // TODO 5: REMPLIR LES THEMES

let themesList = title.themesList;
console.log(themesList);

themesLists.forEach(themesList => { 
let card = `

<div>
  <h2>${themes.list}</h2>
  </div>`

console.log(themesList);

themesList.insertAdjacentHTML("beforeend" , card);
})

      // TODO 6: REMPLIR LES AUTEURS

let authorsList = title.authorsList;

authorsLists.forEach(authorsList => { 

let card = `
<div>
  <h2>${authors.list}</h2>
  </div>`

 console.log(authorsList);

authorsList.insertAdjacentHTML("beforeend" , card);
})

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION

      // let call to action

      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 

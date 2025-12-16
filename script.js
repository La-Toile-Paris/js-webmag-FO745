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

//1
const nav  = document.getElementById("themes-nav"); 
console.log(nav);

//2
let themesNav = journal.brandMark;
console.log(themesNav);

//3
nav.insertAdjacentHTML("beforeend", themesNav);


// class="themes-nav">



      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL


      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      // TODO 5: REMPLIR LES THEMES

      // TODO 6: REMPLIR LES AUTEURS

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION



      // const button = documentgetElementById('');

      //console.log(button);
      


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
 

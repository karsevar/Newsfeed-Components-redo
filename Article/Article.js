// Will need to write the Article class as a function:

// class Article {
//   constructor(articleElement) {
//   }

//   expandArticle() {
//   }

//   // Following code is for stretch problem 2:
//   removeArticle() {
//   }
// }

function articleEvent(articleElement) {
  const expandButton = articleElement.querySelector('.expandButton');
  expandButton.textContent = 'Expand';

  expandButton.addEventListener('click', event => {
    articleElement.classList.toggle('article-open');
  })
}


/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

// Nice the following ArticleMarkup class works perfectly it populates 
// the html page with new .article markup. Will need to refactor this 
// with the Article class if possible.

const articleObject1 = {
  'domElement': document.querySelector('.articles'),
  'header': 'Lambda School Students: "We\'re the best!"',
  'date': 'Nov 5th, 2017',
  'paragraph': 'Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2 windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba owen jinn tatooine sith organa.'
}

let articles = document.querySelectorAll('.article');

articles.forEach(article => articleEvent(article));




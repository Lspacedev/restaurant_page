console.log('Working.....')
// import functions
import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';



//global
const content = document.querySelector('#content');

//nav
const nav = document.createElement('div');
nav.classList.add('nav');

//footer
const footer = document.createElement('div');
footer.classList.add('footer');

//nav menu
const homePage = document.createElement('div');
homePage.classList.add('home');
homePage.innerText = "Home";

const menuPage = document.createElement('div');
menuPage.classList.add('Menu');
menuPage.innerText = "Menu";

const contactPage = document.createElement('div');
contactPage.classList.add('contact');
contactPage.innerText = "Contact";

nav.append(homePage)
nav.append(menuPage)
nav.append(contactPage)


//Append to content div
content.append(nav)

//main div
const main = document.createElement('div');
main.classList.add('main');
content.append(main)

main.append(home());

//event listeners
homePage.addEventListener('click', function(){
    main.firstChild.remove();
    main.append(home());

});

menuPage.addEventListener('click', function(){
    main.firstChild.remove();
    main.append(menu());
});

contactPage.addEventListener('click', function(){
    main.firstChild.remove();
    main.append(contact());
});


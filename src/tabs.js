import createHomePage from "./homepage";
import createMenuPage from "./menu";
import createContactsPage from "./contacts";

const createTabs = () => {
    const nav = document.querySelector('#nav')

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactsBtn = document.createElement('button');

    homeBtn.setAttribute('id', 'home-btn');
    menuBtn.setAttribute('id', 'menu-btn');
    contactsBtn.setAttribute('id', 'contacts-btn');

    homeBtn.classList.add('tab');
    menuBtn.classList.add('tab');
    contactsBtn.classList.add('tab');

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactsBtn.textContent = 'Contacts';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactsBtn);

    homeBtn.addEventListener('click', () => {
        clearContent()
        createHomePage();
    });
    menuBtn.addEventListener('click', () => {
        clearContent()
        createMenuPage();
    });
    contactsBtn.addEventListener('click', () => {
        clearContent()
        createContactsPage();
    });
};

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    };
};

export default createTabs;
const createContactsPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');
    
    const headline = document.createElement('h1');
    headline.textContent = "Contact Us!";
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = "Phone Number: (604) 778-1234"
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
};

export default createContactsPage;
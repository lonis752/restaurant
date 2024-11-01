const createHomePage = () => {
    //Select container div and creating div for the contents of the homepage.
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    //Create and append the content for out homepage.
    const image = document.createElement('img');
    image.src = "https://seeklogo.com/images/N/noodle-noodle-logo-CC600C58D7-seeklogo.com.png";
    image.height = '300';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Noodle House!";
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = "Noodle House specializes in making delicious Korean-style Chinese food. We are proud to offer amazing dishes that combine healthy ingredients with passion for fine fusion food. Come try our dishes or order online now!"
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
};

export default createHomePage;
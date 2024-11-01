const createMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    const jjm = document.createElement('img');
    jjm.src = "https://cdn.pixabay.com/photo/2020/04/26/22/32/black-bean-noodles-5097423_1280.jpg";
    jjm.height = '300';
    pageContent.appendChild(jjm);

    const jjmheadline = document.createElement('h1');
    jjmheadline.textContent = "JA JANG MYUN";
    pageContent.appendChild(jjmheadline);

    const jb = document.createElement('img');
    jb.src = "https://cdn.pixabay.com/photo/2016/09/07/10/19/food-1651290_1280.jpg";
    jb.height = '300';
    pageContent.appendChild(jb);

    const jbheadline = document.createElement('h1');
    jbheadline.textContent = "JJAM BONG";
    pageContent.appendChild(jbheadline);

    const tsy = document.createElement('img');
    tsy.src = "https://www.koreanbapsang.com/wp-content/uploads/2011/09/DSC_0113-e1541395731822.jpg";
    tsy.height = '300';
    pageContent.appendChild(tsy);

    const tsyheadline = document.createElement('h1');
    tsyheadline.textContent = "TANG SU YUK";
    pageContent.appendChild(tsyheadline);

    content.appendChild(pageContent);
};

export default createMenuPage;
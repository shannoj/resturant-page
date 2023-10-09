function buildMenu(){
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const menuHeader = document.createElement('div');
    menuHeader.setAttribute('id', 'menuHeader');
    menuHeader.innerHTML = "Menu";

    const entrees = document.createElement('div');
    entrees.setAttribute('id', 'entrees');
    const entreeTitle = document.createElement('div');
    entreeTitle.setAttribute('id', 'entreeTitle');
    entreeTitle.innerHTML = 'Entrees'
    const entreeContainer = document.createElement('div');
    entreeContainer.setAttribute('id', 'entreeContainer');
    entrees.appendChild(entreeTitle);
    entrees.appendChild(entreeContainer);

    const plates = document.createElement('div');
    plates.setAttribute('id', 'plates');
    const platesTitle = document.createElement('div');
    platesTitle.setAttribute('id', 'platesTitle');
    platesTitle.innerHTML = 'Plates'
    const platesContainer = document.createElement('div');
    platesContainer.setAttribute('id', 'entreeContainer');
    plates.appendChild(platesTitle);
    plates.appendChild(platesContainer);

    container.appendChild(menuHeader);
    container.appendChild(entrees);
    container.appendChild(plates);


    return container;
}

export default buildMenu();
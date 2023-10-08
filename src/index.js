const content = document.getElementById('content')

function buildBody(){
    const container = document.createElement('div');
    const hours = document.createElement('div');
    const about = document.createElement('div');
    const location = document.createElement('div');

    container.appendChild(hours);
    container.appendChild(about);
    container.appendChild(location);
    
    return container;
}

function buildHeader(){
    const header = document.createElement('div');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');

    header.appendChild(tab1);
    header.appendChild(tab2);
    header.appendChild(tab3);

    return header
}

content.appendChild(buildBody());
content.appendChild(buildHeader());
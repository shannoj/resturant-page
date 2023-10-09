import "./style.css"

function buildBody(){
    const container = document.createElement('div');
    const hours = document.createElement('div');
    const about = document.createElement('div');
    const location = document.createElement('div');

    container.setAttribute('id', 'container');
    hours.setAttribute('id', 'hours');
    about.setAttribute('id', 'about');
    location.setAttribute('id', 'location');

    container.appendChild(hours);
    container.appendChild(about);
    container.appendChild(location);
    
    return container;
}

function buildHeader(){
    const header = document.createElement('div');
    const tab1 = document.createElement('button');
    const tab2 = document.createElement('button');
    const tab3 = document.createElement('button');

    header.setAttribute('id', 'header');
    tab1.setAttribute('id', 'tab1');
    tab2.setAttribute('id', 'tab2');
    tab3.setAttribute('id', 'tab3');

    tab1.innerHTML = 'Home';
    tab2.innerHTML = 'Menu';
    tab3.innerHTML = 'Contact';

    header.appendChild(tab1);
    header.appendChild(tab2);
    header.appendChild(tab3);

    return header;
}


document.body.appendChild(buildHeader());
document.body.appendChild(buildBody());

export default buildBody();

document.getElementById('tab1').addEventListener('click', () => {
    loadTabContent('index.js');
  });
  
  document.getElementById('tab2').addEventListener('click', () => {
    loadTabContent('tab2.js');
  });
  
  document.getElementById('tab3').addEventListener('click', () => {
    loadTabContent('tab3.js');
  });

  function loadTabContent(moduleName) {
    // Dynamically import the content module
    import(/* webpackChunkName: "[request]" */ `./${moduleName}`).then((module) => {
        // Clear existing content
        document.getElementById('container').innerHTML = '';
        // Append the loaded content to the tab-content container
        document.getElementById('container').appendChild(module.default);
      })
      .catch((error) => {
        console.error('Error loading module:', error);
      });
  }
  

if (module.hot) {
    module.hot.accept('./index.js', function() {
      console.log('Accepting the updated printMe module!');
    })
  }

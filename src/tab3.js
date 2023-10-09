function buildContacts(){
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const contact = document.createElement('div');
    contact.innerHTML = 'Contact Us';

    const phone = document.createElement('div');
    phone.innerHTML = 'Phone: 12309128930';

    const email = document.createElement('div');
    email.innerHTML = 'Email: resturant@gmail.com';

    container.appendChild(contact);
    container.appendChild(phone);
    container.appendChild(email);

    return container;
}

export default buildContacts();
console.log('dom file');

const body = document.querySelector('body');

const styleBody = () => {
    body.style.background = 'skyblue';
};

const addTitle = (text) => {
    const title = document.createElement('h2');
    title.textContent = text;
    body.appendChild(title)
};

const contact = 'mario@thenetninja.co.uk';

export { styleBody, addTitle, contact };
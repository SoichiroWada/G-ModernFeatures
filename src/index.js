import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';

console.log('index.js file');

addTitle('hello, world from index.js');
styleBody();

console.log(contact);

const premUsers = getPremUsers(users);
console.log(users, premUsers);
console.log('Burietta')
console.log('Vinata Rattata Russo')
console.log('Revel Heart')
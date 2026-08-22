const users = [
  { name: 'mario', premium: true },
  { name: 'luigi', premium: false },
  { name: 'yoshi', premium: true },
  { name: 'toad', premium: true },
  { name: 'peach', premium: false },
  { name: 'Bengi', premium: true },
  { name: 'Cruise', premium: true },
  { name: 'Brian', premium: true },
  { name: 'Tom', premium: true }
];

// export default users;

const getPremUsers = (users) => {
  return users.filter(user => user.premium);
};

export { getPremUsers, users as default };
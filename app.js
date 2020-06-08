const express = require('express');
const path = require('path');
const {v4} = require('uuid');
const app = express();

// импровизированная база данных
let CONTACTS = [
  {id: v4(), name: 'Timur', value: 'admin', marked: false}
];

app.use(express.json()); // для того чтобы request в endpoints работал нужно прописать эту функцию

// endpoints (url)
// GET
app.get('/api/contacts', (req, res) => {   // /api/contacts - route
  res.status(200).json(CONTACTS)
});
// POST
app.post('/api/contacts', (req, res) => {
  const contact = {...req.body, id: v4(), marked: false};
  CONTACTS.push(contact);
  res.status(201).json(contact); // status 201 - elem создан
});
// DELETE
app.delete('/api/contacts/:id', (req, res) => {
  CONTACTS = CONTACTS.filter(elem => elem.id !== req.params.id);
  res.status(200).json({message: 'Контакт был удален'})
})

app.use(express.static(path.resolve(__dirname, 'client'))); // делаем папку статической (чтобы запускались frontend модули js)

app.get('*', (req, res) => { // express будет смотреть за всеми get запросами которые есть
  res.sendFile(path.resolve(__dirname, 'client', 'index.html')); // express отдает index.html
});

app.listen(3000, () => console.log(`server start`));
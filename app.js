const express = require('express');
const path = require('path');
const app = express();

// импровизированная база данных
const CONTACTS = [
  {id: 1, name: 'Timur', value: 'admin', marked: false}
]

// endpoint (url)
app.get('/api/contacts', (req, res) => {   // /api/contacts - route
  res.status(200).json(CONTACTS)
})

app.use(express.static(path.resolve(__dirname, 'client'))); // делаем папку статической (чтобы запускались frontend модули js)

app.get('*', (req, res) => { // express будет смотреть за всеми get запросами которые есть
  res.sendFile(path.resolve(__dirname, 'client', 'index.html')); // express отдает index.html
});

app.listen(3000, () => console.log(`server start`));
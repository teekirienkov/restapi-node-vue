const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'client'))); // делаем папку статической (чтобы запускались frontend модули js)

app.get('*', (req, res) => { // express будет смотреть за всеми get запросами которые есть
  res.sendFile(path.resolve(__dirname, 'client', 'index.html')); // express отдает index.html
});

app.listen(3000, () => console.log(`server start`));
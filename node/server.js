// Dans votre fichier server.js de Node.js
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());

app.get('/api/data', (req, res) => {
  res.send('Données depuis le serveur Node.js');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

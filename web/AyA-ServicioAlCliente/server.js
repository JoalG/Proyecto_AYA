//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/ay-a-servicio-al-cliente'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ay-a-servicio-al-cliente/'}),
);

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8000;
app.listen(port);
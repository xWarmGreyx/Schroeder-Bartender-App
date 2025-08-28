const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const orderingController = require('./controllers/orderingController');
const bartenderController = require('./controllers/bartenderController');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.use('/ordering', orderingController);
app.use('/bartender', bartenderController);

const PORT = 3000;
app.listen(PORT, () => console.log(`Bartender app running on http://localhost:${PORT}`));
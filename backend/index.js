const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/sample/:id', (req, res, next) => {
    const id = req.params.id

    // Atleast 300ms of delay just to watch api fetching
    setTimeout(()=> {
        const next = parseInt(id) + 1;
        const current = id;
        if(id < 10) {
            res.json({ next, current });
        } else {
            res.json({ current });
        }
    }, 300);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
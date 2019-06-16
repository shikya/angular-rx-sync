const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/sample/:id', (req, res, next) => {
    const id = req.params.id
    setTimeout(()=>{
        res.json({ id });
    }, 300);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
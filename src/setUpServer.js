/**
* Configuration
*/

const express = require('express');
const app = express();
var cors = require('cors');

/**
* Mock datas
*/

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world!!');
});


app.get('/api/headerImagesArray', (req, res) => {
    const headerImg = [
        {
            id: 1,
            imgName: "Image1",
            headerText: "Crypto",
            test1: "Hello.",
            test2: "What can we help you with?"
        },
        {
            id: 2,
            imgName: "Image2",
            headerText: "Brand",
            test1: "Hello.",
            test2: "What can we help you with?"
        },
        {
            id: 3,
            imgName: "Image3",
            headerText: "Hello",
            test1: "Design.",
            test2: "What can we help you with?"
        }
    ]
    res.json(headerImg);
});

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);
// });

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
//     // http://localhost:3000/api/posts/2018/4?sortBy=name
// });

//PORT
const port = process.env.PORT || 3005;

app.listen(3005, () => console.log(`Listening on port ${port}...`));

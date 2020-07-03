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
            text1: "Hello.",
            text2: "What can we",
            text3: "help you with?"
        },
        {
            id: 2,
            imgName: "Image2",
            headerText: "Brand",
            text1: "Hello.",
            text2: "What can we",
            text3: "help you with?"
        },
        {
            id: 3,
            imgName: "Image3",
            headerText: "Hello",
            text1: "Design.",
            text2: "What can we",
            text3: "help you with?"
        }
    ]
    res.json(headerImg);
});

app.get('/api/section1', (req, res) => {
    const sec1 = [
        {
            id: 1,
            header: "Digital creativity.",
            text: "Lorem ipsum dolor sit amet, nam propriae atomorum sensibus ei sed errem populo.",
            path: "about-us"
        },
        {
            id: 2,
            header: "No coding neded.",
            text: "Lorem ipsum dolor sit amet, nam propriae atomorum sensibus ei sed errem populo.",
            path: "process"
        },
        {
            id: 3,
            header: "Finnish quality.",
            text: "Lorem ipsum dolor sit amet, nam propriae atomorum sensibus ei sed errem populo.",
            path: "happy-team"
        },
    ]
    res.json(sec1);
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

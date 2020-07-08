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

app.get('/api/section2/pictureBoard', (req, res) => {
    const picBoard = [
        {
            id: 1,
            key: "",
            option: "blacAndWhite",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 2,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 3,
            key: "",
            option: "text",
            header: "Music",
            text: "Beautiful and advanced interface.",
            pictures: []
        },
        {
            id: 4,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 5,
            key: "",
            option: "text",
            header: "Music",
            text: "How people really use their voice interfaces.",
            pictures: []
        },
        {
            id: 6,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 7,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 8,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 9,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 10,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 11,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 12,
            key: "",
            option: "text",
            header: "Music",
            text: "Cera is leading healthcare startup.",
            pictures: []
        },
        {
            id: 13,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 14,
            key: "",
            option: "text",
            header: "Music",
            text: "She needed only a tube of paint and a brush to draw a masterpiece.",
            pictures: []
        },
        {
            id: 15,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: []
        },
        {
            id: 16,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            pictures: []
        }
    ]
    res.json(picBoard);
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

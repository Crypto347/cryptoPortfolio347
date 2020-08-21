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
            text3: "help you with?",
            alt: "Crypto"
        },
        {
            id: 2,
            imgName: "Image2",
            headerText: "Brand",
            text1: "Hello.",
            text2: "What can we",
            text3: "help you with?",
            alt: "Brand"
        },
        {
            id: 3,
            imgName: "Image3",
            headerText: "Hello",
            text1: "Design.",
            text2: "What can we",
            text3: "help you with?",
            alt: "Design"
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
            option: "blackAndWhite",
            header: null,
            text: null,
            path: "portfolio-item/big-slider/2",
            pictures: [
                {
                    id: 1,
                    key: "bw1",
                    folderName: "blackAndWhite",
                    imageName: "dose-media-bU6JyhSI6zo-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "bw2",
                    folderName: "blackAndWhite",
                    imageName: "daniel-korpai-kO7TrSB9pCQ-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "bw3",
                    folderName: "blackAndWhite",
                    imageName: "rahul-bhogal-lihCTIOP28U-unsplash.png",               
                    alt: "image"
                },
                {
                    id: 4,
                    key: "bw4",
                    folderName: "blackAndWhite",
                    imageName: "grocery-list-1670408_1920.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "bw5",
                    folderName: "blackAndWhite",
                    imageName: "heather-ford-6fiz86Ql3UA-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "bw6",
                    folderName: "blackAndWhite",
                    imageName: "computer-820281_1920.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 2,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            path: "portfolio-item/small-slider/2",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 3,
            key: "",
            option: "text",
            header: "Music",
            text: "Beautiful and advanced interface.",
            path: null,
            pictures: [
                {
                    id: 1,
                    key: "text1",
                    folderName: "text",
                    imageName: "alexandra-gorn-JIUjvqe2ZHg-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "text2",
                    folderName: "text",
                    imageName: "alexandra-gorn-W5dsm9n6e3g-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "text3",
                    folderName: "text",
                    imageName: "alexandru-acea-T5jXjei49uY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "text4",
                    folderName: "text",
                    imageName: "cullen-jones-wu9Xr4rt5cU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "text5",
                    folderName: "text",
                    imageName: "jean-philippe-delberghe-3EC_3r8-yME-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "text6",
                    folderName: "text",
                    imageName: "patrick-perkins-3wylDrjxH-E-unsplash.png",
                    alt: "image"
                },
                {
                    id: 7,
                    key: "text7",
                    folderName: "text",
                    imageName: "sam-marx-3w8eCQgX_4c-unsplash.png",
                    alt: "image"
                },
                {
                    id: 8,
                    key: "text8",
                    folderName: "text",
                    imageName: "timothy-buck-psrloDbaZc8-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 4,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            path: "portfolio-item/gallery/2",
            pictures: [
                {
                    id: 1,
                    key: "col7",
                    folderName: "colorful",
                    imageName: "nathan-dumlao-pMW4jzELQCw-unsplash.png",
                    alt: "image"
                    
                },
                {
                    id: 2,
                    key: "col8",
                    folderName: "colorful",
                    imageName: "food-3025556_1920.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col9",
                    folderName: "colorful",
                    imageName: "nathan-dumlao-6VhPY27jdps-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col10",
                    folderName: "colorful",
                    imageName: "cristina-matos-albers-WhxeSQ671SM-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col11",
                    folderName: "colorful",
                    imageName: "nathan-dumlao-pnmRtTHWqDM-unsplash.png",
                    alt: "image"
                },
            ]
        },
        {
            id: 5,
            key: "",
            option: "text",
            header: "Music",
            text: "How people really use their voice interfaces.",
            path: null,
            pictures: [
                {
                    id: 1,
                    key: "text9",
                    folderName: "text",
                    imageName: "anthony-reungere-s6xt1mwF_iU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "text10",
                    folderName: "text",
                    imageName: "brendan-steeves-G-YAJ61qIuU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "text11",
                    folderName: "text",
                    imageName: "matthew-henry-Ix1TiS-E17E-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "text12",
                    folderName: "text",
                    imageName: "rikki-chan-9FfJW5Tu_qk-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "text13",
                    folderName: "text",
                    imageName: "timo-stern-iUBgeNeyVy8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "text14",
                    folderName: "text",
                    imageName: "ugur-peker-AkX0_cZQ6PI-unsplash.png",
                    alt: "image"
                },
                {
                    id: 7,
                    key: "text15",
                    folderName: "text",
                    imageName: "z-s-3-VLBL1DKxk-unsplash.png",
                    alt: "image"
                },
            ]
        },
        {
            id: 6,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            path: "portfolio-item/big-images/2",
            pictures: [
                {
                    id: 1,
                    key: "col12",
                    folderName: "colorful",
                    imageName: "freestocks-A11MXTzUhLE-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col13",
                    folderName: "colorful",
                    imageName: "emma-matthews-digital-content-production-X6M1Ke1o9yI-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col14",
                    folderName: "colorful",
                    imageName: "emma-matthews-digital-content-production-vKM1ZdtoBL4-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col15",
                    folderName: "colorful",
                    imageName: "stil-flRm0z3MEoA-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col16",
                    folderName: "colorful",
                    imageName: "uby-yanes-393QQ30ecvQ-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col17",
                    folderName: "colorful",
                    imageName: "uby-yanes-LMwW0ARHc4o-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 7,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            path: "portfolio-item/big-slider/3",
            pictures: [
                {
                    id: 1,
                    key: "col18",
                    folderName: "colorful",
                    imageName: "daily-nouri-E5Oo4nENq2M-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col19",
                    folderName: "colorful",
                    imageName: "charles-deluvio-dtSjxKDIPnA-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col20",
                    folderName: "colorful",
                    imageName: "angele-kamp-KaeaUITiWnc-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col21",
                    folderName: "colorful",
                    imageName: "jess-bailey-YFn6rpnyeRY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col22",
                    folderName: "colorful",
                    imageName: "jozsef-hocza-pJYd5CI_TRM-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col23",
                    folderName: "colorful",
                    imageName: "laika-notebooks-pONH9yZ-wXg-unsplash.png",
                    alt: "image"
                },
                {
                    id: 7,
                    key: "col24",
                    folderName: "colorful",
                    imageName: "lauren-fleischmann-R2aodqJn3b8-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 8,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            path: "portfolio-item/gallery/3",
            pictures: [
                {
                    id: 1,
                    key: "col25",
                    folderName: "colorful",
                    imageName: "leone-venter-pVt9j3iWtPM-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col26",
                    folderName: "colorful",
                    imageName: "kara-eads--0eTYFd2pzM-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col27",
                    folderName: "colorful",
                    imageName: "kara-eads-Uq9o9uUIT08-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col28",
                    folderName: "colorful",
                    imageName: "chris-lee-70l1tDAI6rM-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col29",
                    folderName: "colorful",
                    imageName: "olena-sergienko-dIMJWLx1YbE-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col30",
                    folderName: "colorful",
                    imageName: "sarah-dorweiler-9Z1KRIfpBTM-unsplash.png",
                    alt: "image"
                },
            ]
        },
        {
            id: 9,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            path: "portfolio-item/small-images/2",
            pictures: [
                {
                    id: 1,
                    key: "col31",
                    folderName: "colorful",
                    imageName: "paper-3025558_1920.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col32",
                    folderName: "colorful",
                    imageName: "jess-bailey-PWxsExxrf5g-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col33",
                    folderName: "colorful",
                    imageName: "jess-bailey-MSH3ldaRZsg-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col34",
                    folderName: "colorful",
                    imageName: "desktop-3820634_1920.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col35",
                    folderName: "colorful",
                    imageName: "jess-bailey-OhWKm1YoMgE-unsplash.png",
                    alt: "image"
                },
            ]
        },
        {
            id: 10,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            path: "portfolio-item/small-slider/3",
            pictures: [
                {
                    id: 1,
                    key: "bw7",
                    folderName: "blackAndWhite",
                    imageName: "meghan-schiereck--2eJaLtf_bI-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "bw8",
                    folderName: "blackAndWhite",
                    imageName: "marci-angeles-H_pOAqtNVEg-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "bw9",
                    folderName: "blackAndWhite",
                    imageName: "marci-angeles-sDmLk4Mf0hQ-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "bw10",
                    folderName: "blackAndWhite",
                    imageName: "glenn-carstens-peters-RLw-UC03Gwc-unsplash.png",
                    alt: "image"
                },
            ]
        },
        {
            id: 11,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            path: "portfolio-item/small-gallery/2",
            pictures: [
                {
                    id: 1,
                    key: "bw11",
                    folderName: "blackAndWhite",
                    imageName: "hope-house-press-leather-diary-studio-PJzc7LOt2Ig-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "bw12",
                    folderName: "blackAndWhite",
                    imageName: "jess-bailey-ycTvvg1mPU4-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "bw13",
                    folderName: "blackAndWhite",
                    imageName: "nahuel-hawkes-Ki6JO9sraB8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "bw14",
                    folderName: "blackAndWhite",
                    imageName: "stil-8-GAoVpIk4M-unsplash.png",
                    alt: "image"
                },
            ]
        },
        {
            id: 12,
            key: "",
            option: "text",
            header: "Music",
            text: "Cera is leading healthcare startup.",
            path: null,
            pictures: [
                {
                    id: 1,
                    key: "text16",
                    folderName: "text",
                    imageName: "iltun-huseynli-TQyah6wdlzg-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "text17",
                    folderName: "text",
                    imageName: "iltun-huseynli-Vyy_ddIxuEk-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "text18",
                    folderName: "text",
                    imageName: "iltun-huseynli-WIsk0e2VFgE-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "text19",
                    folderName: "text",
                    imageName: "jason-ortego-buF62ewDLcQ-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "text20",
                    folderName: "text",
                    imageName: "justin-chrn-OCmOLiKrK-Y-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "text21",
                    folderName: "text",
                    imageName: "murad-mornel-HjNqvIE91Js-unsplash.png",
                    alt: "image"
                },
                {
                    id: 7,
                    key: "text22",
                    folderName: "text",
                    imageName: "peter-jan-rijpkema-wI6o8OwUwdw-unsplash.png",
                    alt: "image"
                },
            ]
        },
        {
            id: 13,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            path: "portfolio-item/small-gallery/3",
            pictures: [
                {
                    id: 1,
                    key: "col36",
                    folderName: "colorful",
                    imageName: "jess-bailey-_969XXSgWc0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col37",
                    folderName: "colorful",
                    imageName: "gabrielle-henderson-xTLqJqtq8R4-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col38",
                    folderName: "colorful",
                    imageName: "eyeshadow-4713577_1920.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col39",
                    folderName: "colorful",
                    imageName: "laura-chouette-HTowfw8ascU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col40",
                    folderName: "colorful",
                    imageName: "life-3602514_1920.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col41",
                    folderName: "colorful",
                    imageName: "samantha-gades-pKt9mfEuZrs-unsplash.png",
                    alt: "image"
                },
                
            ]
        },
        {
            id: 14,
            key: "",
            option: "text",
            header: "Music",
            text: "She needed only a pen to draw a masterpiece.",
            path: null,
            pictures: [
                {
                    id: 1,
                    key: "text23",
                    folderName: "text",
                    imageName: "annie-spratt-sggw4-qDD54-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "text24",
                    folderName: "text",
                    imageName: "christin-hume-mfB1B1s4sMc-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "text25",
                    folderName: "text",
                    imageName: "dylan-gillis-KdeqA3aTnBY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "text26",
                    folderName: "text",
                    imageName: "perry-grone-lbLgFFlADrY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "text27",
                    folderName: "text",
                    imageName: "scott-graham-5fNmWej4tAA-unsplash.png",
                    alt: "image"
                },
            ]
        },
        {
            id: 15,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            path: "portfolio-item/small-images/3",
            pictures: [
                {
                    id: 1,
                    key: "col42",
                    folderName: "colorful",
                    imageName: "jess-bailey-L71uKsAVo4g-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col43",
                    folderName: "colorful",
                    imageName: "jess-bailey-6izKUqAC9xw-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col44",
                    folderName: "colorful",
                    imageName: "eleni-koureas-jUcuu5f5js0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col45",
                    folderName: "colorful",
                    imageName: "jess-bailey-z0guTIr_kts-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col46",
                    folderName: "colorful",
                    imageName: "jess-bailey-ZY2GNpgiWyU-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 16,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            path: "portfolio-item/small-images/4",
            pictures: [
                {
                    id: 1,
                    key: "bw15",
                    folderName: "blackAndWhite",
                    imageName: "ohmky-lQwWZI_WjSU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "bw16",
                    folderName: "blackAndWhite",
                    imageName: "clay-banks-_wkd7XBRfU4-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "bw17",
                    folderName: "blackAndWhite",
                    imageName: "lindsay-cotter-9J7sHieVFi0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "bw18",
                    folderName: "blackAndWhite",
                    imageName: "marina-zaharkina-TKQXY1dAgjE-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "bw19",
                    folderName: "blackAndWhite",
                    imageName: "mike-marquez-VnlyIQxQS10-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "bw20",
                    folderName: "blackAndWhite",
                    imageName: "alexandra-gorn-9rmnzkmydSY-unsplash.png",
                    alt: "image"
                }
            ]
        }
    ]
    res.json(picBoard);
});

app.get('/api/section2/ourProcess', (req, res) => {
    const sec2 = [
        {
            id: 1,
            header: "Sketch",
            img: "sketch"
        },
        {
            id: 2,
            header: "Process",
            img: "process"
        },
        {
            id: 3,
            header: "Development",
            img: "development"
        },
        {
            id: 4,
            header: "Design",
            img: "design"
        },
        {
            id: 5,
            header: "Evaluation",
            img: "evaluation"
        },
    ]
    res.json(sec2);
});

app.get('/api/section3/testimonials', (req, res) => {
    const testimonials = [
        {
            id: 1,
            feedback: "Noster mnesarchum ne usu. An idque possim facilisis vim. Vix in verterem scribentur. Quo option integre sensibus in te vix malis . Vix tale ludus persius cu labore. In qui meis munere evertitur. Id rebum dolor petentium vis.",
            author: "Jo Culp"
        },
        {
            id: 2,
            feedback: "Vix in verterem scribentur. Quo option integre sensibus in. Noster mnesarchum ne usu. Te vix malis an idque possim facilisis vim. Vix tale ludus persius cu labore. In qui meis munere evertitur. Id rebum dolor petentium vis, wisi dissen tias.",
            author: "Paul Macha"
        },
        {
            id: 3,
            feedback: "In qui meis munere evertitur. Id rebum dolor petentium vis, wisi dissen tias. Vix in verterem scribentur. Quo option integre sensibus in. Noster mnesarchum ne usu. An idque possim facilisis vim. Vix tale ludus persius cu te vix malis labores.",
            author: "John Eury"
        },
    ]
    res.json(testimonials);
});

app.get('/api/section3/teamInformation', (req, res) => {
    const teamInfo = [
        {
            id: 1,
            name: "Marcos Paulo",
            position: "Designer",
            photo: "Photo1",
            instaName: "ChristinaKinslee",
            path: "marcos-paulo-prado-Ur_QOF3mLyA-unsplash.png",
            hover: false
        },
        {
            id: 2,
            name: "Christina Kinslee",
            position: "UX Designer",
            photo: "Photo2",
            instaName: "ChristinaKinslee",
            path: "christina-wocintechchat-com-CtL3eP9ENyA-unsplash.png",
            hover: false
        },
        {
            id: 3,
            name: "Charlotte Lynn",
            position: "Developer",
            photo: "Photo3",
            instaName: "ChristinaKinslee",
            path: "vinicius-wiesehofer-LS1e59caoNM-unsplash.png",
            hover: false
        },
        {
            id: 4,
            name: "James Wilson",
            position: "Developer",
            photo: "Photo4",
            instaName: "ChristinaKinslee",
            path: "photo-1540569014015-19a7be504e3a.png",
            hover: false
        },
        {
            id: 5,
            name: "Zoe Fernandez",
            position: "Copywriter",
            photo: "Photo5",
            instaName: "ChristinaKinslee",
            path: "zoe-fernandez--zqoE7jnQgw-unsplash.png",
            hover: false
        },
    ]
    res.json(teamInfo);
});

app.get('/api/section4/statisticsData', (req, res) => {
    const statisticsData = [
        {
            id: 1,
            label: "Web Design",
            percent: 85
        },
        {
            id: 2,
            label: "Marketing",
            percent: 75
        },
        {
            id: 3,
            label: "Development",
            percent: 60
        },
        {
            id: 4,
            label: "Ui & UX",
            percent: 79
        }
    ]
    res.json(statisticsData);
});

app.get('/api/section4/achievementsData', (req, res) => {
    const achievementsData = [
        {
            id: 1,
            achievement: "Finished Yearly Projects",
            number: 22
        },
        {
            id: 2,
            achievement: "Different Locations",
            number: 7
        },
        {
            id: 3,
            achievement: "Years of Experience",
            number: 14
        },
        {
            id: 4,
            achievement: "Released Projects",
            number: 4
        }
    ]
    res.json(achievementsData);
});

app.get('/api/portfolio-item/small-images/:id', (req, res) => {
    let id = parseInt(req.params.id);
  
    const smallImages = [
        {
            id: 1,
            header: "Small images – Fashion",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum.",
            category: "Lifestyle",
            date: "07.20.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id1SmallImages1",
                    path: "adam-wilson-1QZYZib7eYs-unsplash.png"
                },
                {
                    id: 2,
                    key: "id1SmallImages2",
                    path: "jason-blackeye-DKCgibUVLNc-unsplash.png"
                },
                {
                    id: 3,
                    key: "id1SmallImages3",
                    path: "nordwood-themes-Nv4QHkTVEaI-unsplash.png"
                },
                {
                    id: 4,
                    key: "id1SmallImages4",
                    path: "ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.png"
                },
                {
                    id: 5,
                    key: "id1SmallImages5",
                    path: "shelbey-miller-HIQd4db8Kr8-unsplash.png"
                }
            ]
        },
        {
            id: 2,
            header: "Small images – Fashion",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum.",
            category: "Music",
            date: "05.13.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id2SmallImages1",
                    path: "jess-bailey-MSH3ldaRZsg-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id2SmallImages2",
                    path: "paper-3025558_1920-updated.png"
                }
            ]
        },
        {
            id: 3,
            header: "Small images – Fashion",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum.",
            category: "Music",
            date: "12.08.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id3SmallImages1",
                    path: "jess-bailey-dWKqZcPLc8Y-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id3SmallImages2",
                    path: "jess-bailey-L71uKsAVo4g-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id3SmallImages3",
                    path: "jess-bailey-z0guTIr_kts-updated-unsplash.png"
                }
            ]
        },
        {
            id: 4,
            header: "Small images – Fashion",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum.",
            category: "Music",
            date: "26.06.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                },
                {
                    id: 2,
                    label: "Coffee",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id4SmallImages1",
                    path: "clay-banks-_wkd7XBRfU4-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id4SmallImages2",
                    path: "marina-zaharkina-TKQXY1dAgjE-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id4SmallImages3",
                    path: "ohmky-lQwWZI_WjSU-updated-unsplash.png"
                }
            ]
        }
    ]

    let smallImagesObj = smallImages.find(item => item.id === id);
    if(!smallImagesObj) {
        res.status(404).send("The portfolio with the given ID was not found")
    }else{
        res.json(smallImagesObj);  
    }
});

app.get('/api/portfolio-item/big-slider/:id', (req, res) => {
    let id = parseInt(req.params.id);
  
    const bigSlider = [
        {
            id: 1,
            header: "Take a Look at Our Portfolio.",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam.",
            category: "Lifestyle",
            date: "06.22.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id1BigSlider1",
                    path: "ash-from-modern-afflatus-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id1BigSlider2",
                    path: "estee-janssens-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id1BigSlider3",
                    path: "filip-mroz-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id1BigSlider4",
                    path: "laura-chouette-updated-unsplash.png"
                },
                {
                    id: 5,
                    key: "id1BigSlider5",
                    path: "nadine-shaabana-updated-unsplash.png"
                }
            ]
        },
        {
            id: 2,
            header: "Branding & Website.",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam.",
            category: "Lifestyle",
            date: "07.10.2017",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                },
                {
                    id: 2,
                    label: "Design",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id2BigSlider1",
                    path: "dose-media-bU6JyhSI6zo-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id2BigSlider2",
                    path: "daniel-korpai-kO7TrSB9pCQ-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id2BigSlider3",
                    path: "rahul-bhogal-lihCTIOP28U-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id2BigSlider4",
                    path: "grocery-list-1670408_1920-updated.png"
                },
                {
                    id: 5,
                    key: "id2BigSlider5",
                    path: "heather-ford-6fiz86Ql3UA--updated-unsplash.png"
                },
                {
                    id: 6,
                    key: "id2BigSlider6",
                    path: "computer-820281_1920-updated.png"
                }
            ]
        },
        {
            id: 3,
            header: "Branding & Website.",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam.",
            category: "Lifestyle",
            date: "07.10.2017",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id3BigSlider1",
                    path: "angele-kamp-KaeaUITiWnc-upadted-unsplash.png"
                },
                {
                    id: 2,
                    key: "id3BigSlider2",
                    path: "charles-deluvio-dtSjxKDIPnA-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id3BigSlider3",
                    path: "daily-nouri-E5Oo4nENq2M-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id3BigSlider4",
                    path: "jess-bailey-YFn6rpnyeRY-updated-unsplash.png"
                },
                {
                    id: 5,
                    key: "id3BigSlider5",
                    path: "jozsef-hocza-pJYd5CI_TRM-updated-unsplash.png"
                },
                {
                    id: 6,
                    key: "id3BigSlider6",
                    path: "laika-notebooks-pONH9yZ-wXg-updated-unsplash.png"
                },
                {
                    id: 7,
                    key: "id3BigSlider7",
                    path: "lauren-fleischmann-R2aodqJn3b8-updated-unsplash.png"
                }
            ]
        }
    ]

    let bigSliderObj = bigSlider.find(item => item.id === id);
    if(!bigSliderObj) {
        res.status(404).send("The portfolio with the given ID was not found")
    }else{
        res.json(bigSliderObj);  
    }
});

app.get('/api/portfolio-item/big-images/:id', (req, res) => {
    let id = parseInt(req.params.id);
  
    const bigImages = [
        {
            id: 1,
            header: "Welcome! Take a Look at Our Portfolio.",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam.",
            category: "Lifestyle",
            date: "08.17.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                },
                {
                    id: 2,
                    label: "Design",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id1BigImages1",
                    path: "joshua-reddekopp-cNe8GsQR-OQ-unsplash.png"
                },
                {
                    id: 2,
                    key: "id1BigImages2",
                    path: "lee-campbell-CI-5GwJcVjE-unsplash.png"
                },
                {
                    id: 3,
                    key: "id1BigImages3",
                    path: "lee-campbell-qNPESem_t4I-unsplash.png"
                },
                {
                    id: 4,
                    key: "id1BigImages4",
                    path: "melanie-mauer-x-agyuDQHJA-unsplash.png"
                },
                {
                    id: 5,
                    key: "id1BigImages5",
                    path: "nathan-dumlao-KEniowKfX3k-unsplash.png"
                }
            ]
        },
        {
            id: 2,
            header: "Branding & Website.",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam.",
            category: "Lifestyle",
            date: "07.17.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id2BigImages1",
                    path: "uby-yanes-LMwW0ARHc4o-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id2BigImages2",
                    path: "emma-matthews-digital-content-production-vKM1ZdtoBL4-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id2BigImages3",
                    path: "uby-yanes-393QQ30ecvQ-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id2BigImages4",
                    path: "stil-flRm0z3MEoA-updated-unsplash.png"
                },
                {
                    id: 5,
                    key: "id2BigImages5",
                    path: "freestocks-A11MXTzUhLE-updated-unsplash.png"
                },
                {
                    id: 6,
                    key: "id2BigImages6",
                    path: "emma-matthews-digital-content-production-X6M1Ke1o9yI-updated-unsplash.png"
                }
            ]
        }
    ]

    let bigImagesObj = bigImages.find(item => item.id === id);
    if(!bigImagesObj) {
        res.status(404).send("The portfolio with the given ID was not found")
    }else{
        res.json(bigImagesObj);  
    }
});

app.get('/api/portfolio-item/small-gallery/:id', (req, res) => {
    let id = parseInt(req.params.id);
  
    const smallGallery = [
        {
            id: 1,
            header: "Portfolio small gallery",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo.",
            category: "Lifestyle",
            date: "07.18.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                },
                {
                    id: 2,
                    label: "Fashion",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id1SmallGallery1",
                    isHover: "init",
                    path: "ash-from-modern-afflatus-updated1-unsplash.png"
                },
                {
                    id: 2,
                    key: "id1SmallGallery2",
                    isHover: "init",
                    path: "estee-janssens-updated1-unsplash.png"
                },
                {
                    id: 3,
                    key: "id1SmallGallery3",
                    isHover: "init",
                    path: "filip-mroz-updated1-unsplash.png"
                },
                {
                    id: 4,
                    key: "id1SmallGallery4",
                    isHover: "init",
                    path: "georgie-cobbs-muOHbrFGEQY-updated1-unsplash.png"
                },
                {
                    id: 5,
                    key: "id1SmallGallery5",
                    isHover: "init",
                    path: "laura-chouette-updated1-unsplash.png"
                },
                {
                    id: 6,
                    key: "id1SmallGallery6",
                    isHover: "init",
                    path: "nadine-shaabana-updated1-unsplash.png"
                }
            ]
        },
        {
            id: 2,
            header: "Portfolio small gallery",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis.",
            category: "Lifestyle",
            date: "08.18.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id2SmallGallery1",
                    isHover: "init",
                    path: "hope-house-press-leather-diary-studio-PJzc7LOt2Ig-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id2SmallGallery2",
                    isHover: "init",
                    path: "jess-bailey-ycTvvg1mPU4-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id2SmallGallery3",
                    isHover: "init",
                    path: "nahuel-hawkes-Ki6JO9sraB8-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id2SmallGallery4",
                    isHover: "init",
                    path: "stil-8-GAoVpIk4M-updated-unsplash.png"
                }
            ]
        },
        {
            id: 3,
            header: "Portfolio small gallery",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis.",
            category: "Lifestyle",
            date: "08.18.2020",
            tags: [
                {
                    id: 1,
                    label: "Design",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id3SmallGallery1",
                    isHover: "init",
                    path: "eyeshadow-4713577_1920-updated.png"
                },
                {
                    id: 2,
                    key: "id3SmallGallery2",
                    isHover: "init",
                    path: "gabrielle-henderson-xTLqJqtq8R4-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id3SmallGallery3",
                    isHover: "init",
                    path: "jess-bailey-_969XXSgWc0-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id3SmallGallery4",
                    isHover: "init",
                    path: "laura-chouette-HTowfw8ascU-updated-unsplash.png"
                },
                {
                    id: 5,
                    key: "id3SmallGallery5",
                    isHover: "init",
                    path: "life-3602514_1920-updated.png"
                },
                {
                    id: 6,
                    key: "id3SmallGallery6",
                    isHover: "init",
                    path: "samantha-gades-pKt9mfEuZrs-updated-unsplash.png"
                }
            ]
        }
    ]

    let smallGalleryObj = smallGallery.find(item => item.id === id);
    if(!smallGalleryObj) {
        res.status(404).send("The portfolio with the given ID was not found")
    }else{
        res.json(smallGalleryObj);  
    }
});

app.get('/api/portfolio-item/gallery/:id', (req, res) => {
    let id = parseInt(req.params.id);
  
    const gallery = [
        {
            id: 1,
            header: "Portfolio gallery",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat aucto inelit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himena eos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, eratsed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Sednon mauris vitae erat consequat auctoreuin elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Sed non mauris.",
            category: "Lifestyle",
            date: "07.18.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                },
                {
                    id: 2,
                    label: "Fashion",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id1Gallery1",
                    isHover: "init",
                    path: "ash-from-modern-afflatus-updated2-unsplash.png"
                },
                {
                    id: 2,
                    key: "id1Gallery2",
                    isHover: "init",
                    path: "estee-janssens-updated2-unsplash.png"
                },
                {
                    id: 3,
                    key: "id1Gallery3",
                    isHover: "init",
                    path: "filip-mroz-updated2-unsplash.png"
                },
                {
                    id: 4,
                    key: "id1Gallery4",
                    isHover: "init",
                    path: "georgie-cobbs-muOHbrFGEQY-updated2-unsplash.png"
                },
                {
                    id: 5,
                    key: "id1Gallery5",
                    isHover: "init",
                    path: "laura-chouette-updated2-unsplash.png"
                },
                {
                    id: 6,
                    key: "id1Gallery6",
                    isHover: "init",
                    path: "nadine-shaabana-updated2-unsplash.png"
                }
            ]
        },
        {
            id: 2,
            header: "Portfolio gallery",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat aucto inelit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himena eos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, eratsed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Sednon mauris vitae erat consequat auctoreuin elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Sed non mauris.",
            category: "Lifestyle",
            date: "07.19.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                },
                {
                    id: 2,
                    label: "Coffee",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id2Gallery1",
                    isHover: "init",
                    path: "cristina-matos-albers-WhxeSQ671SM-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id2Gallery2",
                    isHover: "init",
                    path: "food-3025556_1920-updated.png"
                },
                {
                    id: 3,
                    key: "id2Gallery3",
                    isHover: "init",
                    path: "nathan-dumlao-6VhPY27jdps-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id2Gallery4",
                    isHover: "init",
                    path: "nathan-dumlao-pMW4jzELQCw-updated-unsplash.png"
                },
                {
                    id: 5,
                    key: "id2Gallery5",
                    isHover: "init",
                    path: "nathan-dumlao-pnmRtTHWqDM-updated-unsplash.png"
                }
            ]
        },
        {
            id: 3,
            header: "Portfolio gallery",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat aucto inelit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himena eos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, eratsed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Sednon mauris vitae erat consequat auctoreuin elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Sed non mauris.",
            category: "Lifestyle",
            date: "07.19.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id3Gallery1",
                    isHover: "init",
                    path: "chris-lee-70l1tDAI6rM-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id3Gallery2",
                    isHover: "init",
                    path: "kara-eads--0eTYFd2pzM-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id3Gallery3",
                    isHover: "init",
                    path: "kara-eads-Uq9o9uUIT08-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id3Gallery4",
                    isHover: "init",
                    path: "leone-venter-pVt9j3iWtPM-updated-unsplash.png"
                },
                {
                    id: 5,
                    key: "id3Gallery5",
                    isHover: "init",
                    path: "olena-sergienko-dIMJWLx1YbE-updated-unsplash.png"
                },
                {
                    id: 6,
                    key: "id3Gallery6",
                    isHover: "init",
                    path: "sarah-dorweiler-9Z1KRIfpBTM-updated-unsplash.png"
                }
            ]
        }
    ]

    let galleryObj = gallery.find(item => item.id === id);
    if(!galleryObj) {
        res.status(404).send("The portfolio with the given ID was not found")
    }else{
        res.json(galleryObj);  
    }
});

app.get('/api/portfolio-item/small-slider/:id', (req, res) => {
    let id = parseInt(req.params.id);
  
    const smallSlider = [
        {
            id: 1,
            header: "Small slider - Fashion",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit.",
            category: "Lifestyle",
            date: "07.18.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id1SmallSlider1",
                    isHover: "init",
                    path: "damian-patkowski--pahtnAMuFo-unsplash.png"
                },
                {
                    id: 2,
                    key: "id1SmallSlider2",
                    isHover: "init",
                    path: "drew-beamer-ehBB9G7qbss-unsplash.png"
                },
                {
                    id: 3,
                    key: "id1SmallSlider3",
                    isHover: "init",
                    path: "drew-beamer-PL6ClUWwDEw-unsplash.png"
                },
                {
                    id: 4,
                    key: "id1SmallSlider4",
                    isHover: "init",
                    path: "grovemade-DhZ5BpBeQEM-unsplash.png"
                },
                {
                    id: 5,
                    key: "id1SmallSlider5",
                    isHover: "init",
                    path: "lee-campbell-gA-km82BywY-unsplash.png"
                },
                {
                    id: 6,
                    key: "id1SmallSlider6",
                    isHover: "init",
                    path: "workperch-AiOzVFqlyZI-unsplash.png"
                }
            ]
        },
        {
            id: 2,
            header: "Small slider - Fashion",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit.",
            category: "Lifestyle",
            date: "08.20.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id2SmallSlider1",
                    isHover: "init",
                    path: "fallon-michael-_lKsxGjOzk8-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id2SmallSlider2",
                    isHover: "init",
                    path: "gaelle-marcel-yO9ZVNFbpao-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id2SmallSlider3",
                    isHover: "init",
                    path: "jane-palash-iaofnd2IdFU-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id2SmallSlider4",
                    isHover: "init",
                    path: "kara-eads-gVUV7PbSu_0-updated-unsplash.png"
                },
                {
                    id: 5,
                    key: "id2SmallSlider5",
                    isHover: "init",
                    path: "siora-photography-G8RdOUjVuJo-updated-unsplash.png"
                }
            ]
        },
        {
            id: 3,
            header: "Small slider - Fashion",
            text: "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit.",
            category: "Lifestyle",
            date: "08.20.2020",
            tags: [
                {
                    id: 1,
                    label: "Creative",
                    isHover: "init"
                }
            ],
            imagesArray: [
                {
                    id: 1,
                    key: "id3SmallSlider1",
                    isHover: "init",
                    path: "meghan-schiereck--2eJaLtf_bI-updated-unsplash.png"
                },
                {
                    id: 2,
                    key: "id3SmallSlider2",
                    isHover: "init",
                    path: "glenn-carstens-peters-RLw-UC03Gwc-updated-unsplash.png"
                },
                {
                    id: 3,
                    key: "id3SmallSlider3",
                    isHover: "init",
                    path: "marci-angeles-H_pOAqtNVEg-updated-unsplash.png"
                },
                {
                    id: 4,
                    key: "id3SmallSlider4",
                    isHover: "init",
                    path: "marci-angeles-sDmLk4Mf0hQ-updated-unsplash.png"
                }
            ]
        }
    ]

    let smallSliderObj = smallSlider.find(item => item.id === id);
    if(!smallSliderObj) {
        res.status(404).send("The portfolio with the given ID was not found")
    }else{
        res.json(smallSliderObj);  
    }
});

app.get('/api/portfolio-gallery-page', (req, res) => {
    const portfolioGallery = [
        {
            id: 1,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Images",
            path: "portfolio-item/small-images/1",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 2,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Big Slider",
            path: "portfolio-item/big-slider/1",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 3,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Gallery",
            path: "portfolio-item/gallery/1",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 4,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Gallery",
            path: "portfolio-item/small-gallery/1",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 5,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Big Images",
            path: "portfolio-item/big-images/1",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 6,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Slider",
            path: "portfolio-item/small-slider/1",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 7,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Slider",
            path: "portfolio-item/small-slider/2",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 8,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Gallery",
            path: "portfolio-item/gallery/2",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 9,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Gallery",
            path: "portfolio-item/small-gallery/2",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 10,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Images",
            path: "portfolio-item/small-images/2",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 11,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Big Slider",
            path: "portfolio-item/big-slider/2",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 12,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Big Images",
            path: "portfolio-item/big-images/2",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 13,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "gallery",
            path: "portfolio-item/gallery/3",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 14,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Slider",
            path: "portfolio-item/small-slider/3",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 15,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Gallery",
            path: "portfolio-item/small-gallery/3",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 16,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Images",
            path: "portfolio-item/small-images/3",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 17,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Big Slider",
            path: "portfolio-item/big-slider/3",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
        {
            id: 18,
            key: "",
            option: "colorful",
            type: "Graphic Design",
            portfolioType: "Small Images",
            path: "portfolio-item/small-images/4",
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.png",
                    alt: "image"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.png",
                    alt: "image"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.png",
                    alt: "image"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.png",
                    alt: "image"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.png",
                    alt: "image"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.png",
                    alt: "image"
                }
            ]
        },
    ]
    res.json(portfolioGallery);
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

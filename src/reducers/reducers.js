import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import cryptoPortfolioReducer from './cryptoPortfolioReducer';
import headerImagesReducer from './headerImagesReducer';
import section1Reducer from './section1Reducer';
import section2Reducer from './section2Reducer';
import section3Reducer from './section3Reducer';
import section4Reducer from './section4Reducer';
import smallImagesPortfolioReducer from './smallImagesPortfolioReducer';
import bigSliderPortfolioReducer from './bigSliderPortfolioReducer';
import bigImagesPortfolioReducer from './bigImagesPortfolioReducer';
import smallGalleryPortfolioReducer from './smallGalleryPortfolioReducer';
import galleryPortfolioReducer from './galleryPortfolioReducer';
import smallSliderPortfolioReducer from './smallSliderPortfolioReducer';
import portfolioGalleryPageReducer from './portfolioGalleryPageReducer';
import archiveReducer from './archiveReducer';
import switchImagePageReducer from './switchImagePageReducer';
import simpleOverlayPageReducer from './simpleOverlayPageReducer';
import slideFromImageLeftPageReducer from './slideFromImageLeftPageReducer';
import overlayPageReducer from './overlayPageReducer';
import overlayWithInfoPageReducer from './overlayWithInfoPageReducer';
import standardPageReducer from './standardPageReducer';
import galleryPageReducer from './galleryPageReducer';
import galleryWithSpacePageReducer from './galleryWithSpacePageReducer';
import stoneWallPageReducer from './stoneWallPageReducer';
import stoneWallWidePageReducer from './stoneWallWidePageReducer';
import metroPageReducer from './metroPageReducer';
import pinterest3ColumnsPageReducer from './pinterest3ColumnsPageReduser';
import twoColumnsWidePageReducer from './twoColumnsWidePageReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    home: cryptoPortfolioReducer,
    headerImages: headerImagesReducer,
    section1: section1Reducer,
    section2: section2Reducer,
    section3: section3Reducer,
    section4: section4Reducer,
    smallImagesPortfolio: smallImagesPortfolioReducer,
    bigSliderPortfolio: bigSliderPortfolioReducer,
    bigImagesPortfolio: bigImagesPortfolioReducer,
    smallGalleryPortfolio: smallGalleryPortfolioReducer,
    galleryPortfolio: galleryPortfolioReducer,
    smallSliderPortfolio: smallSliderPortfolioReducer,
    portfolioGalleryPage: portfolioGalleryPageReducer,
    archive: archiveReducer,
    switchImagePage: switchImagePageReducer,
    simpleOverlayPage: simpleOverlayPageReducer,
    slideFromImageLeftPage: slideFromImageLeftPageReducer,
    overlayPage: overlayPageReducer,
    overlayWithInfoPage: overlayWithInfoPageReducer,
    standardPage: standardPageReducer,
    galleryPage: galleryPageReducer,
    galleryWithSpacePage: galleryWithSpacePageReducer,
    stoneWallPage: stoneWallPageReducer,
    stoneWallWidePage: stoneWallWidePageReducer,
    metroPage: metroPageReducer,
    pinterest3ColumnsPage: pinterest3ColumnsPageReducer,
    twoColumnsWidePage: twoColumnsWidePageReducer
});

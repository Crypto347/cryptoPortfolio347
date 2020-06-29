import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import cryptoPortfolioReducer from './cryptoPortfolioReducer';
import headerImagesReducer from './headerImagesReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    home: cryptoPortfolioReducer,
    headerImages: headerImagesReducer
});

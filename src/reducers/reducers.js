import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import cryptoPortfolioReducer from './cryptoPortfolioReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    home: cryptoPortfolioReducer
});

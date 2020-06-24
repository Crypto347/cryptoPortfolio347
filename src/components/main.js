/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    Route,
    Switch
} from 'react-router-dom';

/**
* Styles
*/

import './main.scss';

/**
* Components
*/

import Toolbar from './Parts/Toolbar/toolbar';
import Sidebar from './Parts/Sidebar/sidebar';
import Home from './Pages/Home/home';
// import AboutUs from './Pages/AboutUs/aboutUs';
// import FoodAndDrink from './Pages/FoodAndDrink/foodAndDrink';
// import OurStory from './Pages/OurStory/ourStory';
// import Locations from './Pages/Locations/locations';
// import Contact from './Pages/Contact/contact';
// import SingleStory from './Pages/SingleStory/singleStory';
// import Archieve from './Pages/Archieve/archieve';
// import Category from './Pages/Category/category';

/**
* Actions
*/

import * as Actions from '../actions';

/**
* Selectors
*/

import * as Selectors from '../reducers/selectors';

/**
* Constants
*/

import {
    storiesArray
} from '../constants/storiesArray';

/**
* Main component definition and export
*/

export const Main = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        // let path = props.location.pathname.slice(13);
    
    }, [])

    /**
    * Markup
    */

    return(
        <div className={props.gallery.show ? "main-scrolling-hidden" : "main"}>
            {/* <Toolbar/> */}
            {/* <Sidebar/> */}
            <Switch>
                {/* <Route 
                    exact 
                    path={props.match.url + "/category/specials"}
                    component={Category}
                />
                <Route 
                    exact 
                    path={props.match.url + "/million-visits"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/new-york-opening"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/contact"}
                    component={Contact}
                />
                <Route 
                    exact 
                    path={props.match.url + "/locations"}
                    component={Locations}
                />
                <Route 
                    exact 
                    path={props.match.url + "/our-story"}
                    component={OurStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/food-and-drink"}
                    component={FoodAndDrink}
                />
                <Route 
                    exact 
                    path={props.match.url + "/about-us"}
                    component={AboutUs}
                /> */}
                <Route 
                    exact 
                    path={props.match.url + ""}
                    component={Home}
                />
            </Switch>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            gallery: Selectors.getGalleryState(state)
        };
    },
    (dispatch) => {
        return {
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            initSingleStory: bindActionCreators(Actions.initSingleStory, dispatch),
            startInitArchieves: bindActionCreators(Actions.startInitArchieves, dispatch),
            startInitCategories: bindActionCreators(Actions.startInitCategories, dispatch),
            startInitRecentPosts: bindActionCreators(Actions.startInitRecentPosts, dispatch)
        };
    }
)(Main);
 
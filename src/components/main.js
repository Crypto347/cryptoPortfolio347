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
import Home from './Pages/HomePages/Home/home';
import AboutUsPage from './Pages/AboutUsPage/aboutUsPage';
import ProcessPage from './Pages/ProcessPage/processPage';
import HappyTeamPage from './Pages/HappyTeamPage/happyTeamPage';
import SmallImages from './Pages/PortfolioPages/SmallImages/smallImages';
import BigSlider from './Pages/PortfolioPages/BigSlider/bigSlider';
import BigImages from './Pages/PortfolioPages/BigImages/bigImages';
import SmallGallery from './Pages/PortfolioPages/SmallGallery/smallGallery';
import Gallery from './Pages/PortfolioPages/Gallery/gallery';
import SmallSlider from './Pages/PortfolioPages/SmallSLider/smallSlider';
import PortfolioGallery from './Pages/HomePages/PortfolioGallery/portfolioGallery';
import Archieve from './Pages/Archieve/archieve';
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
* Utilities
*/

import * as Utility from '../utility';

/**
* Main component definition and export
*/

export const Main = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        let path = props.location.pathname.slice(18);
        let pathOfIds = Utility.findPathOfIds(path);
        props.clearActivityOfMenuItems();
        props.activateMenuItem(pathOfIds);
        props.history.listen((location, action) => {
            path = location.pathname.slice(18);
            pathOfIds = Utility.findPathOfIds(path);
            props.clearActivityOfMenuItems();
            props.activateMenuItem(pathOfIds);
            props.photoViewerOpen("all", false, []);
        });
    }, []);

    /**
    * Markup
    */

    return(
        <div className={props.unmountComponent.state ? "main-unmount" : "main"}>
            {/* <Toolbar/> */}
            {/* <Sidebar/> */}
            <Switch>
            <Route 
                    exact 
                    path={props.match.url + "/portfolio-category/:category"}
                    render={(props) => (
                        <Archieve key={props.match.params.category} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-gallery"}
                    // render={(props) => (
                    //     <PortfolioGallery key={props.match.params.id} {...props} />)
                    // }
                    component={PortfolioGallery}
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-slider/:id"}
                    render={(props) => (
                        <SmallSlider key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/gallery/:id"}
                    render={(props) => (
                        <Gallery key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-gallery/:id"}
                    render={(props) => (
                        <SmallGallery key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/big-images/:id"}
                    render={(props) => (
                        <BigImages key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/big-slider/:id"}
                    render={(props) => (
                        <BigSlider key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/portfolio-item/small-images/:id"}
                    render={(props) => (
                        <SmallImages key={props.match.params.id} {...props} />)
                    }
                />
                <Route 
                    exact 
                    path={props.match.url + "/happy-team"}
                    component={HappyTeamPage}
                />
                <Route 
                    exact 
                    path={props.match.url + "/process"}
                    component={ProcessPage}
                /> 
                <Route 
                    exact 
                    path={props.match.url + "/about-us"}
                    component={AboutUsPage}
                />
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
            unmountComponent: Selectors.getUnmountComponentState(state)
        };
    },
    (dispatch) => {
        return {
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            clearActivityOfMenuItems: bindActionCreators(Actions.clearActivityOfMenuItems, dispatch),
            photoViewerOpen: bindActionCreators(Actions.photoViewerOpen, dispatch),
            // startInitCategories: bindActionCreators(Actions.startInitCategories, dispatch),
            // startInitRecentPosts: bindActionCreators(Actions.startInitRecentPosts, dispatch)
        };
    }
)(Main);
 
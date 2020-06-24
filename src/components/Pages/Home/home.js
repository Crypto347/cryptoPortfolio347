/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

/**
* Styles
*/

import './home.scss';

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';

/**
* Images
*/

import Image1 from '../../../images/headerImages/annie-spratt-QckxruozjRg-unsplash.jpg';

/**
* Home component definition and export
*/

export const Home = () => {

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /**
    * Markup
    */

    return(
        <div className="home">
            <div className="home-main-background">
                <Toolbar/>
                <img src={Image1}/>
            
            </div>
        </div>
    );
}

export default Home;
 
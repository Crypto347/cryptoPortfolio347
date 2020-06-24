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

/**
* Images
*/

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
            
            </div>
        </div>
    );
}

export default Home;
 
/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

/**
* Styles
*/

import './aboutUsPage.scss';

/**
* AboutUsPage component definition and export
*/

export const AboutUsPage = () => {

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
        <div className="about-us-page">
            AboutUsPage
        </div>
    );
}

export default AboutUsPage;
 
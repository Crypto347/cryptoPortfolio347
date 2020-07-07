/**
* Libraries
*/

import React, {
    useEffect, useState
} from 'react';

/**
* Styles
*/

import './home.scss';

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import HeaderImages from '../../SmallParts/HeaderImages/headerImages';
import Section1 from '../../Parts/Section1/section1';

/**
* Images
*/

import Image1 from '../../../images/headerImages/annie-spratt-QckxruozjRg-unsplash.jpg';

/**
* Home component definition and export
*/

export const Home = () => {

    /**
    * State
    */

    const [scrollingUp, setScrollingUp] = useState(false)

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('wheel', (e) => checkScrollDirection(e));
        return () => window.removeEventListener('wheel', handleScroll)
    }, []);

    const checkScrollDirection = (e) => {
        if (checkScrollDirectionIsUp(e)) {
            setScrollingUp(true);
        } else {
            setScrollingUp(false);
        }
    }

    const checkScrollDirectionIsUp = (e)  => {
        if (e.wheelDelta) {
          return e.wheelDelta > 0;
        }
        return e.deltaY < 0;
    }

    /**
    * Markup
    */

    return(
        <div className="home">
            <div className="home-main-background">
                <div className="home-curtain"/>
                {scrollingUp ? <Toolbar className="toolbar-white"/> : null}
                <Toolbar/>
                <HeaderImages/>
                {/* <img src={Image1}/> */}
            </div>
            <Section1/>
        </div>
    );
}

export default Home;
 
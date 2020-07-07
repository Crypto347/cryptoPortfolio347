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
import Section2 from '../../Parts/Section2/section2';

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

    const [scrollingUp, setScrollingUp] = useState(false);
    const [scrollingHeight, setScrollingHeight] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('wheel', (e) => checkScrollDirection(e));

        return () => window.removeEventListener('wheel', (e) => checkScrollDirection(e))
    }, []);



    const checkScrollDirection = (e) => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("home");

        if(!checkScrollDirectionIsUp(e) || scrollHeight < el.offsetTop + 150){
            setScrollingUp(false);
        }else{
            setScrollingUp(true);
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
        <div className="home" id="home">
            <div className="home-main-background">
                <div className="home-curtain"/>
                <Toolbar toolbarMainColor="white" scrollingUp={scrollingUp}/>
                <Toolbar toolbarMainColor="regular"/>
                <HeaderImages/>
                {/* <img src={Image1}/> */}
            </div>
            <Section1/>
            <Section2/>
        </div>
    );
}

export default Home;
 
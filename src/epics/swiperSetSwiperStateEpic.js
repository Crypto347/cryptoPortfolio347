/**
 * Operators
 */

import { 
    of,
    empty 
} from 'rxjs';

import { 
    mergeMap
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
 * Constants
 */

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
 * Utility
 */

import * as Utility from '../utility';

/**
 * Epic
 */

export const swiperSetSwiperStateEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.SWIPER_SET_SWIPER_STATE_START),
        mergeMap(action => {
            let _slides = [];
            switch(action.component){
                case 'clientsPageSection1Swiper1':
                    _slides = Utility.updateSlidesFor5SlidesPerSwiper(state$.value.clientsPage.section1Data.swiper1.swiper.slides, state$.value.clientsPage.section1Data.swiper1.swiper.activeIndex)
                    return of(
                        Actions.setSwiperStateForClientsPageSection1Swiper1(
                            state$.value.clientsPage.section1Data.swiper1.items, 
                            _slides, 
                            state$.value.clientsPage.section1Data.swiper1.swiper.activeIndex, 
                            state$.value.clientsPage.section1Data.swiper1.swiper.translate, 
                            state$.value.clientsPage.section1Data.swiper1.swiper.transition, 
                            true
                        )
                    )
                case 'clientsPageSection1Swiper2':
                    _slides = Utility.updateSlidesFor5SlidesPerSwiper(state$.value.clientsPage.section1Data.swiper2.swiper.slides, state$.value.clientsPage.section1Data.swiper2.swiper.activeIndex)
                    return of(
                        Actions.setSwiperStateForClientsPageSection1Swiper2(
                            state$.value.clientsPage.section1Data.swiper2.items,
                            _slides, 
                            state$.value.clientsPage.section1Data.swiper2.swiper.activeIndex, 
                            state$.value.clientsPage.section1Data.swiper2.swiper.translate, 
                            state$.value.clientsPage.section1Data.swiper2.swiper.transition, 
                            true
                        )
                    )
                case 'clientsPageSection2Swiper1':
                    _slides = Utility.updateSlidesFor5SlidesPerSwiper(state$.value.clientsPage.section2Data.swiper1.swiper.slides, state$.value.clientsPage.section2Data.swiper1.swiper.activeIndex)
                    return of(
                        Actions.setSwiperStateForClientsPageSection2Swiper1(
                            state$.value.clientsPage.section2Data.swiper1.items, 
                            _slides, 
                            state$.value.clientsPage.section2Data.swiper1.swiper.activeIndex, 
                            state$.value.clientsPage.section2Data.swiper1.swiper.translate, 
                            state$.value.clientsPage.section2Data.swiper1.swiper.transition, 
                            true
                        )
                    )
                case 'clientsPageSection2Swiper2':
                    _slides = Utility.updateSlidesFor5SlidesPerSwiper(state$.value.clientsPage.section2Data.swiper2.swiper.slides, state$.value.clientsPage.section2Data.swiper2.swiper.activeIndex)
                    return of(
                        Actions.setSwiperStateForClientsPageSection2Swiper2(
                            state$.value.clientsPage.section2Data.swiper2.items, 
                            _slides, 
                            state$.value.clientsPage.section2Data.swiper2.swiper.activeIndex, 
                            state$.value.clientsPage.section2Data.swiper2.swiper.translate, 
                            state$.value.clientsPage.section2Data.swiper2.swiper.transition, 
                            true
                        )
                    )
                default: 
                    return empty();    
            }
        })
    )

export default swiperSetSwiperStateEpic;

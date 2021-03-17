import * as actionTypes from '../constants/actionTypes';

export function fetchBlogListStandardPageDataBegin() {
    return { 
        type: actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_BEGIN
    };
};

export function fetchBlogListStandardPageDataSuccess(array) {
    return { 
        type: actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_SUCCESS,
        array: array
    };
};

export function fetchBlogListStandardPageDataFailur(err) {
    return { 
        type: actionTypes.FETCH_BLOG_LIST_STANDARD_PAGE_DATA_FAILURE,
        err: err
    };
};

export function initInputFormForBlogListStandardPage(obj) {
    return { 
        type: actionTypes.INIT_INPUT_FORM_FOR_BLOG_LIST_STANDARD_PAGE,
        obj: obj
    };
};

export function activateListStandardBlogCategory(categoryIsActive, categoryName) {
    return { 
        type: actionTypes.ACTIVATE_LIST_STANDARD_BLOG_CATEGORY,
        categoryIsActive: categoryIsActive,
        categoryName: categoryName
    };
};

export function initCategoriesForBlogListStandardPage(array) {
    return { 
        type: actionTypes.INIT_CATEGORIES_FOR_BLOG_LISTS_STANDARD_PAGE,
        array: array
    };
};

export function initTagsForBlogListStandardPage(array) {
    return { 
        type: actionTypes.INIT_TAGS_FOR_BLOG_LISTS_STANDARD_PAGE,
        array: array
    };
};

export function blogListCardTagIsHoverForBlogListStandardPage(val, cardKey, tagKey) {
    return { 
        type: actionTypes.BLOG_LIST_CARD_TAG_IS_HOVER_FOR_BLOG_LIST_STANDARD_PAGE,
        val: val,
        cardKey: cardKey,
        tagKey: tagKey
    };
};

export function setSwiperStateForBlogListStandardPage(slides, _slides, activeIndex, translate, transition, rerender, cardKey) {
    return { 
        type: actionTypes.SET_SWIPER_STATE_FOR_BLOG_LIST_STANDARD_PAGE,
        slides: slides,
        _slides: _slides,
        activeIndex: activeIndex,
        translate: translate,
        transition: transition,
        rerender: rerender,
        cardKey: cardKey
    };
};

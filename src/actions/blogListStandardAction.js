import * as actionTypes from '../constants/actionTypes';

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

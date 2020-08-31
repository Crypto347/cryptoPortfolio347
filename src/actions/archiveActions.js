import * as actionTypes from '../constants/actionTypes';

export function fetchArchiveBegin() {
    return { 
        type: actionTypes.FETCH_ARCHIVE_BEGIN
    };
};

export function fetchArchiveSuccess(obj) {
    return { 
        type: actionTypes.FETCH_ARCHIVE_SUCCESS,
        obj: obj
    };
};

export function fetchArchiveFailur(err) {
    return { 
        type: actionTypes.FETCH_ARCHIVE_FAILURE,
        err: err
    };
};

export function setArchiveIsHoveringImage(val, id) {
    return { 
        type: actionTypes.SET_ARCHIVE_IS_HOVERING_IMAGE,
        val: val,
        id: id
    };
};

// export function setSmallGalleryIsHoveringCategory(val, id) {
//     return { 
//         type: actionTypes.SET_SMALL_GALLERY_IS_HOVERING_CATEGORY,
//         val: val,
//         id: id
//     };
// };

// export function setSmallGalleryIsHoveringTag(val, id) {
//     return { 
//         type: actionTypes.SET_SMALL_GALLERY_IS_HOVERING_TAG,
//         val: val,
//         id: id
//     };
// };



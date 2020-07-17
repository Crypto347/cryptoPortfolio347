import { 
    createSelector 
} from 'reselect';

const getMenuItems = (state) => state.home.menuItems;

export const getMenuItemsState = createSelector(
    [getMenuItems],
    (x) => x
);

const getHeaderImages = (state) => state.headerImages;

export const getHeaderImagesState = createSelector(
    [getHeaderImages],
    (x) => x
);

const getSection1Date = (state) => state.section1;

export const getSection1DateState = createSelector(
    [getSection1Date],
    (x) => x
);

const getPictureBoardItems = (state) => state.section2.pictureBoard;

export const getPictureBoardItemsState = createSelector(
    [getPictureBoardItems],
    (x) => x
);

const getOurProcessData = (state) => state.section2.ourProcess;

export const getOurProcessDataState = createSelector(
    [getOurProcessData],
    (x) => x
);

const getPhotoViewerForPictureBoardTextItemOpen = (state) => state.home.photoViewerForPictureBoardTextItemOpen;

export const getPhotoViewerForPictureBoardTextItemOpenState = createSelector(
    [getPhotoViewerForPictureBoardTextItemOpen],
    (x) => x
);

const getPhotoViewerImagesArray = (state) => state.home.photoViewerImagesArray;

export const getPhotoViewerImagesArrayState = createSelector(
    [getPhotoViewerImagesArray],
    (x) => x
);

const getTestimonials = (state) => state.section3.testimonials;

export const getTestimonialsState = createSelector(
    [getTestimonials],
    (x) => x
);

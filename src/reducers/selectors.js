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

const getSection1DateItems = (state) => state.section1.items;

export const getSection1DateItemsState = createSelector(
    [getSection1DateItems],
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

const getPhotoViewerForPictureBoardTextItem = (state) => state.home.photoViewerForPictureBoardTextItem;

export const getPhotoViewerForPictureBoardTextItemState = createSelector(
    [getPhotoViewerForPictureBoardTextItem],
    (x) => x
);



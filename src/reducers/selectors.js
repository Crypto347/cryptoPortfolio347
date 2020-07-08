import { 
    createSelector 
} from 'reselect';

const getMenuItems = (state) => state.home.menuItems;

export const getMenuItemsState = createSelector(
    [getMenuItems],
    (x) => x
);

const getHeaderImagesItems = (state) => state.headerImages.items;

export const getHeaderImagesItemsState = createSelector(
    [getHeaderImagesItems],
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



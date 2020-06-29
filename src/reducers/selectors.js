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

export const findPathOfIds = (path) => {
    let updatedPath = path.split("/");
    if(path === ""){
        return [1, 11, 111];
    }

    //First element of updatedPath array
    switch(updatedPath[0]){
        case 'portfolio-gallery':
            return [];
        case 'portfolio-category':
            return [];
        case 'overlay':
            return [2, 23, 231];
        case 'overlay-with-info':
            return [2, 23, 232];
        case 'simple-overlay':
            return [2, 23, 233];
        case 'slide-from-image-left':
            return [2, 23, 234];
        case 'switch-image':
            return [2, 23, 235];
        case 'portfolio-standard':
            return [2, 24, 241];
        case 'gallery':
            return [2, 24, 242]; 
        case 'gallery-with-space':
            return [2, 24, 243];
        case 'stone-wall':
            return [2, 24, 244];
        case 'stone-wall-wide':
            return [2, 24, 245];
    }

    //Second element of updatedPath array
    switch(updatedPath[1]){
        // case '':
        //     return [1, 11, 111];
        case 'big-images':
            return [2, 21, 213];
        case 'big-slider':
            return [2, 21, 214];
        case 'small-images':
            return [2, 21, 215];
        case 'small-slider':
            return [2, 21, 216];
        case 'gallery':
            return [2, 21, 217];
        case 'small-gallery':
            return [2, 21, 218];
    }

}

export const categoryPathToKey = (path) => {
    let category = path;
    let categoryToArray = category.split("");
    let indexOfSlash = categoryToArray.findIndex(item => item === "-");
    if(indexOfSlash !== -1){
        categoryToArray.splice(indexOfSlash, 1)
        let lowerToUpperCase = categoryToArray[indexOfSlash].toUpperCase();
        categoryToArray.splice(indexOfSlash, 1, lowerToUpperCase);
        category = categoryToArray.join("");
    }
    return category;
}

export const categoryKeyToPath = (key) => {
    let categoryToArray = key.split("");        
    let indexOfUpperCaseLetter;

    indexOfUpperCaseLetter = categoryToArray.map((item, i) => {
        if(item === item.toUpperCase()){
            return i;
        }else{
            return false;
        }
    })
    indexOfUpperCaseLetter = indexOfUpperCaseLetter.find(item => item !== false);
    if(indexOfUpperCaseLetter){
        categoryToArray.splice(indexOfUpperCaseLetter, 1, categoryToArray[indexOfUpperCaseLetter].toLowerCase());
        categoryToArray.splice(indexOfUpperCaseLetter, 0, "-");
    }
    return categoryToArray.join("");
}

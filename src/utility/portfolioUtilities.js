export const findPathOfIds = (path) => {
    let updatedPath = path.split("/");
    if(path === ""){
        return [1, 11, 111];
    }

    //Home items
    switch(updatedPath[0]){
        case 'portfolio-gallery':
            return [];       
    }

    //Portfolio items
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

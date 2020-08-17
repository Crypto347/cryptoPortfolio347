export const findPathOfIds = (path) => {
    let updatedPath = path.split("/");
    if(path === ""){
        return [1, 11, 111];
    }
  
    switch(updatedPath[1]){
        // case '':
        //     return [1, 11, 111];
        case 'big-images':
            return [2, 21, 213];
        case 'big-slider':
            return [2, 21, 214];
        case 'small-images':
            return [2, 21, 215];
       
    }
}

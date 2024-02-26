
import {getDataRecipes} from '../components/data/getDataRecipes';

export const getdatacategory = (category:string) => {
  
    return getDataRecipes.filter((data)=>data.category.includes(category));
    
}
export const getrecipe = (recipe:string) => {
  
    const data =  getDataRecipes.find((data)=>data.title === recipe);
    
    return data!
    
}


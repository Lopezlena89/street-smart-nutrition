import {getDataRecipes} from '../components/data/getDataRecipes';

export const getdatacategory = (category:string) => {
  
    return getDataRecipes.filter((data)=>data.category.includes(category));
    
}

import { useState } from "react";
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = ({nombre}) => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (category)=> {        
        if( categories.includes(category) ) return;
        setCategories([ category, ...categories]);                
    };
    
    return (
        <>            
            <h1> GifExpertApp</h1>            

            <AddCategory onNewCategory = { (value) => onAddCategory(value) }/>                        
            {                       
                categories.map( category => (
                    <GifGrid 
                        key={category} 
                        category={ category }/>
                )) 
            }                            
        </>
    )    
}
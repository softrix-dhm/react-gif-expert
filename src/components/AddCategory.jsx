import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

const [inputValue, setinputValue] = useState('One');

const onInputChange = ({target}) => {               
    setinputValue(target.value);        
}

const onSubmit = (event) => {
  event.preventDefault();    
  if( inputValue.trim().length <=1 ) return;

  // setCategories( (categories) => [inputValue, ...categories]);
  onNewCategory( inputValue.trim() );  
  setinputValue('');
}

  return (
    <form onSubmit = { onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gif"
            value = { inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

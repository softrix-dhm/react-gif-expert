import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category );    
    
    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && ( <h2>Cargando ...</h2> ) // Esta porcion de codigo &&( <h2> Cargando...</h2>) isLoading = true continua con el codigo 
        }


        <div className="card-grid">
            {
                images.map(( image ) => (
                    <GifItem 
                        key={image.id} 
                        { ...image } /> //{ ...image} => Envia todo el contenido del objeto
                ))
            }            
        </div>     
    </>
  )
}

import React from 'react';
import useSetOpenClick from './reutilizavel';


function Other(){
    const isOpen = useSetOpenClick(false)
    return(
        <div>
            <p>{isOpen? 'Aberto':'Fechado'}</p>
        </div>
    )
}
export default Other;
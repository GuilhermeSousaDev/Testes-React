import React,{useState,useEffect} from 'react';

function Loading(){
    useEffect(() => {
        setTimeout(() => setLoading(() => 'carregando.'),500)
        setTimeout(() => setLoading(() => 'carregando..'),1000)
        setTimeout(() => setLoading(() => 'carregando...'),3000)
    })  
    const [loading,setLoading] = useState('carregando')
    return(
        <>
        <h3>{loading}</h3>
        </>
    )
}

export default Loading
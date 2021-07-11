import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function Gitapi(){
    const [data,setData] = useState([])
    const [query,setQuery] = useState('')
    useEffect(async () => {
        const request = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${query}&itens=40&ordem=DESC&ordenarPor=nome`)
        const response = await request.json()
        await setTimeout(() => setData(response.dados),1000)
    },[query])
    if(!data.length) {
        return <p>Carregando...</p>
    }
    return(
        <div>
           <input type="text" onChange={e => setQuery(e.target.value)}/>
           {data && data.map(list => 
           <ul style={{listStyleType:'none'}}>
               <li>
                <h1>{list.nome}</h1>
                <img src={list.urlFoto}/>     
               </li>
               <button><Link to={`deputado/${list.id}`}>Ver</Link></button>
            </ul>)}
        </div>
    )
}

export default Gitapi;
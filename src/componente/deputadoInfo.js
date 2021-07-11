import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function DeputadoInfo() {
    const {id} = useParams();
    const [data,setData] = useState([])
    useEffect(async () => {
        const request = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`)
        const response = await request.json()
        await setData(response.dados)
        for(let i in data) {
            setData(data[i])        
        }
    },[id])
    return(
        <div>
           <h1>{data.nomeCivil}</h1>
           <p>Cpf: {data.cpf}</p>
           <p>Sexo: {data.sexo}</p>
           <p>Site: {data.urlWebsite}</p>
           <p>Nascimento: {data.dataNascimento}</p>
           <p>Rede Social: {data.redeSocial}</p>
           <p>UFNascimento: {data.ufNascimento}</p>
           <p>Municipio Nascimento: {data.municipioNascimento}</p>
           <p>Escolaridade: {data.escolaridade}</p>
           
        </div>
    )
}

export default DeputadoInfo;
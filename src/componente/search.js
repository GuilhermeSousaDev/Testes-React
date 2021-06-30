import React,{useEffect,useState} from 'react';
import Loading from './loading'

function Search(){
    const [data,setData] = useState([])
    const [query,setQuery] = useState('')
    useEffect(async () => {
        const request = await fetch('https://hn.algolia.com/api/v1/search?query=' + query)
        const response = await request.json()
        await setTimeout(() => setData(response.hits),2000)
    },[query])
    return(
        <div>
            <input type='text' onChange={e => setQuery(e.target.value)}/>
            <ul style={{listStyleType:'none'}}>
               {data.length? 
                  data.map(list => <li style={{padding:'20px'}} key={list.id}>
                    <a href={list.url} target="_blank">{list.title}</a>
                    <br/>
                    <i>Autor: <strong>{list.author}</strong></i>
                 </li>) : <Loading/>
               }
            </ul>
        </div>
    )
}

export default Search;
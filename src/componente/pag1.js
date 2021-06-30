import React,{useState,useContext} from 'react';
import {themeContext} from './context';

function Pag(){
    const [Name, setName] = useState({
        name1: 'Joao',
        name2: 'Pedro'
    })
    const [count, setCount] = useState(0)
    const {background,color} = useContext(themeContext)
    return(
        <div className="hooks" style={{background:background,color:color}}>
            <p>My Name: {Name.name1}</p>
            <p>My Name: {Name.name2}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count -1)}>-</button>
            <button onClick={() => setName(prevState => {
                return{...prevState, name1: 'Joaquim'}
            })}>Alterar</button>
            <button onClick={() => setName(prev => {
                return{...prev,name2: 'Kaio'}
            })}>Outro Name</button>
        </div>
    )
}

export default Pag;

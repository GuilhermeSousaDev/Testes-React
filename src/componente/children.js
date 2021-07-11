import React,{useContext, useReducer, useState} from 'react';
import {themeContext} from './context';

function Children(){
   const reducer = (state,action) => {
      switch(action.type){
        case 'increment':
          return {count: state.count + 1}
          case 'decrement':
            return {count: state.count -1}
            case 'reset':
              return {count: 0}
              default:
              throw new Error()
      }
    }
    const [state,dispatch] = useReducer(reducer,{count:0})
    const {light,dark} = useContext(themeContext)
    return(  
        <div style={{background:light.background,color:light.color,padding:'20px'}}>
          <h1> Children dentro do Home</h1>  
          <p>Paragrafo Ilustrativo</p>
        <button onClick={() => dispatch({type:'increment'})}>Mais</button>
        <button onClick={() => dispatch({type:'decrement'})}>Menos</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
          <p>{state.count}</p>
        </div>
    )
}
export default Children;
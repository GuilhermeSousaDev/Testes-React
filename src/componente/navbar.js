import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'  


export default function Navbar(){
   const [show,setShow] = useState(false)
    const mostrarPags = () => {
        show? setShow(false) : setShow(true)
    }
        return(
            <nav>
               <NavLink to="/" exact activeStyle={{color: '#000',background: '#fff'}}><h1>Page Test</h1> </NavLink>
                <div>
                <NavLink to="/" exact activeStyle={{color: '#000',background: '#fff'}}>Home</NavLink>
                <NavLink to="/servicos" exact activeStyle={{color: '#000',background: '#fff'}}>Servicos</NavLink>
                <NavLink to ="/navigation" exact activeStyle={{color: '#000',background: '#fff'}}>Navigation</NavLink>
                <NavLink to="/child" exact activeStyle={{color: '#000',background: '#fff'}}>Child</NavLink>
                <NavLink to="/contact" exact activeStyle={{color: '#000',background: '#fff'}}>Contato</NavLink>
                <NavLink to="/other" exact activeStyle={{color: '#000',background: '#fff'}}>Other</NavLink>
                <NavLink to="/search" exact activeStyle={{color:'#000',background:'#fff'}}>Search</NavLink>
                <div className="pags" onClick={mostrarPags}>Paginas
                        {show? 
                        <div className="links-show">
                        <NavLink to="/pag1">Pag 1</NavLink>
                        <NavLink to="/pag2">Pag2</NavLink>
                        <NavLink to="/deputados">Deputados</NavLink>
                        </div> : ''}  
                </div>
                </div>
            </nav>
        )
}
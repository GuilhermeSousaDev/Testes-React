import React,{Component} from 'react';
import  {NavLink} from 'react-router-dom'  


export default class Navbar extends Component{
    constructor(){
        super()
        this.state = {
            show: false
        }
    }
    mostrarPags = () => {
        this.state.show? 
        this.setState({show:false}):
         this.setState({show: true})
    }
    render(){
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
                <div className="pags" onClick={this.mostrarPags}>Paginas
                    <article>
                        {this.state.show? <NavLink to="/pag1">Pag 1</NavLink>: ''}
                        {this.state.show? <NavLink to="/pag2">Pag2</NavLink>: ''}
                    </article>
                </div>
                </div>
            </nav>
        )
    }
}
import React,{useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Child from './componente/Child'
import Navbar from './componente/navbar'
import Navigation from './componente/navigation'
import Servicos from './componente/Servicos'
import Home from './componente/home'
import Other from './componente/other'
import Contact from './componente/contact'
import Pag from './componente/pag1' 
import Pag2 from './componente/pag2'
import Children from './componente/children' 
import Search from './componente/search'
import Gitapi from './componente/gitapi'
import {themeContext} from './componente/context'
import DeputadoInfo from './componente/deputadoInfo';

export default function App(){
  const {light,dark} = useContext(themeContext)
  return (   
    <themeContext.Provider value={{light,dark}}>
    <Router>
     <Navbar/>
    <div className="App"> 
    <Switch>
      <Route exact path="/">
        <Home>
          <Children/>
        </Home>
      </Route>
      <Route path="/child"><Child /></Route>
      <Route path="/navigation"><Navigation /></Route>
      <Route path="/servicos"><Servicos /></Route>
      <Route path="/other"><Other /></Route> 
      <Route path="/contact"><Contact /></Route>
      <Route path="/pag1"><Pag /></Route>   
      <Route path="/pag2"><Pag2/></Route>
      <Route path="/search"><Search /></Route>
      <Route path="/deputados"><Gitapi/></Route>
      <Route path="/deputado/:id"><DeputadoInfo/></Route>
      </Switch> 
     </div>
     </Router>
     </themeContext.Provider>
  )
}

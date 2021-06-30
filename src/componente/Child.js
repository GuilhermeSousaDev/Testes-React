import React from 'react';

class Child extends React.Component{
    constructor(){
        super()
        this.state = {
          valor: 1,
          items: '',
          show: true,
        }
    }
    fechar = () => {
        this.state.show?
        this.setState({show:false}):
        this.setState({show: true})
    }
    diminuir = () => {
        this.setState({valor: this.state.valor -1 })
    }
    metodo = () => {
        this.setState({valor: this.state.valor + 1})
    }
    render(){
        return(
                this.state.show?
                <div>
                <button onClick={this.fechar}>X</button>
                <div className="App">
                <h1>React App</h1>
                <p>{this.state.valor}</p>
                <button onClick={this.metodo}>Click</button>
                <button onClick={this.diminuir}>Diminuir</button>
                </div>
                </div>: <button onClick={this.fechar}>X</button>
        )
    }
}


export default Child;
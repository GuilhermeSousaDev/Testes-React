import React from 'react';

class Pag2 extends React.Component{
    constructor(){
        super()
        this.state = {
            src: ''
        }
        this.myRef = React.createRef()
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({src: this.myRef.current.files[0].name})
    }
    render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <input type="file" ref={this.myRef}/>
            <button type="submit">Submit</button>
            <img src={this.state.src}/>
        </form>
    )
    }
}

export default Pag2;
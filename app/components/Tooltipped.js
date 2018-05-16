import React from 'react'

// controlled component used to submit entered text to state (once the form is submitted).  
 

class Tooltipped extends React.Component{
  constructor(){
    super()
    this.state={
      input: '',  
      text: '',
      moused: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  handleSubmit(e){
    e.preventDefault() 
    this.setState({
      text: this.state.input  
    })
  }
  handleChange(e){
    this.setState({
      input: e.target.value 
    }) 
  }
  handleMouseOver(e){
    console.log(this.state)
    this.setState({
      moused: true  
    })
  }
  handleMouseLeave(e){
    this.setState({
      moused: false 
    }) 
  }
  render(){
    return(
      <div>
        <Form 
          onSubmit={this.handleSubmit} 
          onChange={this.handleChange}
        />
        {this.state.text !== '' &&
          <h3 id='hoverDiv' onMouseLeave={this.handleMouseLeave} onMouseOver={this.handleMouseOver}>hover over me</h3>
        }
        {this.state.moused === true && 
          <div>{this.state.text}</div>
        }
      </div>
    ) 
  }
}

const Form = (props) =>{
  return(
    <form onSubmit={props.onSubmit}>
      <input id='textValue' onChange={props.onChange} placeholder='Enter text to tooltiperize' type='text'></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

module.exports = Tooltipped

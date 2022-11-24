import React, { Component } from 'react'

 class App extends Component {

state={
  name:"",
  email:"",
  password:"",
  isChecked:false,
  type:"password"

}

input=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

handleClick = () => this.setState({ name: "" });
handle = () => this.setState({ email: "" });
click = () => this.setState({ password: "" });
  render() {

    console.log(this.state)
    return (
      <div className='div'>

       <div >
        <label htmlFor='name'>Name</label> <br></br>
        <input value={this.state.name} type="text" id="name" name="name" onChange={this.input} />
        <button onClick={this.handleClick}>x</button>
        </div>
<br></br>
        <div>
        <label htmlFor='email'>Email</label><br></br>
        <input value={this.state.email} type="text" id="email" name="email" onChange={this.input} />
        <button onClick={this.handle}>x</button>
        </div>
<br></br>
        <div>
        <label htmlFor='password'>Password</label><br></br>
        <input value={this.state.password} type={this.state.type} id="password" name="password" onChange={this.input} />
      <button onClick={this.click}>x</button>

      
      </div>
      <div className='checkbox'>
   <input  type="checkbox" checked={this.state.isChecked} onChange={()=>this.setState({isChecked: !this.state.isChecked, type:this.state.type==="text"?"password":"text"})}/>
  </div>
      </div>
    )
  }
}
export default App


import React, {Component} from 'react'
import {Jumbotron, Button} from "react-bootstrap";
import Stream from './stream'
import {Login, Signup} from './auth-form'

export class Demo extends Component {
  constructor() {
    super()
    this.state = {
      login: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    this.setState({
      [e]: true
    })
  }

  render() {
    return (
        <div>
          <Jumbotron>
              <h1 id='welcome' className='page-header'><small> welcome:  </small> gamer </h1>
              <h3 id='welcome_sub_header' className='page-header'>login/signup to view Twitch dash</h3>
              <div className="text-center">
                      <Button href="" className='btn btn-primary' variant="primary" onClick={() => this.handleSubmit('login')}>Login</Button>
              </div>
              <hr/>
              <div className="text-center">
                      <Button href="" className='btn btn-primary' variant="primary" onClick={() => this.handleSubmit('signup')}>Signup</Button>
              </div>
              {!this.state.login ? null : <Login />}
              {!this.state.signup ? null : <Signup />}
          </Jumbotron>
        </div>
    )
  }
}

export default Demo
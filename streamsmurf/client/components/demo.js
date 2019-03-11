import React, {Component} from 'react'
import {Jumbotron, Button} from "react-bootstrap";
import Stream from './stream'

export class Demo extends Component {
 
  render() {
    return (
        <div>
          <Jumbotron>
              <h1 id='welcome' className='page-header'><small> welcome:  </small> gamer </h1>
              <div className="text-center">
                      <Button className='btn btn-primary' variant="primary">Login to view Twitch dash</Button>
              </div>
          </Jumbotron>
        </div>
    )
  }
}

export default Demo
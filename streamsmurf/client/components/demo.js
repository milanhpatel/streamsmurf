import React, {Component} from 'react'

export class Demo extends Component {
  render() {
    return (
      <div>
        <h3 id='welcome' class='page-header'><small> welcome:  </small> gamer. </h3>
        <div class="embed-responsive embed-responsive-4by3">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=5GcQtLDGXy8&t=1667s" />
        </div>
        <hr/>
      </div>
    )
  }
}

export default Demo
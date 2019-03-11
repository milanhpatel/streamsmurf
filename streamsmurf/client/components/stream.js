import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUrl, fetchStreamers, fetchChannel, fetchUser} from '../store/stream'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'


export class Stream extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick() {
    this.props.loadChannel()
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // const userName = e.target.userName.value;
    this.props.loadStreamers()
  }

  render() {
    const streamers = this.props.streamers[0]

    return (
      <div>
        <button type="button" onClick={this.handleClick}>
            Get Streamers
        </button>

        <form id="update-user-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Twitch user name: </label>
          <input
            className="form-control"
            name="userName"
            type="text"
          />
          <span className="input-group-btn">
            <button className="btn-default" type="submit">
              Submit
            </button>
          </span>
        </form>

        {this.props.streamers.length < 1 ? null : 
        <div className="container">
          <h1>{this.props.streamChannel}</h1>
          <ul>{this.props.streamers.map((streamer) => {
            return (
              <div key={streamer.id}>
                <li>{streamer.game}</li>
                <p>{streamer.channel.name}</p>
              </div>
            )
          })}</ul>
          <div className='row'>
              <div className="col-md-4">
                <ReactTwitchEmbedVideo channel="tfue" theme="dark" muted={1}/>
              </div>
              <div className="col-md-4">
                <ReactTwitchEmbedVideo channel={this.props.streamChannel} theme="dark" muted={1}/>
              </div> 
            </div>
      </div>}
    </div>
    ) 
  }
}

const mapStateToProps = state => ({
  streamers: state.stream.streamers,
  streamUrl: state.stream.streamUrl,
  streamChannel: state.stream.streamChannel
})

const mapDispatchToProps = dispatch => ({
  loadStreamers: () => dispatch(fetchStreamers()),
  loadUrl: () => dispatch(fetchUrl()),
  loadChannel: () => dispatch(fetchChannel()),
  loadUser: (userName) => dispatch(fetchUser(userName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stream)
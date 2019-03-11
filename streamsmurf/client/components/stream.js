import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUrl, fetchStreamers, fetchChannel} from '../store/stream'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'


export class Stream extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.loadChannel()
  }

  render() {
    return (
      <div>
      <button type="button" onClick={this.handleSubmit}>
            Get Streamers
        </button>
        {this.props.streamChannel.length < 1 ? null : 
        <div className="container">
        <h1>{this.props.streamChannel}</h1>
        <div className='row'>
            <div className="col-md-4">
              <ReactTwitchEmbedVideo channel="tobiasfate" theme="dark" muted={1}/>
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
  loadChannel: () => dispatch(fetchChannel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stream)
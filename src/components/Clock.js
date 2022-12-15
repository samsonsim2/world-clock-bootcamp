import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date() }
  }

  tick() {
    this.setState({
      time: new Date(),
    })
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentDidUpdate() {
    console.log('Ticked')
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  render() {
    const { timeZone } = this.props
    console.log(timeZone)
    return (
      <div>
        <h1>
          {timeZone}:
          {this.state.time.toLocaleString('en-GB', { timeZone: timeZone })}
        </h1>
      </div>
    )
  }
}

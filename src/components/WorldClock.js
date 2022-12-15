import React from 'react'
import Clock from './Clock'

export default class WorldClock extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { clockData } = this.props
    console.log(clockData)
    return (
      <div className='dates'>
        {clockData.map((data, id) => {
          return <Clock key={id} timeZone={data} />
        })}
      </div>
    )
  }
}

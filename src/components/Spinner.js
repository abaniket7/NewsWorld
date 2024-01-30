import React, { Component } from 'react'
import loadings from './loadings.gif'
export class Loadings extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loadings} alt="loadings" />
      </div>
    )
  }
}

export default Loadings

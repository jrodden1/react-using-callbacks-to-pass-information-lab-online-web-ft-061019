import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FF0'
    }
  }

  setSelectedColor = (event) => {
    const newColor = event.target.style.backgroundColor
    this.setState({
      selectedColor: newColor
    })
  }

  getSelectedColor = () => {
    return this.state.selectedColor 
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.getSelectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}

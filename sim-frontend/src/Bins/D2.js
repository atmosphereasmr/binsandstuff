import "../App.css"
import React, { Component } from "react"

import Contents from './Contents'

export default class D2 extends Component {
  constructor (props) {
  super(props)

  this.state = {
    content: [],
    name: '',
    price: ''
  }
}
  render() {
    return (
      <div>
      <Contents title="Bin D-2" imgurl={require('../Images/pancakes.jpg')}
      name={this.state.name} price={"$" + this.state.price} path='/shelves/D'/>
      </div>
    )
  }
}

import "../App.css"
import React, { Component } from "react"
import axios from 'axios'

import Contents from './Contents'

export default class A1 extends Component {
  constructor (props) {
  super(props)

  this.state = {
    content: [],
    name: '',
    price: ''
  }
}

componentDidMount () {
  axios.get('http://localhost:3001/api/content')
  .then(response => {
    this.setState({ content: response.data, name: response.data[0].name, price: response.data[0].price })
      console.log(response.data)
  })
}
  render() {
    return (
      <div>
        <Contents title="Bin A-1" imgurl={require('../Images/pancakes.jpg')}
        name={this.state.name} price={"$" + this.state.price} path='/shelves/A'/>
      </div>
    )
  }
}

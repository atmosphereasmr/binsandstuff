import "../App.css"
import React, { Component } from "react"
import axios from 'axios'

import Contents from './Contents'

export default class A4 extends Component {
  constructor (props) {
  super(props)

  this.state = {
    content: [],
    name: '',
    price: '',
    id: ''
  }
}

componentDidMount () {
  axios.get('http://localhost:3001/api/content')
  .then(response => {
    this.setState({ content: response.data, name: response.data[4].name, price: response.data[4].price })
      console.log(response.data)
  })
}
  render() {
    return (
      <div>
        <Contents title="Bin B-1" imgurl={require('../Images/icecream.jpg')}
        name={this.state.name} price={"$" + this.state.price} path='/shelves/B'/>
      </div>
    )
  }
}

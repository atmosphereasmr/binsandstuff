import "../App.css"
import React, { Component } from "react"
import axios from 'axios'

import Contents from './Contents'

export default class A3 extends Component {
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
    this.setState({ content: response.data, name: response.data[2].name, price: response.data[2].price, id: response.data[2].contentid })
      console.log(response.data)
  })
}


  render() {
    return (
      <div>
        <Contents title="Bin A-3" imgurl={require('../Images/cake.jpg')}
        name={this.state.name} price={"$" + this.state.price} path='/shelves/A' id={this.state.id}/>
      </div>
    )
  }
}

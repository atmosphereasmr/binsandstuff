import "../App.css"
import React, { Component } from "react"
import axios from 'axios'

import Contents from './Contents'

export default class C1 extends Component {
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
    this.setState({ content: response.data, name: response.data[8].name, price: response.data[8].price, id: response.data[8].contentid })
      console.log(response.data)
  })
}


  render() {
    return (
      <div>
        <Contents title="Bin C-1" imgurl={require('../Images/pancakes.jpg')}
        name={this.state.name} price={"$" + this.state.price} path='/shelves/C' id={this.state.id}/>
      </div>
    )
  }
}

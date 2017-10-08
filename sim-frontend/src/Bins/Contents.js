import "../App.css"
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Contents extends Component {

  constructor (props) {
  super(props)

  this.state = {
    content: [],
    name: '',
    price: '',
    id: ''
  }
}

  saveContent() {
    console.log("Test")
  axios.post('http://localhost:3001/api/content', {name: this.state.name, price: this.state.price})
    .then(response => {
      console.log(response.data[0]["contentid"])
      this.setState({id: response.data[0]["contentid"]})
    })
  }

  editContent() {
    console.log('I am running!')
    axios.put(`http://localhost:3001/api/content/${this.state.id}`, {name: this.state.name, price: this.state.price}).then(response => {
      console.log(response)
    })
  }

  eventHandlerName(value) {
    this.setState({name: value})
  }

  eventHandlerPrice(value) {
    this.setState({price: value})
  }

  render() {
    return (
      <div title>
        <Link to={this.props.path}>
        <div className="testFont title">
          <h1>{this.props.title}</h1>
        </div>
        </Link>
        <div main className="contentsContainer">
          <div image className="contentsImage">
            <img src={this.props.imgurl} width="300px" height="300px"/>
          </div>
          <div className="contentsContainer2">
          <div className="priceContainer">
              <h4>Name:</h4>
              <input onChange={(event) => this.eventHandlerName(event.target.value)} placeholder={this.props.name} />
          </div>
          <div className="priceContainer">
            <h4>Price:</h4>
            <input onChange={(event) => this.eventHandlerPrice(event.target.value)} placeholder={this.props.price}/>
          </div>
          <div className="buttonContainer">
            <button onClick={() => this.editContent()}>Edit</button>
            <button onClick={() => this.saveContent()}>Save</button>
          </div>
        </div>
        </div>
        <Link to={this.props.path}>
<div className="homeBin testFont returnHome">
  <h1>Back</h1>
</div>
</Link>
        </div>
    )
  }
}

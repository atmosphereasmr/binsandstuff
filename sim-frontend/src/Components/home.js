import "../App.css"
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Link to='/shelves/a'>
        <div className="homeBin testFont">
          <h1>Shelf A</h1>
        </div>
        </Link>
        <Link to='/shelves/b'>
        <div className="homeBin testFont">
          <h1>Shelf B</h1>
        </div>
        </Link>
        <Link to='/shelves/c'>
        <div className="homeBin testFont">
          <h1>Shelf C</h1>
        </div>
        </Link>
        <Link to='/shelves/d'>
        <div className="homeBin testFont">
          <h1>Shelf D</h1>
        </div>
        </Link>
      </div>
    )
  }
}

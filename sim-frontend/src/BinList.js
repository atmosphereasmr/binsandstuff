import React, { Component } from 'react'
import "./App.css"

import {Link} from "react-router-dom"
import A from "./Shelves/A"
import B from "./Shelves/B"
import C from "./Shelves/C"
import D from "./Shelves/D"

export default class BinList extends Component {
  render() {
    return (
      <div>
      <div>
        <Link to="/">
        <div className="title testFont">
          <h1>{this.props.title}</h1>
        </div>
        </Link>
      </div>
      <div className="homeContainer">
      <Link to={this.props.page1}>
        <div className="homeBin testFont">
          <h1>{this.props.binA}</h1>
        </div>
        </Link>
        <Link to={this.props.page2}>
        <div className="homeBin testFont">
          <h1>{this.props.binB}</h1>
        </div>
        </Link>
        <Link to={this.props.page3}>
        <div className="homeBin testFont">
          <h1>{this.props.binC}</h1>
        </div>
        </Link>
        <Link to={this.props.page4}>
        <div className="homeBin testFont">
          <h1>{this.props.binD}</h1>
          </div>
        </Link>
        </div>
        <Link to='/'>
        <div className="homeBin testFont returnHome">
          <h1>Back</h1>
        </div>
        </Link>
      </div>
    )
  }
}

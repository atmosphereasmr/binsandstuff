import './App.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/">
        <div className="headerContainer">
            <h1 className="testFontWhite">Bins & Stuff</h1>
            <img src={require('./Images/logo.png')} className="logo"/>
        </div>
        </Link>
      </div>
    )
  }
}

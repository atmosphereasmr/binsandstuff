import "../App.css"
import React, { Component } from "react"

import BinList from '../BinList'

export default class B extends Component {
  render() {
    return (
      <div>
        <BinList title="Shelf B" binA="Bin B-1" binB="Bin B-2" binC="Bin B-3" binD="Bin B-4" page1='/shelves/bins/B1'
        page2='/shelves/bins/B2' page3='/shelves/bins/B3' page4='/shelves/bins/B4'/>
        </div>
    )
  }
}

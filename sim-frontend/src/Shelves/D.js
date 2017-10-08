import "../App.css"
import React, { Component } from "react"

import BinList from '../BinList'

export default class D extends Component {
  render() {
    return (
      <div>
        <BinList title="Shelf D" binA="Bin D-1" binB="Bin D-2" binC="Bin D-3" binD="Bin D-4" page1='/shelves/bins/D1'
        page2='/shelves/bins/D2' page3='/shelves/bins/D3' page4='/shelves/bins/D4'/>
      </div>
    )
  }
}

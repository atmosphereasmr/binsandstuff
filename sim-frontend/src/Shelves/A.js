import "../App.css"
import React, { Component } from "react"

import BinList from '../BinList'

export default class A extends Component {
  render() {
    return (
      <div>
        <BinList title="Shelf A" binA="Bin A-1" binB="Bin A-2" binC="Bin A-3" binD="Bin A-4" page1='/shelves/bins/A1'
        page2='/shelves/bins/A2' page3='/shelves/bins/A3' page4='/shelves/bins/A4' />
      </div>
    )
  }
}

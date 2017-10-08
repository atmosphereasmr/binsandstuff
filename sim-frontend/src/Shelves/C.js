import "../App.css"
import React, { Component } from "react"

import BinList from '../BinList'

export default class C extends Component {
  render() {
    return (
      <div>
        <BinList title="Shelf C" binA="Bin C-1" binB="Bin C-2" binC="Bin C-3" binD="Bin C-4" page1='/shelves/bins/C1'
        page2='/shelves/bins/C2' page3='/shelves/bins/C3' page4='/shelves/bins/C4'/>
        </div>
    )
  }
}

import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import "./App.css"

import A from './Shelves/A'
import B from './Shelves/B'
import C from './Shelves/C'
import D from './Shelves/D'

import A1 from './Bins/A1'
import A2 from './Bins/A2'
import A3 from './Bins/A3'
import A4 from './Bins/A4'

import B1 from './Bins/B1'
import B2 from './Bins/B2'
import B3 from './Bins/B3'
import B4 from './Bins/B4'

import C1 from './Bins/C1'
import C2 from './Bins/C2'
import C3 from './Bins/C3'
import C4 from './Bins/C4'

import D1 from './Bins/D1'
import D2 from './Bins/D2'
import D3 from './Bins/D3'
import D4 from './Bins/D4'

import Home from './Components/home'

import Contents from "./Bins/Contents"

export default (
  <Switch>
  <Route component={Home} path='/' exact />

  <Route component={A} path='/shelves/A' />
  <Route component={B} path='/shelves/B' />
  <Route component={C} path='/shelves/C' />
  <Route component={D} path='/shelves/D' />

  <Route component={A1} path='/shelves/bins/A1' />
  <Route component={A2} path='/shelves/bins/A2' />
  <Route component={A3} path='/shelves/bins/A3' />
  <Route component={A4} path='/shelves/bins/A4' />

  <Route component={B1} path='/shelves/bins/B1' />
  <Route component={B2} path='/shelves/bins/B2' />
  <Route component={B3} path='/shelves/bins/B3' />
  <Route component={B4} path='/shelves/bins/B4' />

  <Route component={C1} path='/shelves/bins/C1' />
  <Route component={C2} path='/shelves/bins/C2' />
  <Route component={C3} path='/shelves/bins/C3' />
  <Route component={C4} path='/shelves/bins/C4' />

  <Route component={D1} path='/shelves/bins/D1' />
  <Route component={D2} path='/shelves/bins/D2' />
  <Route component={D3} path='/shelves/bins/D3' />
  <Route component={D4} path='/shelves/bins/D4' />

  </Switch>
)

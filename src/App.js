import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { News } from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Route, Routes,
} from "react-router-dom";

export default class App extends Component {
  state = {
    progress:0,
  } 
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<News key="" setProgress={this.setProgress} pageSize={10} country="in" category=""/>}/>
            <Route exact path='/Entertainment' element={<News key="entertainment" setProgress={this.setProgress} pageSize={10} country="in" category="entertainment"/>}/>
            <Route exact path='/General' element={<News key="general" setProgress={this.setProgress} pageSize={10} country="in" category="general"/>}/>
            <Route exact path='/Health' element={<News key="health" setProgress={this.setProgress} pageSize={10} country="in" category="health"/>}/>
            <Route exact path='/Science' element={<News key="science" setProgress={this.setProgress} pageSize={10} country="in" category="science"/>}/>
            <Route exact path='/Sports' element={<News key="sports" setProgress={this.setProgress} pageSize={10} country="in" category="sports"/>}/>
            <Route exact path='/Business' element={<News key="business" setProgress={this.setProgress} pageSize={10} country="in" category="business"/>}/>
            <Route exact path='/Technology' element={<News key="technology" setProgress={this.setProgress} pageSize={10} country="in" category="technology"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

import React, { Component } from 'react';
import {Row, Container, Col, Card, Button } from "react-bootstrap";
import Sidebar1 from "./components/kuepa_sidebar_1.js";
import Sidebar2 from "./components/kuepa_sidebar_2.js";
import KuepaContainer from "./components/kuepa_container.js";


//css
import './style/Dashboard.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <div className="container-fluid bg-dark">
        <div className='row mx-0'>
          <div className='col-sm-1 bg-dark px-0'>
            <Sidebar1 />
          </div>
          <div className='col-sm-10 bg-dark margin_disabled px-0'>
            <KuepaContainer/>
          </div>
          <div className='col-sm-1 bg-light px-0'>
            <Sidebar2 />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Nav, Col} from "react-bootstrap";
import '../style/Dashboard.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import KuepaCard2 from "../components/kuepa_card2.js";


class Sidebar2 extends Component{

  constructor(){

    super();
    this.state={
      data2:[]
    }
  }

  peticion2(){
    fetch('https://api.opendota.com/api/heroes')
    .then(response => response.json())
    .then(data => this.setState({data2:data}));
  }

  componentDidMount(){
    this.peticion2();
  }

  render(){
    return (
        <div className="col-md-12 d-none d-md-block bg-dark sidebar2">
          <div style={{maxHeight:'40em',overflowY: 'scroll',overflowX: 'hidden'}}>
            {this.state.data2.map(cliente=>{
              return(
                <KuepaCard2
                  name={cliente.localized_name}
                  time={cliente.roles.length}
                  type={cliente.attack_type}
                 />
              )
            })};
          </div>


        </div>
        );
      }

  };
  // const Sidebar = withRouter(Side);
  export default Sidebar2;

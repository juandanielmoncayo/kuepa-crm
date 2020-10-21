import React, { Component } from 'react';
import {Nav, Image} from "react-bootstrap";
import '../style/Dashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAlignJustify, faServer, faBorderStyle } from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.svg';


class Sidebar1 extends Component{
  render(){
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"
              activeKey="/home"
              onSelect={selectedKey => alert(`selected ${selectedKey}`)}
              >
                <div class="sidebar-header">
                    <h3> <span style={{color:'#FFA81E'}}>K</span><span style={{color:'#8f9499'}}>et</span></h3>
                </div>
                <ul class="list-unstyled components">
                <li class="active">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <FontAwesomeIcon icon={faHome} size="3x" style={{color:'#FFA81E'}}/>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <FontAwesomeIcon icon={faAlignJustify} size="3x" style={{color:'#8f9499'}}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <FontAwesomeIcon icon={faServer} size="3x" style={{color:'#8f9499'}}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
            </ul>
          </Nav>
          <Nav col-md-12 d-none d-md-block bg-dark sidebar>
            <a><FontAwesomeIcon icon={faBorderStyle} size="3x" style={{color:'#8f9499'}}/></a>
            <a><Image  src={logo} roundedCircle /></a>            
          </Nav>
        </>
        );
      }

  };
  // const Sidebar = withRouter(Side);
  export default Sidebar1;

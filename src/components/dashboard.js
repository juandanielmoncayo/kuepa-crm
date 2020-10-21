import React, { Component } from 'react';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import { withRouter } from "react-router";
import Sidebar from "../components/sidebar.js";
import '../style/Dashboard.css'

class Dashboard extends Component{

  render(){
    return (
        <>
         <Container>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col>
                </Row>

            </Container>
        </>
        );
  }

  };
  // const Dashboard = withRouter(Dash);
  export default Dashboard

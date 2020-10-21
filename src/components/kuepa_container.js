import React, { Component } from 'react';
import {Container, Row , Col, Card, Button, Input, Table, Image } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSms } from '@fortawesome/free-solid-svg-icons'
import KuepaCard from "../components/kuepa_card.js";
import KuepaCircle from "../components/kuepa_circle_progres.js";
import KuepaBar from "../components/kuepa_progres_bar.js";


class KuepaContainer extends Component{
  constructor(){

    super();
    this.state={
      data1:[],
      data2:[],
      hoy:''
    }
    this.fecha_hoy=this.fecha_hoy.bind(this);
  }
  peticion1(){
    fetch('https://api.opendota.com/api/proPlayers')
    .then(response => response.json())
    .then(data => this.setState({data1:data}));
  }
  
  componentDidMount(){
    this.peticion1();
    this.fecha_hoy();
  }
  fecha_hoy(){
    var dias=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado']
    var mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    var hoy = new Date();
    hoy=dias[hoy.getDay()]+', '+hoy.getDate()+' '+mes[hoy.getMonth()]
    this.setState({hoy});
  }
  render(){
    return (
      <div className="kuepa_container">
      <Container fluid>
        <Row>
          <Col xs={2}>
            <input className="form-control" placeholder="Buscar" />
          </Col>
          <Col xs={8}></Col>
          <Col xs={2}>
            <input
              className="form-control"
              type="text"
              value ={this.state.hoy}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Hola, Jorge</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <KuepaCircle
              percentage={50}
            />
          </Col>
          <Col xs={6}>
          <KuepaBar
            percentage={50}
            percentage2={50}
          />
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="table-responsive-medium">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan="5">Conexiones de agenda para hoy</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data1.map(cliente=>{
                  return(
                    <tr>
                      <td className="td-imagen"><Image className="imagen" src={cliente.avatarmedium} roundedCircle /></td>
                      <td className="td-nombre">{cliente.personaname}</td>
                      <td className="td-llamar">
                          <h6>LLamar</h6>
                          <p>Descuento de temporada</p>
                      </td>
                      <td className="td-radio">
                        <input
                          type='radio'
                          checked={cliente.plus}
                        />
                      </td>
                      <td>
                        <Button variant="warning">
                          <FontAwesomeIcon icon={faPhone} size="1x" style={{color:'white'}}/>
                        </Button>
                        <Button variant="info">
                          <FontAwesomeIcon icon={faSms}  size="1x"/>
                        </Button>

                      </td>
                    </tr>
                  )
                })};
              </tbody>
            </Table>
          </Col>
          <Col xs={4}>
            <Row>
              <Col xs={6}>
                <KuepaCard
                  clasCard='card-img-1'
                  numCard={10}
                  lead='Leads de primer contacto'
                  phone={15}
                  messagge={18}
                />
              </Col>
              <Col xs={6}>
              <KuepaCard
                clasCard='card-img-2'
                numCard={20}
                lead='Leads por confirmar cita'
                phone={21}
                messagge={24}
              />
              </Col>
              <Col xs={6}>
              <KuepaCard
                clasCard='card-img-3'
                numCard={30}
                lead='Lead de último contacto'
                phone={27}
                messagge={30}
              />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }

  };
  // const Sidebar = withRouter(Side);
  export default KuepaContainer;

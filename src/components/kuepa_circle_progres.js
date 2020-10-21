import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import {Container, Row , Col, Card, Button, Input, Table, Image } from "react-bootstrap";
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types'

class KuepaCircle extends Component{
  constructor(props){

    super(props);
    this.state={
      percentage:this.props.percentage,
    }

  }
  render(){
    return(
      <Table>
        <tbody>
          <tr>
            <td rowSpan="2">
              <CircularProgressbar value={this.state.percentage} text={`${this.state.percentage}%`} />;
            </td>
            <td>Leads obtenidos</td>
            <td>50/100</td>
            <td>Cola de llamadas</td>
            <td>50/100</td>
          </tr>
          <tr>
            <td>Matriculas finalizadas</td>
            <td>10/20</td>
          </tr>
        </tbody>
      </Table>
    );
  };
}
KuepaCircle.propTypes={
  percentage: PropTypes.number
}
export default KuepaCircle;

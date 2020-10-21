import React, { Component } from 'react';
import {Container, Row , Col, Card, Button, Input, Table, Image, ProgressBar } from "react-bootstrap";
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types'



class KuepaBar extends Component{
  constructor(props){

    super(props);
    this.state={
      percentage:this.props.percentage,
      percentage2:this.props.percentage2
    }

  }
  render(){
    return(
      <Table>
        <tbody>
          <tr>
            <td colSpan="2">
              <h4>Meta Grupal</h4>
            </td>
          </tr>
          <tr>
            <td>Leads Obtenidas</td>
            <td>200/400</td>
          </tr>
          <tr>
            <ProgressBar now={this.state.percentage} striped variant="warning" label={`${this.state.percentage}% `} />
          </tr>
          <tr>
            <td>Matriculas Realizadas</td>
            <td>50/100</td>
          </tr>
          <tr>
            <ProgressBar now={this.state.percentage2} striped variant="warning" label={`${this.state.percentage2}% `} />
          </tr>
        </tbody>
      </Table>
    );
  };
}
KuepaBar.propTypes={
  percentage: PropTypes.number,
  percentage2: PropTypes.number
}
export default KuepaBar;

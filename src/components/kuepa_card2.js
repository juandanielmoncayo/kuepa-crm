import React, { Component } from 'react';
import {Container, Row , Col, Card, Button, Input, Table, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSms } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

class KuepaCard2 extends Component{
  constructor(props){

    super(props);
    this.state={
      name:this.props.name,
      type:this.props.type,
      time:this.props.time,
      color:this.props.color,
      iconCard:this.props.iconCard
    }

  }

  componentWillReceiveProps(nextProps){
    if (nextProps.name != this.state.name) {
      this.setState({inputValue:nextProps.inputValue});
    }
    if (nextProps.type != this.state.type) {
      this.setState({type:nextProps.type});
    }
    if (nextProps.time != this.state.time) {
      this.setState({time:nextProps.time});
    }
  }
  render(){
    return (
      <div className="card2">
          <Table className='bordered'>
            <tbody>
              <tr>
                <td rowSpan='2' style={{color:'#3DFF8C'}}>
                  <i><FontAwesomeIcon size='xs' icon={faPhone} /></i>

                </td>
                <td style={{fontSize:'6px', color:'white'}}>
                  {this.state.name}
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{fontSize:'6px', color:'white'}}>{'Roles: '+this.state.time}</p>
                </td>
              </tr>
            </tbody>
          </Table>
      </div>
    );
  }
}
KuepaCard2.propTypes={
  name: PropTypes.string,
  type: PropTypes.string,
  time: PropTypes.number,
  color:PropTypes.string,
  iconCard:PropTypes.object
}
export default KuepaCard2;

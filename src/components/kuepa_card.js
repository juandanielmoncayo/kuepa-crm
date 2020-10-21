import React, { Component } from 'react';
import {Container, Row , Col, Card, Button, Input, Table, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSms } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'


class KuepaCard extends Component{
  constructor(props){

    super(props);
    this.state={
      clasCard:this.props.clasCard,
      numCard:this.props.numCard,
      lead:this.props.lead,
      phone:this.props.phone,
      messagge:this.props.messagge
    }

  }

  componentWillReceiveProps(nextProps){
    if (nextProps.clasCard != this.state.clasCard) {
      this.setState({clasCard:nextProps.clasCard});
    }
    if (nextProps.numCard != this.state.numCard) {
      this.setState({numCard:nextProps.numCard});
    }
    if (nextProps.lead != this.state.lead) {
      this.setState({lead:nextProps.lead});
    }
    if (nextProps.phone != this.state.phone) {
      this.setState({phone:nextProps.phone});
    }
    if (nextProps.messagge != this.state.messagge) {
      this.setState({messagge:nextProps.messagge});
    }
  }

  render(){
    return (
      <Card className="card">
        <Card.Header
          className={this.state.clasCard}>
          <Card.Title>
            <h5><span className="rounded-circle border border-light bg-light" alt="100x100">{this.state.numCard}</span></h5>
            <p style={{color:"white"}}>{this.state.lead}</p>

          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            <FontAwesomeIcon icon={faPhone} size="1x" style={{color:'#e8e9ea'}}/>
            {this.state.phone}
          </p>
          <p>
            <FontAwesomeIcon icon={faSms} size="1x" style={{color:'#e8e9ea'}}/>
            {this.state.messagge}
          </p>
        </Card.Body>
      </Card>
    );
  }
}

KuepaCard.propTypes={
  clasCard: PropTypes.string,
  numCard: PropTypes.number,
  lead: PropTypes.string,
  phone: PropTypes.number,
  messagge: PropTypes.number
}
export default KuepaCard;

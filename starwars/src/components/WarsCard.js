import React from "react";
import {
    Card, CardText, CardBody, CardHeader, Col, Button
  } from 'reactstrap';



export const WarsCard = props => {
  return (
    <div className="people-list">
        <Col sm={{ size: 'auto'}}>
            <Card>
                <CardHeader>Name: {props.name}</CardHeader>
                <CardBody>
                    <CardText>Height: {props.height} </CardText>
                </CardBody>
            </Card>
        </Col>
      </div>
  );
};

export const NextButton = props => {
    return (
        <div className="people-list">
            <Button onClick={props.nextLog}>NEXT LIST OF CHARACTERS</Button>
        </div>
    );
};


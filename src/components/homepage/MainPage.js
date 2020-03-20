import React, { Component } from "react";
import { Row, Col, FormGroup, Button, Input } from "reactstrap";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md="2">
            <p>Showing weather for:</p>
          </Col>
          <Col md="2">
            <FormGroup>
              <Input
                name="city"
                className="form-control"
                placeholder="Change City"
                defaultValue="Tanjung Pinang"
              />
            </FormGroup>
          </Col>
          <Col md="1">
            <Button color="success">Change</Button>
          </Col>
          <Col>
            <sub className="text-muted pull-right">
              API provided by{" "}
              <a href="https://openweathermap.org/" className="text-success">
                openweathermap.org
              </a>
            </sub>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

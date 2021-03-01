import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import intro from '../../assets/img/gramatica/intro.jpg'

class IntroduccionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Introducción</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila mt-3">
            <Col xs="12" sm="12" >
              <div className="align-middle animated rubberBand delay-0s">
                <p className="cajaRoja text-justify">
                  La ortografía es el conjunto de normas que regulan la escritura.<br />
                  Forma parte de la gramática normativa  ya que establece las reglas para el uso correcto de las 
                  letras y los signos de puntuación.
                </p>
                <p>

                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="11" lg="10" className="centrado-fila">
              <img
                src={intro}
                //style={{ width: 300 }}
                alt="intro"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>

          </Row>
        </CardBody>
      </div>
    );
  }
}
export default IntroduccionView;

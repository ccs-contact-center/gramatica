import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import objetivo from '../../assets/img/gramatica/objetivo.jpg'


class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="11" lg="10">
              <div className="align-middle animated rubberBand delay-0s">
                <p className="cajaRoja text-center">
                  El participante recordara las reglas básicas de ortografía y redacción, para mejorar en la 
                  comunicación interna en su operación, la atención y visualización al escribir: reportes, 
                  tipificaciones, etc.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="11" lg="10" className="centrado-fila">
              <img
                src={objetivo}
                //style={{ width: 300 }}
                alt="objetivo"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default ObjetivoView;

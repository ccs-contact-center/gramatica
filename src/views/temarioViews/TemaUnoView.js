import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import arrow from '../../assets/img/gramatica/arrow.jpg'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Ortografía y redacción</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 " className="mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Importancia de la ortografía</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <ul className="animated slideInUp delay-1 mt-3">
                <li>
                  Es de gran importancia ya que si no escribimos correctamente las palabras podemos cambiar su
                  significado, originando un gran error.
                </li>
              </ul>
              <div className="centrado-fila">
                <img
                  src={arrow}
                  style={{ width: 80 }}
                  alt="arrow"
                  className="img-fluid animated  bounceInRight delay-1s"
                />
              </div>
              <ul className="animated slideInUp delay-1 mt-3">
                <li>
                  En la ortografía deben ser tomadas  en cuenta los signos de puntuación y el uso correcto de las letras.
                </li>
              </ul>
              <div className="centrado-fila">
                <img
                  src={arrow}
                  style={{ width: 80 }}
                  alt="arrow"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
              <ul className="animated slideInUp delay-1 mt-3">
                <li>
                  Ya que una buena ortografía nos ayuda a lograr mayor alcance de los conocimientos.
                </li>
              </ul>

            </Col>
            <Col xs="12" className="">
              <div className="cajaRoja float-right" style={{ width: "300px" }}>
                <p>
                  Herrar no es de lectores
                </p>
              </div>
            </Col>
            <div className=" clearfix">

            </div>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView

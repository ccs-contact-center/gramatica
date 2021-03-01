import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaTreceView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Ortografía y redacción</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12 " className="mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>La letra LL</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “LL”:</b>
              </p>
              <p>
                Se escribe con “LL”:
              </p>
              <ul>
                <li>Las terminaciones <b>illo</b>, <b>illa</b>, <b>illos</b>, <b>illas</b>. <br />
                     Ejemplos:<b> chiquillo</b> y <b>vaquilla</b>. </li>
                <li>En los verbos terminados en llar y sus conjugaciones.<br />
                    Ejemplos: <b>callar, sellar y trillar. Se exceptúan los verbos rayar y payar</b>.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreceView

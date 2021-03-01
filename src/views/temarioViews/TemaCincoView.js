import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaCincoView extends Component {
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
                <b>La letra B</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “B”:</b>
              </p>
              <p>
              Se escribe con “b”:
              </p>
              <ul>
                <li>Verbos terminados en <b>bir, excepto</b> hervir, servir y vivir.</li>
                <li>Palabras con <b>bu, bur o bus</b> , al principio, medio o final de palabra. <b>Excepto</b> párvulo, 
                vuelo, vuelco, válvula, vulgar, vulnerar, vuelta.</li>
                <li>Las palabras en que el sonido b va delante de consonante.</li>
                <li>Los <b>pretéritos imperfectos</b> en –<b>aba: cantaban, saltaba, soñábamos</b>.</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView

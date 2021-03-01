import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaSeisView extends Component {
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
                <b>La letra V</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “V”:</b>
              </p>
              <p>
              Se escribe con “v”:
              </p>
              <ul>
                <li>Las palabras que <b>empiezan</b> por <b>val-, vice-villa-, villar-. Excepto</b>: 
                 bíceps y billar.</li>
                 <li>Los <b>adjetivos y sustantivos terminados</b>  en <b>ava, avo, eva, eve, evo, iva, ivo</b>.
                  Excepto: <b>árabe, sílaba y estribo</b>.</li>
                  <li> Después de <b>ad- y en</b>-.</li>
                  <li>Las formas de <b>verbos</b> que en <b>infinitivo no</b> tienen <b>b</b> ni <b>v</b>.
                   Excepto <b>iba</b> de <b>ir</b>.</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView

import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaOchoView extends Component {
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
                <b>La letra S</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “S”:</b>
              </p>
              <p>
              Se escribe con “S”:
              </p>
              <ul>
                  <li>Las palabras que incluyen esta letra cuando va antes de la <b>d,f,g,l,m,n</b> y <b>q</b>
                   excepto <b>exfoliar</b> y  <b>exquisitos</b>.</li>
                   <li>
                      La terminación ísimo, del superlativo de los adjetivos calificativos y adverbios.<br/>
                      <b>Ejemplo: facilísimo, bellísimo, tempranísimo</b>.
                   </li>
                   <li>Las voces cuya terminación sea <b>oso</b> con significado de abundancia o consistencia.</li>
                   <li>Los adjetivos y verbos que al sustantivarse terminan en <b>sión</b> y cuyos participios 
                   finalizan en <b>so</b>.</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOchoView

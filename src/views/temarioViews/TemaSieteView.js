import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaSieteView extends Component {
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
                <b>La letra C</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “C”:</b>
              </p>
              <p>
              Se escribe con “C”:
              </p>
              <ul>
                  <li><b>Delante</b> de <b>e</b>, <b>i</b>.(ce, ci)</li>
                  <li>Cuando suena como <b>q</b> o <b>k</b> y cuando va antes de consonante o de 
                  <b>a</b>, <b>o</b>, <b>u</b>.</li>
                  <li>Los verbos que al sustantivarse (forman sustantivos a partir de un verbo) terminan
                     con <b>ción</b> al cambiar las terminaciones <b>do</b>.<br/>
                     <b>Ejemplo</b>: <b>terminación</b> (de terminado) <b>excavación</b>       
                     (de escavado) <b>extinción</b> (de extinto).
                  </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSieteView

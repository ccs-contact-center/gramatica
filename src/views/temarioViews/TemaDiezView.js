import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDiezView extends Component {
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
                <b>La letra G</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “G”:</b>
              </p>
              <p>
              Se escribe con “G”:
              </p>
              <ul>
                  <li>Los sonidos suaves <b> ga, go, gu, gue y gui</b> (gue-gui, se añade una <b>u</b> que no 
                  suena).</li>
                  <li>Palabras con las sílabas <b>geo, gio, gia, gía</b>. Excepto bujía, herejía y apoplejía.</li>
                  <li>La sílaba o grupo <b>gen</b>-, al principio, mitad o final de palabra.</li>
                  <li>Los verbos terminados en –<b>ger</b> y –<b>gir</b>.<br/>
                      <b>Excepto</b> tejer y crujir.</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiezView

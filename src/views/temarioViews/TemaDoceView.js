import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDoceView extends Component {
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
                <b>La letra H</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “H”:</b>
              </p>
              <p>
                Se escribe con “H”:
              </p>
              <ul>
                <li>Las palabras que <b>empiezan</b> por <b>her</b>-, <b>hie</b>- y <b>hue</b>-</li>
                <li>Las palabras <b>ha</b> y <b>he</b> cuando son <b>formas</b> del verbo <b>haber</b>.<br />
                    NOTA: porque haciendo el plural se cambia en <b>han</b> y <b>hemos</b>.</li>
                <li>Las formas del verbo <b>hacer</b> y <b>haber</b>.<br />
                    NOTA: no confundir con las formas del verbo <b>echar</b> (<b>echa tú agua</b>).
                </li>
                <li>Los <b>compuestos</b> y <b>derivados</b> de las palabras que tienen <b>h</b>, <b>excepto</b>: 
                derivados de hueso, huevo, 
                hueco y huérfano que no empiezan por el diptongo ue. (hueso -  óseo/hueco -  oquedad)</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDoceView

import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaCatorceView extends Component {
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
                <b>La letra Y</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “Y”:</b>
              </p>
              <p>
                Se escribe con “Y”:
              </p>
              <ul>
                <li>Palabras que tienen este fonema en forma de consonántica es decir, al principio de las palabras,
                    en medio de ellas o seguido de vocales: <b>leyó</b>, <b>mayo</b>, <b>yodo</b></li>
                <li>Algunas conjugaciones de verbos cuyo infinitivo no lleve ni <b>LL</b> ni <b>Y</b>: contribuyera
                (de contribuir)
                  <b>cayeron</b> (caer) <b>oyó</b> (de oír).</li>
                <li>Las palabras que comienzan con la silaba <b>yer</b>: <b>yermo</b>, <b>yergue</b>.</li>
                <li>Al <b>final de palabra</b> que terminen con el fonema o sonido ( i ) siempre y cuando no se
                  acentúe:
                    <b> hoy, hay, rey, ley</b>.</li>
                <li>Después de los prefijos <b>ad</b>, <b>dis</b>, sub: <b>adyacente</b>, <b>subyugado</b>.</li>
                <li>Las palabras que incluyen la sílaba yec: <b>proyectar</b>, <b>abyecto</b>.</li>
                <li>Las Cuando es <b>conjunción</b>: Paco <b>y</b> Juan son amigos.</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCatorceView

import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader, Table } from 'reactstrap'

class TemaDieciSieteView extends Component {
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
                <b>Letras “SC”</b>
              </h2>
              <h3>Uso de la “SC”:</h3>
            </Col>
            <Col xs="12">
              <ul>
                <li>Entre las palabras de más difícil ortografía, dado que no existen reglas para su uso. -<b>cción</b>,
                  y que tienen relación con los participativos en -<b>cto</b>: <b>afección</b> (de afecto)
                  <b>sección</b> (de sector)</li>
              </ul>
              <p>Se escriben con las letras “<b>SC</b>”:  </p>
            </Col>
            <Col xs="12">
              <Table dark bordered>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>Adolescente</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Efervescencia</li>
                      </ul>
                    </td>
                    <td><ul>
                      <li>Miscelánea</li>
                    </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><ul>
                      <li>Ascender</li>
                    </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Escenario</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Obscenidad</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><ul>
                      <li>Consciente</li>
                    </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Escéptico</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Piscina</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><ul>
                      <li>Descender</li>
                    </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Fascinar</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Susceptible</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><ul>
                      <li>Descifrar</li>
                    </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Fluorescencia</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Trascendencia</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><ul>
                      <li>Discípulo</li>
                    </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Incandescencia</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Trescientos</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><ul>
                      <li>Doscientos</li>
                    </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Fascismo</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Seiscientos</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciSieteView

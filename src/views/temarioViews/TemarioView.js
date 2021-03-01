import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class TemarioView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Índice</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <Table bordered className="cajaA1">
                <thead style={{ background: "#c52d49" }} className="cajaA1">
                  <tr>
                    <th>
                      {" "}
                      <p
                        className="text-white text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        INTELIGENCIA EMOCIONAL

                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{ background: "#c52d49" }}
                  className="cajaA1 text-white"
                >
                  <tr>
                    <td style={{ width: "25%", verticalAlign: "middle" }}>
                      <b> 1. Objetivo </b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>2. Introducción</b><br />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>3. Concepto de Inteligencia Emocional  </b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>4. La personalidad </b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>5. ¿Qué son las emociones?</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>6. Emociones Básicas</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>7. El origen de las emociones</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>8. El carácter</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>9. ¿Cómo evolucionar a una vida mas sana con el manejo de nuestras objeciones?</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>9. Reflejos automáticos. Conciencia. Entendimiento. Conocimiento (saber)</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>10. Hot topics</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemarioView;

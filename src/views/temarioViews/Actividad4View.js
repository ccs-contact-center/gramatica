import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import swal from "sweetalert"
import AuthService from '../../services/AuthService'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class Actividad4View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(state) {
    super(state)
    this.Auth = new AuthService()
    this.state = {

      palabra1: '',
      palabra2: '',
      palabra3: '',
      palabra4: '',
      palabra5: '',
      palabra6: '',
      palabra7: '',
      palabra8: '',
      id_ccs: this.Auth.getProfile().id_ccs,
      form: 'gramatica-4',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);

      swal({
        title: "Status Actividad",
        text: "Se guardo la actividad: 4, con id: " + respuesta[0].id,
        icon: "success",
        dangerMode: true,
        button: {
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-primary",
          reset: true,
        },
      });

      // alert("Se guardo la actividad: 1, con id: " + respuesta[0].id);
    } catch (err) {
      swal({
        title: "Status Actividad",
        text: "No se guardo la actividad: 4, Intenta de nuevo. ",
        icon: "error",
        dangerMode: true,
        button: {
          text: "Cerrar",
          value: true,
          visible: true,
          className: "btn btn-primary ",
        },
      });
      console.log("loggea si hay un error");
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2>Evaluación 4: </h2>
            </CardHeader>
            <CardBody >
              <Row>
                <Col xs="12" >
                  <p>
                    4.- Selecciona la respuesta correcta.
                  </p>
                </Col>
              </Row>
              <Form>
                <FormGroup tag="fieldset">
                  <Row className="centrado-fila">
                    <Col xs="12" sm="12" md="12" className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                      <Row>

                        <Col x="2">
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra1" value="mal" onChange={this.onChange.bind(this)} />{' '}
                                bicepresidente
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra1" value="bien" onChange={this.onChange.bind(this)} />{' '}
                                vicepresidente
                                  </Label>
                            </FormGroup>
                          </FormGroup>
                        </Col>
                        <Col x="2">
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra2" value="mal" onChange={this.onChange.bind(this)} />
                                prohivir
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra2" value="bien" onChange={this.onChange.bind(this)} />
                                prohibir
                                  </Label>
                            </FormGroup>
                          </FormGroup>
                        </Col>
                        <Col x="2">
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra3" value="bien" onChange={this.onChange.bind(this)} />
                                búsqueda
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra3" value="mal" onChange={this.onChange.bind(this)} />
                                vúsqueda
                                  </Label>
                            </FormGroup>
                          </FormGroup>
                        </Col>
                        <Col x="2">
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra4" value="bien" onChange={this.onChange.bind(this)} />
                                absorber
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra4" value="mal" onChange={this.onChange.bind(this)} />
                                absorver
                                  </Label>
                            </FormGroup>
                          </FormGroup>
                        </Col> 
                        <Col x="2">
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra5" value="mal" onChange={this.onChange.bind(this)} />
                                Octaba/o
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra5" value="bien" onChange={this.onChange.bind(this)} />
                                Octava/o
                                  </Label>
                            </FormGroup>
                          </FormGroup>
                        </Col> 
                        <Col x="2">
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra6" value="bien" onChange={this.onChange.bind(this)} />
                                advertir
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra6" value="mal" onChange={this.onChange.bind(this)} />
                                adbertir
                                  </Label>
                            </FormGroup>
                          </FormGroup>
                        </Col> 
                        <Col x="2">
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra7" value="bien" onChange={this.onChange.bind(this)} />
                                cantaban
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra7" value="mal" onChange={this.onChange.bind(this)} />
                                cantavan
                                  </Label>
                            </FormGroup>
                          </FormGroup>
                        </Col> 
                        
                      </Row>
                      <Row>
                      <Col x="12">
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra8" value="bien" onChange={this.onChange.bind(this)} />
                                
                                Tuve de tener y anduvo de andar.
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="palabra8" value="mal" onChange={this.onChange.bind(this)} />
                                Tube de tener y andubo de andar.
                                  </Label>
                            </FormGroup>
                          </FormGroup>
                        </Col> 
                      </Row>
                    </Col>
                    <Col xs="12">
                      <div className="centrado-fila mt-3">
                        <Button
                          color="primary"
                          onClick={this.onSave.bind(this)}
                        >
                          Enviar
                          </Button>
                      </div>
                    </Col>
                  </Row>
                </FormGroup>
              </Form>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Actividad4View

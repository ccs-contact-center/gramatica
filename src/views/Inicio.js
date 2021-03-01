import React, { Component } from 'react'
import { Card, CardFooter } from 'reactstrap'
import withAuth from '../services/withAuth'
//import { connect } from 'react-redux';
//import { addProfile, setCampaign, darkTheme,setAvatar } from '../../Redux/Actions/profile';
import Navegador from './temarioViews/ComponentsNavTemari/Navegador'
import BienvenidaView from './temarioViews/BienvenidaView'
import ObjetivoView from './temarioViews/ObjetivoView'
import IntroduccionView from './temarioViews/IntroduccionView'

import TemaUnoView from './temarioViews/TemaUnoView'
import TemaDosView from './temarioViews/TemaDosView'
import TemaTresView from './temarioViews/TemaTresView'
import TemaCuatroView from './temarioViews/TemaCuatroView'
import TemaCincoView from './temarioViews/TemaCincoView'
import TemaSeisView from './temarioViews/TemaSeisView'
import TemaSieteView from './temarioViews/TemaSieteView'
import TemaOchoView from './temarioViews/TemaOchoView'
import TemaNueveView from './temarioViews/TemaNueveView'
import TemaDiezView from './temarioViews/TemaDiezView'
import TemaOnceView from './temarioViews/TemaOnceView'
import TemaDoceView from './temarioViews/TemaDoceView'
import TemaTreceView from './temarioViews/TemaTreceView'
import TemaCatorceView from './temarioViews/TemaCatorceView'
import TemaQuiceView from './temarioViews/TemaQuiceView'
import TemaDieciSeisView from './temarioViews/TemaDieciSeisView'
import TemaDieciSieteView from './temarioViews/TemaDieciSieteView'
import TemaDieciOchoView from './temarioViews/TemaDieciOchoView'
import TemaDieciNueveView from './temarioViews/TemaDieciNueveView'


import Actividad1View from './temarioViews/Actividad1View'
import Actividad2View from './temarioViews/Actividad2View'
import Actividad3View from './temarioViews/Actividad3View'
import Actividad4View from './temarioViews/Actividad4View'
import Actividad5View from './temarioViews/Actividad5View'
import Actividad6View from './temarioViews/Actividad6View'
import Actividad7View from './temarioViews/Actividad7View'
import Actividad8View from './temarioViews/Actividad8View'
import Actividad9View from './temarioViews/Actividad9View'
import Actividad10View from './temarioViews/Actividad10View'
import Formulario2View from './temarioViews/formulario2View'

//import RecapitulacionView from './temarioViews/RecapitulacionView'

class Inicio extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )
  state = {
    index: 0,
  }
  constructor() {
    super()
    this.setIndex = this.setIndex.bind(this)
  }

  setIndex(index) {
    this.setState({
      index: index,
    })
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>

          {this.state.index === 0 ? (
            <BienvenidaView />
          ) : this.state.index === 1 ? (
            <ObjetivoView />
          ) : this.state.index === 2 ? (
            <IntroduccionView />
          ) : this.state.index === 3 ? (
            <TemaUnoView />
          ) : this.state.index === 4 ? (
            <TemaDosView />
          ) : this.state.index === 5 ? (
            <Actividad1View />
          ) : this.state.index === 6 ? (
            <TemaTresView />
          ) : this.state.index === 7 ? (
            <Actividad2View />
          ) : this.state.index === 8 ? (
            <TemaCuatroView />
          ) : this.state.index === 9 ? (
            <Actividad3View />
          ) : this.state.index === 10 ? (
            <TemaCincoView />
          ) : this.state.index === 11? (
            <TemaSeisView />
          ) : this.state.index === 12 ? (
            <Actividad4View />
          ) : this.state.index === 13 ? (
            <TemaSieteView />
          ) : this.state.index === 14 ? (
            <TemaOchoView />
          ) : this.state.index === 15 ? (
            <TemaNueveView />
          ) : this.state.index === 16 ? (
            <Actividad5View />
          ) : this.state.index === 17 ? (
            <TemaDiezView />
          ) : this.state.index === 18 ? (
            <TemaOnceView />
          ) : this.state.index === 19 ? (
            <Actividad6View />
          ) : this.state.index === 20 ? (
            <TemaDoceView />
          ) : this.state.index === 21 ? (
            <Actividad7View />
          ) : this.state.index === 22 ? (
            <TemaTreceView />
          ) : this.state.index === 23 ? (
            <Actividad8View />
          ) : this.state.index === 24 ? (
            <TemaCatorceView />
          ) : this.state.index === 25 ? (
            <Actividad9View />
          ) : this.state.index === 26 ? (
            <TemaQuiceView />
          ) : this.state.index === 27 ? (
            <Actividad10View />
          ) : this.state.index === 28 ? (
            <TemaDieciSeisView />
          ) : this.state.index === 29 ? (
            <TemaDieciSieteView />
          ) : this.state.index === 30 ? (
            <TemaDieciOchoView />
          ) : this.state.index === 31 ? (
            <TemaDieciNueveView />
          ) : this.state.index === 32 ? (
            <Formulario2View />
          ) : null}
          <br />
          <CardFooter>
            <Navegador handleNavigation={this.setIndex} maxIndex={33} />
          </CardFooter>
        </Card>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     profile: state.profile.profile,
//     campaign: state.campaign.campaign,
//     darkTheme: state.darkTheme.darkTheme
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addProfile: (name) => {
//       dispatch(addProfile(name))
//     },
//     setCampaign: (id) => {
//       dispatch(setCampaign(id))
//     },
//     darkTheme: (isDarkTheme) => {
//       dispatch(darkTheme(isDarkTheme))
//     },
//     setAvatar: (data) => {
//       dispatch(setAvatar(data))
//     }

//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Inicio));
export default withAuth(Inicio)

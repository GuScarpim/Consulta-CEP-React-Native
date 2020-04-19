import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text, Image, TouchableHighlight,
  DrawerLayoutAndroid, ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Padrao from '../style/padrao';
import Img from '../img/logo.png';

import BuscarCep from './BuscarCep';
import Sobre from './Sobre';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cep: false,
      Sobre: true,
    }
  }

  openDrawer = () => {
    this.drawer.openDrawer();
  }

  onChangeCep = () => {
    this.setState({ Cep: true })
    this.setState({ Sobre: false })
  }

  onChangeSobre = () => {
    this.setState({ Sobre: true })
    this.setState({ Cep: false })
  }

  render() {
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <View style={styles.img_menu}>
          <Image source={Img} style={Padrao.logo} />
        </View>
        <View>
          {/* Rotas "Puras" */}
          <TouchableHighlight onPress={this.onChangeCep}>
            <Text style={styles.text_menu}>Buscar Endereço</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.onChangeSobre}>
            <Text style={styles.text_menu}>Sobre</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={200}
        ref={(_drawer) => this.drawer = _drawer}
        drawerPosition={"left"}
        style={styles.color_bkg}
        // DrawerLayoutAndroid.positions.Left
        renderNavigationView={() => navigationView}>
        <View style={styles.header_logo}>
          <Image source={Img} style={Padrao.logo} />
        </View>
        <View style={styles.btn_bars}>
          <TouchableHighlight onPress={this.openDrawer}>
            <Text><Icon style={styles.btn_bars} name="bars" size={30} /></Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <View style={styles.render_comp}>
            {this.state.Cep ?
              (<BuscarCep />) :
              this.state.Sobre ? (<Sobre />) : (false)}
          </View>
        </ScrollView>
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  color_bkg: {
    backgroundColor: '#F5F5F5',
  },
  header_logo: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01334a',
    borderColor: '#F4F4F5',
    borderBottomWidth: 2,
    shadowColor: 'black',
    textShadowColor: 'black',
  },
  btn_bars: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: '-15%',
    marginLeft: 10,
  },
  img_menu: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_menu: {
    margin: 10,
    marginTop: 20,
    fontSize: 18,
    textAlign: 'left',
    borderBottomWidth: 2,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  render_comp: {
    marginTop: 50,
  },
})


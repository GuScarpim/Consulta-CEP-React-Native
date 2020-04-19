import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

import Axios from 'axios';

import { Input } from 'react-native-elements';
import Padrao from '../style/padrao';

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: '',
      item: [],
    }
  }

  buscarCep = () => {
    Axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then(response => {
        this.setState({ item: response.data })
        console.log(response.data)
      })
      .catch(error => {
        return console.log(error);
      })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text_cep}>Buscar CEP</Text>
          <Input
            placeholder=' CEP' onChangeText={(cep) => this.setState({ cep })}
            onBlur={this.buscarCep}
            leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
            value={this.state.cep} id="cep" name="cep" />

          <View style={styles.inputs}>
            <Input
              placeholder=' Bairro' onChange={this.onChangeBairro}
              leftIcon={{ type: 'font-awesome', name: 'map-signs' }}
              value={this.state.item.bairro} id="bairro" name="bairro" />
          </View>
          <View style={styles.inputs}>
            <Input
              placeholder=' Unidade' onChange={this.onChangeUnidade}
              leftIcon={{ type: 'font-awesome', name: 'map-pin' }}
              value={this.state.item.unidade} id="unidade" name="unidade" />
          </View>
          <View style={styles.inputs}>
            <Input
              placeholder=' Logradouro' onChange={this.onChangeLogradouro}
              leftIcon={{ type: 'font-awesome', name: 'home' }}
              value={this.state.item.logradouro} id="logradouro" name="logradouro" />
          </View>
          <View style={styles.inputs}>
            <Input
              placeholder=' Localidade' onChange={this.onChangeLocalidade}
              leftIcon={{ type: 'font-awesome', name: 'child' }}
              value={this.state.item.localidade} id="localidade" name="localidade" />
          </View>
          <View style={styles.inputs}>
            <Input
              placeholder=' IBGE' onChange={this.onChangeIbge}
              leftIcon={{ type: 'font-awesome', name: 'leaf' }}
              value={this.state.item.ibge} id="ibge" name="ibge" />
          </View>
          <View style={styles.inputs}>
            <Input
              placeholder=' Complemento' onChange={this.onChangeComplemento}
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              value={this.state.item.complemento} id="complemento" name="complemento" />
          </View>
          <View style={styles.inputs}>
            <Input
              placeholder=' UF' onChange={this.onChangeUf}
              leftIcon={{ type: 'font-awesome', name: 'street-view' }}
              value={this.state.item.uf} id="uf" name="uf" />
          </View>
          <View style={styles.inputs}>
            <Input
              placeholder=' Gia' onChange={this.onChangeGia}
              leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
              value={this.state.item.gia} id="gia" name="gia" />
          </View>
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignContent: 'center'
  },
  inputs: {
    marginTop: 10,
  },
  text_cep: {
    fontWeight: "bold",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    marginBottom: 20,

  },
})
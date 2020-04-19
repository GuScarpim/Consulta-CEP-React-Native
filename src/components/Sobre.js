import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';

import Padrao from '../style/padrao';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#000',
    width: 300,
    height: 300,
    padding: 10
  }
})

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Title>BUSCAR ENDEREÇO VIA CEP</Title>
        <Paragraph style={Padrao.texto}>
          Este aplicativo foi desenvolvido para estudo e também para
          demonstrar uma maneira rápida e simples de como trabalhar com
          API em React-Native, por meio desse aplicativo de consulta de
          endereço eu (Gustavo Scarpim) também demonstro a criação de
          um menu Drawer simples e fácil de se trabalhar!
         </Paragraph>
        <Paragraph style={Padrao.texto_negrito}>
          Desenvolvedor: Gustavo Scarpim.
         </Paragraph>
      </View>
    </View>)
}
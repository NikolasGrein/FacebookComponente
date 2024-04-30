import { View } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
}
  
  return (
    <View style={styles.container}>
       <Image
    style={{width:'80%', height: 80, marginBottom: 30}}
    resizeMode="contain"
    source={require('../../assets/facebook.png')}
    />

      <InputTexto dica="Digite seu nome" dica="Digite seu nome"/>
      <InputTexto dica="Digite sua senha" dica="Digite sua senha" seguranca={true}/>

      <Botao btn="entrar" cor='#000' src='home' />
      
      <View style={styles.cont}>
        <View style={styles.line} />
        <Text style={styles.text}>ou</Text>
        <View style={styles.line} />
    </View>

      <Botao btn="cadastrar" cor='#f00' src='excluido' />
    </View>
  );



/* Importação conforme a Aula */
import {Home} from "./src/screens/Home";
import {StatusBar} from "react-native";

/* 
Importação adjacentes conforme a documentação do React Native 
Consultar: https://reactnative.dev/docs/statusbar
*/
import React, {useState} from 'react';
import type {StatusBarStyle} from 'react-native';
import { SafeAreaView, StyleSheet } from "react-native";

/*
Opções de Customização conforme a documentação do React Native.
Consultar: https://reactnative.dev/docs/statusbar
*/
const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

/* Criação da Aplicação */
export default function App() {

  /*
  Configurações da statusBar conforme documentação do React Native.
  Aplicável tanto para IOS quanto para ANDROID
  Consultar: https://reactnative.dev/docs/statusbar
  */
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[2]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };
  
  /* 
  Renderização da página 
  Obs.1: Usa-se SafeAreaView para que as configurações funcionem no IOS
  Obs.2: A SafeAreaView foi estilizada aqui mesmo porque é apenas um teste
  */
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle} // está setada como STYLES[2] = 'light-content'
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <Home />
    </SafeAreaView>
    
  );
}

/* Estilização da SafeAreaView */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
  },
});

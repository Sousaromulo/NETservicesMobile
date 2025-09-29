// Tela de Splash (SplashScreen.js)
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('Onboarding'), 3100);
    return () => clearTimeout(t);
  }, []);

  return (
    <SafeAreaView style={styles.center}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require('../../assets/net.gif')}
        style={styles.gif}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffff',
  },
  gif: {
    width: 300,  // ajuste o tamanho conforme seu gif
    height: 300,
    backgroundColor: '#ffffffff',

  },
});

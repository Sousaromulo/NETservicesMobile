// Tela de Configurações (SettingsScreen.js)
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>Configurações</Text>
      <TouchableOpacity style={styles.rowItem}><Text>Notificações</Text></TouchableOpacity>
      <TouchableOpacity style={styles.rowItem}><Text>Privacidade</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

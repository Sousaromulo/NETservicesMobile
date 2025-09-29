// src/components/ServiceCard.js
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

export default function ServiceCard({ title, subtitle, price, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.avatarPlaceholder}><Ionicons name="business-outline" size={28} /></View>
        <View style={{ marginLeft: 12, flex: 1 }}>
          <Text style={{ fontWeight: '700' }}>{title}</Text>
          <Text style={{ color: '#666' }}>{subtitle}</Text>
        </View>
        <Text style={{ fontWeight: '700' }}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

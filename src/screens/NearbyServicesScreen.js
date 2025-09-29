// Tela de Serviços Próximos (NearbyServicesScreen.js)
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import ServiceCard from '../components/ServiceCard';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { services } from '../data/services';

export default function NearbyServicesScreen({ navigation }) {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
    })();
  }, []);

  // Função para calcular distância em km
  const getDistanceKm = (lat1, lon1, lat2, lon2) => {
    const toRad = value => (value * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Filtra serviços dentro de 5 km
  const filteredServices =
    userLocation !== null
      ? services.filter(service => {
          const distance = getDistanceKm(
            userLocation.latitude,
            userLocation.longitude,
            service.latitude,
            service.longitude
          );
          return distance <= 5;
        })
      : [];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com botão voltar */}
      <View style={styles.header}>
        <View style={styles.rowSpace}>
          <Text style={styles.h3}>Prestadores Próximos</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} marginTop={40} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ marginTop: 12 }}>
        {errorMsg && <Text style={{ padding: 16, color: 'red' }}>{errorMsg}</Text>}

        {filteredServices.length > 0 ? (
          filteredServices.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              price={`R$ ${service.price}`}
              onPress={() => navigation.navigate('ServiceDetails', { id: service.id })}
            />
          ))
        ) : (
          <Text style={{ padding: 16, fontSize: 16 }}>
            Nenhum prestador disponível a até 5 km de você.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

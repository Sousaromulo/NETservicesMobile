import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function SearchResultsScreen({ route, navigation }) {
  const { query } = route.params;

  // filtrar serviços
  const filteredServices = services.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com seta de voltar */}
      <View
        style={[styles.rowSpace, { marginVertical: 10, paddingHorizontal: 12 }]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={28}
            color="#000"
            marginVertical={30}
          />
        </TouchableOpacity>
      </View>

      {/* Lista de resultados */}
      {filteredServices.length > 0 ? (
        <FlatList
          data={filteredServices}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              price={`R$ ${item.price}`}
              onPress={() =>
                navigation.navigate("ServiceDetails", { id: item.id })
              }
            />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum serviço encontrado.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

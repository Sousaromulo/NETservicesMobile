// src/screens/VerTudoScreen.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Recebe os dados via route.params
export default function VerTudoScreen({ route, navigation }) {
  const { title, data } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 12,
        elevation: 2,
      }}
      onPress={() => navigation.navigate("ServiceDetails")}
    >
      <Image
        source={{ uri: item.imagem }}
        style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "600" }}>{item.nome}</Text>
        <Text style={{ fontSize: 12, color: "#666", textAlign: "center" }}>
          {item.endereco}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={{ marginLeft: 4, fontSize: 12 }}>{item.rating}</Text>
        </View>
      </View>
      {item.preco && <Text style={{ fontWeight: "700", color: "#333" }}>{item.preco}</Text>}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "#f5f5f5" }}>
      <Text style={{ fontWeight: "700", fontSize: 18, marginBottom: 16 }}>{title}</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

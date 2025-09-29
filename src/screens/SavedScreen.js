// src/screens/SavedScreen.js
import React from "react";
import { SafeAreaView, View, Text, FlatList, Image } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function SavedScreen() {
  const saved = [
    { id: "1", name: "Nome do contratado", address: "Endereço do contratado", price: "R$34", rating: 4.9 },
    { id: "2", name: "Nome do contratado", address: "Endereço do contratado", price: "R$50", rating: 4.7 },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 12,
        marginBottom: 12,
      }}
    >
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
        style={{ width: 60, height: 60, borderRadius: 8, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: "#555", fontSize: 13 }}>{item.address}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <FontAwesome name="star" size={14} color="gold" />
          <Text style={{ marginLeft: 4, fontSize: 13 }}>{item.rating}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ fontWeight: "600", fontSize: 15 }}>{item.price}</Text>
        <MaterialIcons name="bookmark" size={22} color="#004AAD" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8", padding: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>Salvos</Text>
      <FlatList
        data={saved}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

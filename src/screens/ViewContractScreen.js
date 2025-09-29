// src/screens/ViewContractScreen.js
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ViewContractScreen({ route, navigation }) {
  const { contract } = route.params; // Recebe os dados do contrato

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "#F8F8F8" }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#004AAD" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 12 }}>
          Detalhes do contrato
        </Text>
      </View>

      {/* Informações do contrato */}
      <View style={{ backgroundColor: "#fff", padding: 16, borderRadius: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>
          Nome: {contract.name}
        </Text>
        <Text style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>
          Localização: {contract.location}
        </Text>
        <Text style={{ fontSize: 14, color: contract.status === "Pago" ? "green" : "red" }}>
          Status: {contract.status}
        </Text>
      </View>

      {/* Ações */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#004AAD",
          paddingVertical: 12,
          borderRadius: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>Baixar contrato</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

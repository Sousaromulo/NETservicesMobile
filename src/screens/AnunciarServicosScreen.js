// src/screens/AnunciarServicosScreen.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles"; // aproveitando estilos globais

export default function AnunciarServicosScreen({ navigation }) {
  // 🔹 Exemplo de serviços anunciados
  const servicos = [
    {
      id: "1",
      nome: "Nome do contratado",
      endereco: "Endereço do contratado",
      imagem: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
  ];

  // Renderização de cada item da lista
  const renderServico = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 12,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      {/* Imagem */}
      <Image
        source={{ uri: item.imagem }}
        style={{ width: 60, height: 60, borderRadius: 8, marginRight: 12 }}
      />

      {/* Texto */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>{item.nome}</Text>
        <Text style={{ color: "#555", fontSize: 14 }}>{item.endereco}</Text>
      </View>

      {/* Botão editar */}
      <TouchableOpacity onPress={() => navigation.navigate("CreateService")}>
        <Ionicons name="create-outline" size={22} color="#6C63FF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      {/* Cabeçalho */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderColor: "#eee",
        }}
      >
        {/* Botão voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Anunciar serviços
        </Text>

        {/* Botão adicionar serviço */}
        <TouchableOpacity onPress={() => navigation.navigate("CreateService")}>
          <Ionicons name="add-circle-outline" size={26} color="#6C63FF" />
        </TouchableOpacity>
      </View>

      {/* Lista de serviços */}
      <FlatList
        data={servicos}
        keyExtractor={(item) => item.id}
        renderItem={renderServico}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </SafeAreaView>
  );
}

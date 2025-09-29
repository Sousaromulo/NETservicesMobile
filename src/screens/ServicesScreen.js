// src/screens/MyContractsScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MyContractsScreen({ navigation }) {
  const [statusFilter, setStatusFilter] = useState("Em andamento");

  const contracts = [
    {
      id: "1",
      name: "Nome do contratado",
      location: "Cajazeiras, Paraíba - Brasil",
      status: "Pago",
    },
    {
      id: "2",
      name: "Nome do contratado",
      location: "Cajazeiras, Paraíba - Brasil",
      status: "A pagar",
    },
    {
      id: "3",
      name: "Nome do contratado",
      location: "Cajazeiras, Paraíba - Brasil",
      status: "Pago",
    },
  ];

  const renderContract = ({ item }) => (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      {/* Header do Card */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          style={{ width: 60, height: 60, borderRadius: 8, marginRight: 12 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: "#555" }}>{item.location}</Text>
        </View>

        {/* Status */}
        <View
          style={{
            backgroundColor: item.status === "Pago" ? "#E6F7E9" : "#FDE8E8",
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: item.status === "Pago" ? "green" : "red",
            }}
          >
            {item.status}
          </Text>
        </View>
      </View>

      {/* Ações */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderColor: "#004AAD",
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 20,
            alignItems: "center",
            marginRight: 6,
          }}
        >
          <Text style={{ color: "#004AAD", fontWeight: "600" }}>
            Cancelar contrato
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#004AAD",
            paddingVertical: 10,
            borderRadius: 20,
            alignItems: "center",
            marginLeft: 6,
          }}
          onPress={() => navigation.navigate("ViewContract", { contract: item })}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>
            Visualizar contrato
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8", padding: 12 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Meus contratos</Text>
        <Ionicons name="search-outline" size={22} color="#000" />
      </View>

      {/* Filtros */}
      <View style={{ flexDirection: "row", marginBottom: 16 }}>
        {["Em andamento", "Completo", "Cancelado"].map((status, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setStatusFilter(status)}
            style={{
              backgroundColor:
                statusFilter === status ? "#004AAD" : "#eee",
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 20,
              marginRight: 8,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "500",
                color: statusFilter === status ? "#fff" : "#333",
              }}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de contratos */}
      <FlatList
        data={contracts}
        renderItem={renderContract}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      {/* Navbar inferior */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#004AAD",
          borderRadius: 20,
          paddingVertical: 10,
          marginTop: 8,
        }}
      >
        <Ionicons name="home-outline" size={22} color="#fff" />
        <Ionicons name="create-outline" size={22} color="#fff" />
        <Ionicons name="search-outline" size={22} color="#fff" />
        <Ionicons name="document-text-outline" size={22} color="#fff" />
      </View>
    </SafeAreaView>
  );
}

// src/screens/ExploreScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function ExploreScreen({ navigation }) {
  const [viewMode, setViewMode] = useState("list");
  const [selectedFilter, setSelectedFilter] = useState("Recentes");

  const data = [
    {
      id: "1",
      name: "Nome do contratado",
      address: "Endereço do contratado",
      price: "R$34",
      rating: 4.9,
      saved: true,
      type: "Recentes",
    },
    {
      id: "2",
      name: "Nome do contratado",
      address: "Endereço do contratado",
      price: "R$34",
      rating: 4.5,
      saved: false,
      type: "Populares",
    },
    {
      id: "3",
      name: "Nome do contratado",
      address: "Endereço do contratado",
      price: "R$34",
      rating: 4.0,
      saved: false,
      type: "Recomendados",
    },
    {
      id: "4",
      name: "Nome do contratado",
      address: "Endereço do contratado",
      price: "R$34",
      rating: 4.8,
      saved: true,
      type: "Populares",
    },
  ];

  // 🔹 Filtra os dados conforme o filtro ativo
  const filteredData = data.filter(
    (item) => selectedFilter === "Todos" || item.type === selectedFilter
  );

  // --- Render list item ---
  const renderListItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ServiceDetails", { contratado: item })}
      activeOpacity={0.7}
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
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
        style={{ width: 60, height: 60, borderRadius: 8, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: "#555", fontSize: 13 }}>{item.address}</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
        >
          <FontAwesome name="star" size={14} color="gold" />
          <Text style={{ marginLeft: 4, fontSize: 13 }}>{item.rating}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ fontWeight: "600", fontSize: 15 }}>{item.price}</Text>
        <TouchableOpacity style={{ marginTop: 8 }}>
          {item.saved ? (
            <MaterialIcons name="bookmark" size={22} color="#004AAD" />
          ) : (
            <MaterialIcons name="bookmark-border" size={22} color="#444" />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // --- Render grid item ---
  const renderGridItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ServiceDetails", { contratado: item })}
      activeOpacity={0.7}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 12,
        margin: 6,
        overflow: "hidden",
      }}
    >
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
        style={{ width: "100%", height: 120 }}
      />
      <View style={{ padding: 8 }}>
        <Text style={{ fontWeight: "600", fontSize: 14 }} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={{ color: "#555", fontSize: 12 }} numberOfLines={1}>
          {item.address}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
        >
          <FontAwesome name="star" size={14} color="gold" />
          <Text style={{ marginLeft: 4, fontSize: 13 }}>{item.rating}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 15, color: "#004AAD" }}>
            {item.price}
          </Text>
          <TouchableOpacity>
            {item.saved ? (
              <MaterialIcons name="bookmark" size={22} color="#004AAD" />
            ) : (
              <MaterialIcons name="bookmark-border" size={22} color="#444" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8", padding: 12 }}>
      {/* 🔍 Barra de Pesquisa */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 12,
          paddingHorizontal: 12,
          marginBottom: 12,
          marginTop: 6,
        }}
      >
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          placeholder="Search"
          style={{ flex: 1, marginLeft: 8, height: 40 }}
        />
        <Ionicons
          name="mic-outline"
          size={20}
          color="#666"
          style={{ marginHorizontal: 6 }}
        />
        {/* 👉 botão para tela de filtro */}
        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
          <Ionicons name="options-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* 🔵 Filtros */}
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        {["Recentes", "Populares", "Recomendados"].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setSelectedFilter(item)}
            style={{
              backgroundColor: selectedFilter === item ? "#004AAD" : "#eee",
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
                color: selectedFilter === item ? "#fff" : "#333",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 🔢 Resultados */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={viewMode === "list" ? renderListItem : renderGridItem}
        numColumns={viewMode === "grid" ? 2 : 1}
        showsVerticalScrollIndicator={false}
        key={viewMode === "grid" ? "g" : "l"}
      />

      {/* 🔽 Bottom Navbar */}
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
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FilterScreen")}>
          <Ionicons name="create-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
          <Ionicons name="search-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SavedScreen")}>
          <Ionicons name="document-text-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

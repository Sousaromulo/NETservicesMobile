// src/screens/FilterScreen.js
import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FilterScreen({ navigation }) {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedJobType, setSelectedJobType] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(null);

  const ratings = ["0", "1", "2", "3", "4+"];
  const jobTypes = ["Diário", "Freelancer", "Mensal"];
  const availability = ["Hoje", "Esta semana", "Mês", "Outro"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        
        {/* Título */}
        <Text style={{ fontSize: 20, fontWeight: "700", textAlign: "center", marginBottom: 20 }}>
          Filtrar Resultados
        </Text>

        {/* Localização */}
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>Localização</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            paddingHorizontal: 12,
            marginBottom: 20,
          }}
        >
          <Ionicons name="location-outline" size={20} color="#666" />
          <TextInput
            placeholder="Ex: Recife, Brasil"
            style={{ flex: 1, padding: 10 }}
          />
        </View>

        {/* Preço */}
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>Preço</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <TextInput
            placeholder="Mínimo"
            keyboardType="numeric"
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
              padding: 10,
              marginRight: 10,
            }}
          />
          <TextInput
            placeholder="Máximo"
            keyboardType="numeric"
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
              padding: 10,
            }}
          />
        </View>

        {/* Avaliação */}
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>Avaliação</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 20 }}>
          {ratings.map((rate, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedRating(rate)}
              style={{
                borderWidth: 1,
                borderColor: selectedRating === rate ? "#007BFF" : "#ddd",
                backgroundColor: selectedRating === rate ? "#E6F0FF" : "#fff",
                borderRadius: 20,
                paddingVertical: 8,
                paddingHorizontal: 16,
                marginRight: 8,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: selectedRating === rate ? "#007BFF" : "#333" }}>{rate}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tipo de serviço */}
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>Tipo de serviço</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 20 }}>
          {jobTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedJobType(type)}
              style={{
                borderWidth: 1,
                borderColor: selectedJobType === type ? "#007BFF" : "#ddd",
                backgroundColor: selectedJobType === type ? "#E6F0FF" : "#fff",
                borderRadius: 20,
                paddingVertical: 8,
                paddingHorizontal: 16,
                marginRight: 8,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: selectedJobType === type ? "#007BFF" : "#333" }}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Disponibilidade */}
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>Disponibilidade</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 30 }}>
          {availability.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedAvailability(option)}
              style={{
                borderWidth: 1,
                borderColor: selectedAvailability === option ? "#007BFF" : "#ddd",
                backgroundColor: selectedAvailability === option ? "#E6F0FF" : "#fff",
                borderRadius: 20,
                paddingVertical: 8,
                paddingHorizontal: 16,
                marginRight: 8,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: selectedAvailability === option ? "#007BFF" : "#333" }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botões */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
              padding: 14,
              alignItems: "center",
              marginRight: 10,
            }}
            onPress={() => {
              setSelectedRating(null);
              setSelectedJobType(null);
              setSelectedAvailability(null);
            }}
          >
            <Text style={{ fontWeight: "600", color: "#333" }}>Resetar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#007BFF",
              borderRadius: 8,
              padding: 14,
              alignItems: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ fontWeight: "600", color: "#fff" }}>Aplicar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

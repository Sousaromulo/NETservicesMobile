// src/screens/ProfileScreen.js
import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Switch, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: "#fff" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 18, fontWeight: "600" }}>Perfil</Text>
        <View style={{ width: 24 }} /> 
      </View>

      {/* Card do usuário */}
      <View style={{ backgroundColor: "#fff", margin: 16, padding: 16, borderRadius: 12, flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
          style={{ width: 60, height: 60, borderRadius: 30, marginRight: 12 }}
        />
        <View>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Francisco Austin</Text>
          <Text style={{ color: "#666", fontSize: 14 }}>francisco_austin1907@gmail.com</Text>
        </View>
      </View>

      {/* Outras configurações */}
      <Text style={{ marginLeft: 16, marginBottom: 8, fontWeight: "600", color: "#333" }}>
        Outras configurações
      </Text>

      <View style={{ backgroundColor: "#fff", marginHorizontal: 16, borderRadius: 12 }}>
        <MenuItem icon="pencil" label="Editar perfil" onPress={() => {}} />
        <MenuItem icon="briefcase" label="Anunciar Serviços" onPress={() => navigation.navigate("AnunciarServicos")} />
        <MenuItem icon="notifications-outline" label="Notificações" onPress={() => navigation.navigate("Notifications")} />
        <MenuItem icon="lock-closed-outline" label="Segurança" onPress={() => {}} />
        
        {/* Tema escuro com Switch */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16, borderTopWidth: 1, borderColor: "#eee" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="moon-outline" size={22} color="#333" style={{ marginRight: 12 }} />
            <Text style={{ fontSize: 16 }}>Tema escuro</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </View>

      {/* Suporte e Sobre */}
      <View style={{ backgroundColor: "#fff", margin: 16, borderRadius: 12 }}>
        <MenuItem icon="help-circle-outline" label="Ajuda e Suporte" onPress={() => {}} />
        <MenuItem icon="information-circle-outline" label="Sobre Nós" onPress={() => {}} />
      </View>

      {/* Sair */}
      <View style={{ backgroundColor: "#fff", marginHorizontal: 16, borderRadius: 12 }}>
        <MenuItem
          icon="exit-outline"
          label="Sair"
          color="red"
          onPress={() => navigation.replace("Auth")}
          chevronColor="red"
        />
      </View>
    </SafeAreaView>
  );
}

// 🔹 Componente de item do menu
function MenuItem({ icon, label, onPress, color = "#333", chevronColor = "#999" }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderTopWidth: 1,
        borderColor: "#eee",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name={icon} size={22} color={color} style={{ marginRight: 12 }} />
        <Text style={{ fontSize: 16, color }}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={chevronColor} />
    </TouchableOpacity>
  );
}

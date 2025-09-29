// src/screens/ContractNotificationsScreen.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContractNotificationsScreen({ navigation }) {
  const notifications = [
    {
      id: "1",
      title: "Nome do contratante",
      desc: "Solicitou seus serviços no dia e hora combinados.",
      action: true,
    },
    {
      id: "2",
      title: "Pagamento recebido com sucesso",
      desc: "O pagamento já está em conta.",
      action: false,
    },
    {
      id: "3",
      title: "Pagamento efetuado com sucesso",
      desc: "O pagamento foi confirmado.",
      action: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notificações</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
            {item.action ? (
              <TouchableOpacity
                style={styles.actionBtn}
                onPress={() => navigation.navigate("ContractConfirm")}
              >
                <Text style={styles.actionText}>Registrar Serviço</Text>
              </TouchableOpacity>
            ) : (
              <Ionicons name="checkmark-circle" size={24} color="#3B82F6" />
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  desc: { fontSize: 14, color: "#555" },
  actionBtn: {
    backgroundColor: "#E0E7FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  actionText: { color: "#3B82F6", fontWeight: "600" },
});

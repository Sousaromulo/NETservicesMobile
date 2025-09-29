// src/screens/PaymentConfirmationScreen.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function PaymentConfirmationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pagamento</Text>
        <MaterialIcons name="help-outline" size={22} color="#000" />
      </View>

      {/* Card Contratante */}
      <View style={styles.card}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.image}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.name}>Nome do Contratado</Text>
          <Text style={styles.subtitle}>Informações do contratado</Text>
          <Text style={styles.rating}>⭐ 5,0 | 10 avaliações</Text>
        </View>
        <Text style={styles.code}>#6544</Text>
      </View>

      {/* Datas */}
      <View style={styles.infoBox}>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Data marcada</Text>
          <Text style={styles.value}>28 agosto 2025</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Data contratada</Text>
          <Text style={styles.value}>24 agosto 2025</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Horário</Text>
          <Text style={styles.value}>08h - 10h</Text>
        </View>
      </View>

      {/* Valores */}
      <View style={styles.infoBox}>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Preço do serviço</Text>
          <Text style={styles.value}>R$ 54</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Taxa contratada</Text>
          <Text style={styles.value}>R$ 3</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>R$ 57</Text>
        </View>
      </View>

      {/* Método de Pagamento */}
      <View style={styles.paymentBox}>
        <Text style={styles.label}>Método de Pagamento</Text>
        <View style={styles.rowBetween}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/0/04/Pix_logo.png",
              }}
              style={{ width: 28, height: 28, marginRight: 8 }}
            />
            <Text style={styles.value}>Pix</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PaymentMethod")}
          >
            <Text style={styles.change}>Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão Confirmar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PaymentDynamic", { method: "Pix" })}
      >
        <Text style={styles.buttonText}>Confirmar pagamento</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 18, fontWeight: "600" },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  image: { width: 50, height: 50, borderRadius: 25 },
  name: { fontSize: 16, fontWeight: "600" },
  subtitle: { fontSize: 12, color: "#555" },
  rating: { fontSize: 12, color: "#888" },
  code: { fontWeight: "600", color: "#444" },

  infoBox: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: { fontSize: 14, color: "#555" },
  value: { fontSize: 14, fontWeight: "500" },
  total: { fontSize: 16, fontWeight: "700", color: "#000" },

  paymentBox: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  change: { fontSize: 14, fontWeight: "600", color: "#2a7be4" },

  button: {
    backgroundColor: "#2a7be4",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});

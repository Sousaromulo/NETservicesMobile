// src/screens/PaymentDynamicScreen.js
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";

export default function PaymentDynamicScreen({ route, navigation }) {
  const { method } = route.params; // "Pix" ou "Boleto"

  // ⏳ Timer de expiração (exemplo: 30 min)
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pagamento</Text>
        <View style={{ width: 22 }} />
      </View>

      {method === "Pix" ? (
        <>
          {/* PIX QR Code */}
          <Text style={styles.label}>O pagamento expira em:</Text>
          <Text style={styles.timer}>{formatTime(timeLeft)}</Text>

          <View style={styles.qrContainer}>
            <QRCode value="chave-pix-exemplo-123456789" size={160} />
          </View>

          <View style={styles.copyBox}>
            <Text numberOfLines={1} style={styles.codeText}>
              asdfghjklzxcvbnmqwertyuiop123456
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Copiar código</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* BOLETO */}
          <Text style={styles.label}>Resumo do Boleto</Text>

          <View style={styles.boletoBox}>
            <Text style={styles.boletoText}>
              Banco: 341 - Itaú Unibanco S.A.
            </Text>
            <Text style={styles.boletoText}>
              Vencimento: 30/09/2025
            </Text>
            <Text style={styles.boletoText}>
              Valor: R$ 57,00
            </Text>
            <Text style={styles.boletoText}>
              Beneficiário: Nome da Empresa LTDA
            </Text>
            <Text style={styles.boletoText}>
              Pagador: Cliente Exemplo
            </Text>
            <Text style={styles.boletoText}>
              Linha digitável:
            </Text>
            <Text style={styles.codeText}>
              34191.79001 01043.510047 91020.150008 9 92380000005700
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Copiar código de barras</Text>
          </TouchableOpacity>
        </>
      )}
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
  label: { fontSize: 14, color: "#444", marginBottom: 6 },
  timer: { fontSize: 20, fontWeight: "700", marginBottom: 16 },
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  copyBox: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  codeText: { fontSize: 13, color: "#333" },
  button: {
    backgroundColor: "#2a7be4",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  boletoBox: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  boletoText: { fontSize: 14, marginBottom: 6, color: "#333" },
});

// src/screens/ContractConfirmScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContractConfirmScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notificações</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Nome do contratado</Text>
        <Text style={styles.desc}>Endereço do contratado</Text>

        <Text style={styles.desc}>Dias reservados: 08 agosto 2025</Text>
        <Text style={styles.desc}>Horas reservadas: 08h - 10h</Text>
        <Text style={styles.desc}>Dias contratados: 2</Text>

        <Text style={styles.desc}>Local de Atendimento:</Text>
        <TouchableOpacity style={styles.locationBtn}>
          <Text style={styles.locationText}>Localização do cliente</Text>
        </TouchableOpacity>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.registerText}>Confirmar Serviço</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.continueBtn}>
            <Text style={styles.continueText}>Cancelar Serviço</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal de confirmação */}
      <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Ionicons
              name="checkmark-circle"
              size={80}
              color="#3B82F6"
              style={{ marginBottom: 16 }}
            />
            <Text style={styles.modalTitle}>Serviço confirmado com sucesso</Text>
            <Text style={styles.modalDesc}>
              Aguarde até o dia e horário marcado para realizar o serviço.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("HomeScreen"); // ajuste a rota inicial se for diferente
              }}
            >
              <Text style={styles.modalButtonText}>Voltar ao início</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  card: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
  },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  desc: { fontSize: 14, color: "#555", marginBottom: 8 },
  locationBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  locationText: { color: "#555" },
  buttonRow: { flexDirection: "row", marginTop: 16, gap: 10 },
  registerBtn: {
    flex: 1,
    backgroundColor: "#E0E7FF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  registerText: { color: "#3B82F6", fontWeight: "600" },
  continueBtn: {
    flex: 1,
    backgroundColor: "#3B82F6",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  continueText: { color: "#fff", fontWeight: "600" },

  // --- estilos do modal ---
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "700", textAlign: "center" },
  modalDesc: {
    fontSize: 14,
    color: "#f5f0f0ff",
    textAlign: "center",
    marginVertical: 12,
  },
  modalButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  modalButtonText: { color: "#fff", fontWeight: "600" },
});

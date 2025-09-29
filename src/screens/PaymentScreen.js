// src/screens/PaymentScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function PaymentScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleAddCard = () => {
    console.log({ cardNumber, cardName, expiry, cvv });
    setModalVisible(false);
    setCardNumber("");
    setCardName("");
    setExpiry("");
    setCvv("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.addCardButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addCardText}>Add New Card</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Add New Card</Text>

            {/* Card Number */}
            <View style={styles.inputContainer}>
              <FontAwesome name="credit-card" size={20} color="#555" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Card Number"
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
              />
            </View>

            {/* Name */}
            <View style={styles.inputContainer}>
              <FontAwesome name="user" size={20} color="#555" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Name on Card"
                value={cardName}
                onChangeText={setCardName}
              />
            </View>

            {/* Expiry */}
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="calendar-month" size={20} color="#555" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Expiry (MM/YY)"
                value={expiry}
                onChangeText={setExpiry}
              />
            </View>

            {/* CVV */}
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="lock" size={20} color="#555" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="CVV"
                keyboardType="numeric"
                value={cvv}
                onChangeText={setCvv}
                secureTextEntry
              />
            </View>

            {/* Buttons */}
            <TouchableOpacity style={styles.saveButton} onPress={handleAddCard}>
              <Text style={styles.saveText}>Save Card</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f2f2f2" },
  addCardButton: { padding: 15, backgroundColor: "#007AFF", borderRadius: 10 },
  addCardText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: "center" },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginVertical: 7,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16 },

  saveButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    alignItems: "center",
  },
  saveText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  cancelButton: { marginTop: 10, alignItems: "center" },
  cancelText: { color: "#ff3b30", fontWeight: "bold", fontSize: 16 },
});

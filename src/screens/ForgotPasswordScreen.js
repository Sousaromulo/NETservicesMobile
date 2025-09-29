// src/screens/ForgotPasswordScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ForgotPasswordScreen({ navigation }) {
  const [selectedMethod, setSelectedMethod] = useState("sms");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recuperar senha</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Image cadeado */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/loked.png")}
          style={styles.image}
        />
      </View>

      {/* Texto instrução */}
      <Text style={styles.instruction}>
        Selecione quais detalhes de contato devemos usar para redefinir sua
        senha
      </Text>

      {/* Opção via SMS */}
      <TouchableOpacity
        style={[
          styles.optionBox,
          selectedMethod === "sms" && styles.optionSelected,
        ]}
        onPress={() => setSelectedMethod("sms")}
      >
        <MaterialIcons name="sms" size={24} color="#007bff" />
        <Text style={styles.optionText}>via SMS: +55 (88) *****51</Text>
      </TouchableOpacity>

      {/* Opção via Email */}
      <TouchableOpacity
        style={[
          styles.optionBox,
          selectedMethod === "email" && styles.optionSelected,
        ]}
        onPress={() => setSelectedMethod("email")}
      >
        <MaterialIcons name="email" size={24} color="#007bff" />
        <Text style={styles.optionText}>via Email: Email***@gmail.com</Text>
      </TouchableOpacity>

      {/* Botão Continuar */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("VerifyCodeScreen")} // tela de verificação
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  image: {
    width: 320,
    height: 320,
  },
  instruction: {
    textAlign: "center",
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
    marginTop: 50,
  },
  optionBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    height: 80,
  },
  optionSelected: {
    borderColor: "#007bff",
    backgroundColor: "#f0f8ff",
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  continueButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  continueText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});

// src/screens/ResetPasswordScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

export default function ResetPasswordScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Função para validar e redefinir a senha
  const handleReset = () => {
    if (!password || !confirmPassword) {
      alert("Preencha todos os campos");
      return;
    }
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    // Aqui você pode chamar sua API para redefinir a senha
    Alert.alert("", "Senha redefinida com sucesso.");
    navigation.navigate("Auth"); // volta para tela de login
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Redefinir senha</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Ícone */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2889/2889676.png", // cadeado com chave
          }}
          style={styles.image}
        />
      </View>

      {/* Texto instrução */}
      <Text style={styles.instruction}>
        Digite e confirme sua nova senha para continuar
      </Text>

      {/* Input Nova senha */}
      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Nova senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Input Confirmar senha */}
      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={20} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Botão Confirmar */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleReset}>
        <Text style={styles.confirmText}>Confirmar</Text>
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
    width: 120,
    height: 120,
  },
  instruction: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 8,
  },
  confirmButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  confirmText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});

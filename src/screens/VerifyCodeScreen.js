// src/screens/VerifyCodeScreen.js
import React, { useState, useRef, useEffect } from "react";
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

export default function VerifyCodeScreen({ navigation }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  // 📌 Timer de 2 minutos
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleConfirm = () => {
    const finalCode = code.join("");
    if (finalCode.length === 4) {
      navigation.navigate("ResetPasswordScreen"); // ou "ResetPasswordScreen" dependendo do fluxo
    } else {
      alert("Digite o código completo");
    }
  };

  const handleResend = () => {
    if (!canResend) return;
    setTimeLeft(120);
    setCanResend(false);
    alert("Novo código enviado!");
  };

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verificação</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Ícone */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
          }}
          style={styles.image}
        />
      </View>

      <Text style={styles.instruction}>
        Digite o código enviado para seu telefone/email
      </Text>

      {/* Inputs */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {/* Botão Confirmar */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>

      {/* Botão Reenviar SEMPRE visível */}
      <TouchableOpacity
        style={[styles.resendButton, !canResend && { opacity: 0.5 }]}
        disabled={!canResend}
        onPress={handleResend}
      >
        <Text style={styles.resendText}>
          {canResend
            ? "Reenviar código"
            : `Reenviar código em ${formatTime(timeLeft)}`}
        </Text>
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
    width: 220,
    height: 220,
  },
  instruction: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 30,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 10,
    width: 60,
    height: 60,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  confirmButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  confirmText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  resendButton: {
    marginTop: 15,
    padding: 10,
    alignItems: "center",
  },
  resendText: {
    color: "#007bff",
    textAlign: "center",
    fontSize: 14,
  },
});

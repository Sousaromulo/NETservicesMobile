// src/screens/ContractorInfoScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PaymentMethodScreen from "./PaymentMethodScreen";

export default function ContractorInfoScreen({ navigation }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const validateForm = () => {
    if (!name.trim()) {
      Alert.alert("Atenção", "O primeiro nome é obrigatório.");
      return false;
    }
    if (!lastName.trim()) {
      Alert.alert("Atenção", "O sobrenome é obrigatório.");
      return false;
    }
    if (!birthDate.trim()) {
      Alert.alert("Atenção", "A data de nascimento é obrigatória.");
      return false;
    }
    if (!email.includes("@")) {
      Alert.alert("Atenção", "Digite um e-mail válido.");
      return false;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      Alert.alert("Atenção", "Digite um telefone válido.");
      return false;
    }
    return true;
  };

  const handleContinue = () => {
    if (validateForm()) {
      // 👇 aqui você pode salvar os dados ou passar para a próxima tela
      navigation.navigate("CheckoutScreen", {
        name,
        lastName,
        birthDate,
        email,
        phone,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Informações do contratante</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Primeiro Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={lastName}
          onChangeText={setLastName}
        />
        <View style={styles.inputIcon}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Data de Nascimento"
            value={birthDate}
            onChangeText={setBirthDate}
          />
          <Ionicons name="calendar" size={20} color="#999" />
        </View>
        <View style={styles.inputIcon}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Ionicons name="mail" size={20} color="#999" />
        </View>
        <View style={styles.inputIcon}>
          <Text style={styles.flag}>🇧🇷</Text>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="+55 (DDD) 99999-9999"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("PaymentMethod") }
                >
        <Text style={styles.buttonText}>Continue</Text>
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
    marginBottom: 20,
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  form: {
    flex: 1,
    gap: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  inputIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#f9f9f9",
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
  flag: {
    fontSize: 20,
    marginRight: 8,
  },
  button: {
    backgroundColor: "#4A6CF7",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

// src/screens/FillProfileScreen.js

import React, { useState } from "react";
import {
  SafeAreaView, // Container seguro para diferentes dispositivos (notch, status bar)
  View, // Contêiner genérico para layout
  Text, // Para exibir textos
  TextInput, // Campo de entrada de texto
  TouchableOpacity, // Botão touchable
  StyleSheet, // Para estilização
  Alert, // Alertas nativos
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ícones
import { Picker } from "@react-native-picker/picker"; // Picker para seleção de opções

// Tela de preenchimento de perfil do usuário
export default function FillProfileScreen({ navigation }) {
  // Estados para armazenar os valores dos inputs
  const [fullName, setFullName] = useState(""); // Nome completo
  const [nickname, setNickname] = useState(""); // Apelido
  const [birthDate, setBirthDate] = useState(""); // Data de nascimento
  const [email, setEmail] = useState(""); // Email
  const [phone, setPhone] = useState(""); // Telefone
  const [gender, setGender] = useState(""); // Gênero selecionado

  // Estado para armazenar mensagens de erro de validação
  const [errors, setErrors] = useState({});

  // Função de validação dos campos do formulário
  const validate = () => {
    let newErrors = {};

    // Validações individuais de cada campo
    if (!fullName.trim()) newErrors.fullName = "Nome completo é obrigatório.";
    if (!nickname.trim()) newErrors.nickname = "Apelido é obrigatório.";
    if (!birthDate.trim())
      newErrors.birthDate = "Data de nascimento é obrigatória.";
    if (!email.trim()) {
      newErrors.email = "Email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido.";
    }
    if (!phone.trim()) {
      newErrors.phone = "Telefone é obrigatório.";
    } else if (!/^\d{8,15}$/.test(phone.replace(/\D/g, ""))) {
      newErrors.phone = "Número de telefone inválido.";
    }
    if (!gender) newErrors.gender = "Selecione o gênero.";

    // Atualiza o estado de erros
    setErrors(newErrors);

    // Retorna true se não houver erros
    return Object.keys(newErrors).length === 0;
  };

  // Função chamada ao clicar no botão Continue
  const handleContinue = () => {
    if (validate()) {
      // Mostra um alerta de sucesso
      Alert.alert("Sucesso", "Perfil preenchido com sucesso!", [
        {
          text: "OK",
          // Navega para a HomeScreen dentro do Tab Navigator MainTabs
          onPress: () => navigation.navigate("MainTabs", { screen: "HomeTab" }),
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Botão de voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Preencha seu perfil</Text>
      </View>

      {/* Avatar do usuário */}
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle-outline" size={100} color="#9C6ADE" />
      </View>

      {/* Inputs de texto */}
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={fullName}
        onChangeText={setFullName} // Atualiza estado fullName
      />
      {errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Apelido"
        value={nickname}
        onChangeText={setNickname} // Atualiza estado nickname
      />
      {errors.nickname && <Text style={styles.error}>{errors.nickname}</Text>}

      {/* Data de nascimento com ícone */}
      <View style={styles.inputIcon}>
        <TextInput
          style={styles.inputFlex}
          placeholder="Data de nascimento (dd/mm/aaaa)"
          value={birthDate}
          onChangeText={setBirthDate} // Atualiza estado birthDate
        />
        <Ionicons name="calendar-outline" size={20} color="#888" />
      </View>
      {errors.birthDate && <Text style={styles.error}>{errors.birthDate}</Text>}

      {/* Email com ícone */}
      <View style={styles.inputIcon}>
        <TextInput
          style={styles.inputFlex}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail} // Atualiza estado email
        />
        <Ionicons name="mail-outline" size={20} color="#888" />
      </View>
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      {/* Telefone */}
      <View>
        <TextInput
          style={[styles.input, { paddingLeft: 15 }]}
          placeholder="Número de telefone"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone} // Atualiza estado phone
        />
      </View>
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

      {/* Picker para seleção de gênero */}
      <View style={styles.picker}>
        <Picker selectedValue={gender} onValueChange={setGender}>
          <Picker.Item label="Gênero" value="" />
          <Picker.Item label="Masculino" value="male" />
          <Picker.Item label="Feminino" value="female" />
          <Picker.Item label="Outro" value="other" />
        </Picker>
      </View>
      {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}

      {/* Botão Continue */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  header: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  headerTitle: { fontSize: 18, fontWeight: "600", marginLeft: 10 },
  avatarContainer: { alignItems: "center", marginVertical: 20 },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  inputIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  inputFlex: { flex: 1, paddingVertical: 10 },
  picker: { backgroundColor: "#F5F5F5", borderRadius: 8, marginBottom: 8 },
  button: {
    backgroundColor: "#4A3AFF",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  error: { color: "red", fontSize: 12, marginBottom: 5, marginLeft: 5 },
});

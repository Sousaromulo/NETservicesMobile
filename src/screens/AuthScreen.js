// src/screens/AuthScreen.js

import React, { useState } from "react";
import {
  SafeAreaView, // Container seguro para dispositivos com notch/status bar
  View, // Contêiner genérico
  Text, // Para exibir textos
  TextInput, // Campo de entrada de texto
  TouchableOpacity, // Botões touchables
  Modal, // Modal nativo
  Image, // Para exibir imagens
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons"; // Ícones
import styles from "../styles/styles";

// Tela de autenticação/login do usuário
export default function AuthScreen({ navigation }) {
  // ---------------------- ESTADOS ----------------------
  const [checked, setChecked] = useState(false); // Estado do checkbox "Relembre-me"
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle visibilidade da senha
  const [password, setPassword] = useState(""); // Armazena senha digitada
  const [email, setEmail] = useState(""); // Armazena email digitado
  const [errors, setErrors] = useState({}); // Armazena mensagens de erro de validação
  const [showAccountTypeModal, setShowAccountTypeModal] = useState(false); // Controle do modal de tipo de conta
  const [selectedType, setSelectedType] = useState("profissional"); // Tipo de conta selecionada no modal

  // ---------------------- FUNÇÃO LOGIN ----------------------
  const handleLogin = () => {
    let newErrors = {};

    // Validação de campos obrigatórios
    if (!email.trim()) {
      newErrors.email = "O campo e-mail é obrigatório.";
    } else {
      // Validação de formato de e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = "Digite um e-mail válido.";
      }
    }

    if (!password.trim()) newErrors.password = "O campo senha é obrigatório.";

    setErrors(newErrors);

    // Se não houver erros, abre o modal de escolha do tipo de conta
    if (Object.keys(newErrors).length === 0) {
      setShowAccountTypeModal(true);
    }
  };

  // ---------------------- CONFIRMAR TIPO DE CONTA ----------------------
  const handleConfirmAccountType = () => {
    setShowAccountTypeModal(false); // Fecha o modal
    // Navega para a tela de preenchimento de perfil passando o tipo de conta selecionado
    navigation.replace("MainTabs"); // Redireciona para a tela principal
  };

  return (
    <SafeAreaView
      style={[
        styles.center, // Centraliza conteúdo
        { justifyContent: "center", paddingHorizontal: 20 },
      ]}
    >
      {/* ---------------------- TÍTULO ---------------------- */}
      <Text style={styles.entrar}>Entre na sua conta</Text>

      {/* ---------------------- CAMPO E-MAIL ---------------------- */}
      <TextInput
        placeholder="E-mail"
        style={[
          styles.inputEmail,
          { width: "100%", borderColor: errors.email ? "red" : "#ddd" },
        ]}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (errors.email) setErrors({ ...errors, email: null }); // Limpa erro ao digitar
        }}
      />
      {errors.email && (
        <Text style={{ color: "red", marginTop: 4 }}>{errors.email}</Text>
      )}

      {/* ---------------------- CAMPO SENHA ---------------------- */}
      <View style={{ position: "relative", width: "100%", marginTop: 10 }}>
        <TextInput
          placeholder="Senha"
          secureTextEntry={!passwordVisible} // Oculta/mostra a senha
          style={[
            styles.inputSenha,
            { borderColor: errors.password ? "red" : "#ddd" },
          ]}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (errors.password) setErrors({ ...errors, password: null }); // Limpa erro
          }}
        />
        {/* Botão para mostrar/ocultar senha */}
        <TouchableOpacity
          style={{ position: "absolute", right: 10, top: 32 }}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Ionicons
            name={passwordVisible ? "eye" : "eye-off"}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      </View>
      {errors.password && (
        <Text style={{ color: "red", marginTop: 4 }}>{errors.password}</Text>
      )}

      {/* ---------------------- LINK ESQUECEU A SENHA ---------------------- */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword")}
        style={{ alignSelf: "flex-end", marginTop: 8, marginBottom: 16 }}
      >
        <Text style={{ color: "#2b6cb0", fontSize: 14 }}>
          Esqueceu a senha?
        </Text>
      </TouchableOpacity>

      {/* ---------------------- CHECKBOX RELEMBRE-ME ---------------------- */}
      <TouchableOpacity
        onPress={() => setChecked(!checked)}
        style={{
          flexDirection: "row",
          marginRight: "auto",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <View style={styles.checkbox}>
          {checked && <Ionicons name="checkmark" size={18} color="#007bff" />}
        </View>
        <Text style={{ marginLeft: 8, fontSize: 16 }}>Relembre-me</Text>
      </TouchableOpacity>

      {/* ---------------------- BOTÃO LOGIN ---------------------- */}
      <TouchableOpacity
        style={[styles.primaryBtn, { width: "100%", marginBottom: 16 }]}
        onPress={handleLogin}
      >
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

      {/* ---------------------- LOGIN SOCIAL ---------------------- */}
      <View
        style={[
          styles.socialRow,
          { justifyContent: "space-around", width: "90%", marginTop: 60 },
        ]}
      >
        <TouchableOpacity onPress={() => console.log("Login com Google")}>
          <Image
            source={require("../../assets/google.png")}
            style={{ width: 48, height: 48, marginRight: 20 }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Login com Facebook")}>
          <Image
            source={require("../../assets/facebook.png")}
            style={{ width: 48, height: 48, marginRight: 10 }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Login com Apple")}>
          <Image
            source={require("../../assets/apple.png")}
            style={{ width: 48, height: 48 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* ---------------------- LINK PARA REGISTRO ---------------------- */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{ marginBottom: 20 }}
      >
        <Text style={{ color: "#2b6cb0", fontSize: 16, marginTop: 40 }}>
          Ainda não possui conta? Criar conta
        </Text>
      </TouchableOpacity>

      {/* ---------------------- MODAL DE ESCOLHA DE TIPO DE CONTA ---------------------- */}
      <Modal
        transparent
        visible={showAccountTypeModal}
        animationType="slide"
        onRequestClose={() => setShowAccountTypeModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)", // Fundo semitransparente
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 12,
              width: "90%",
              position: "relative",
            }}
          >
            {/* Botão fechar modal */}
            <TouchableOpacity
              onPress={() => setShowAccountTypeModal(false)}
              style={{ position: "absolute", right: 10, top: 10 }}
            >
              <Ionicons name="close" size={28} color="#333" />
            </TouchableOpacity>

            {/* Título e subtítulo */}
            <Text
              style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}
            >
              Crie sua
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>
              Deseja criar conta como?
            </Text>

            {/* Opções de tipo de conta */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              {/* Profissional */}
              <TouchableOpacity
                onPress={() => setSelectedType("profissional")}
                style={{
                  flex: 1,
                  padding: 12,
                  marginRight: 8,
                  borderWidth: 1.5,
                  borderColor:
                    selectedType === "profissional" ? "#4a6cf7" : "#ddd",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: selectedType === "profissional" ? "#4a6cf7" : "#000",
                    fontWeight:
                      selectedType === "profissional" ? "bold" : "normal",
                  }}
                >
                  Profissional
                </Text>
              </TouchableOpacity>

              {/* Pessoa */}
              <TouchableOpacity
                onPress={() => setSelectedType("pessoa")}
                style={{
                  flex: 1,
                  padding: 12,
                  marginLeft: 8,
                  borderWidth: 1.5,
                  borderColor: selectedType === "pessoa" ? "#4a6cf7" : "#ddd",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: selectedType === "pessoa" ? "#4a6cf7" : "#000",
                    fontWeight: selectedType === "pessoa" ? "bold" : "normal",
                  }}
                >
                  Pessoa
                </Text>
              </TouchableOpacity>
            </View>

            {/* Texto explicativo condicional */}
            <Text style={{ fontSize: 14, color: "#555", marginBottom: 20 }}>
              {selectedType === "profissional"
                ? "Ao se registrar como profissional, você poderá anunciar e oferecer seus serviços na plataforma, além de também ter a opção de contratar serviços de outros usuários."
                : "Ao se registrar como pessoa, você poderá contratar serviços e comprar produtos de profissionais e lojas já cadastrados."}
            </Text>

            {/* Botão confirmar tipo de conta */}
            <TouchableOpacity
              style={{
                backgroundColor: "#4a6cf7",
                padding: 14,
                borderRadius: 25,
                alignItems: "center",
              }}
              onPress={handleConfirmAccountType}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                Entrar como {selectedType === "profissional" ? "Profissional" : "Pessoa"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

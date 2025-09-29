// src/screens/RegisterScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import styles from "../styles/styles"; // Importa estilos personalizados
import { Ionicons, AntDesign } from "@expo/vector-icons"; // Importa ícones

export default function AuthScreen({ navigation }) {
  // ---------------------- ESTADOS ----------------------
  const [checked, setChecked] = useState(false); // Estado do checkbox "Relembre-me"
  const [passwordVisible, setPasswordVisible] = useState(false); // Controle da visibilidade da senha
  const [password, setPassword] = useState(""); // Armazena a senha digitada
  const [confirmPassword, setConfirmPassword] = useState(""); // Armazena a confirmação de senha
  const [email, setEmail] = useState(""); // Armazena o e-mail digitado
  const [errors, setErrors] = useState({}); // Armazena mensagens de erro
  const [showAccountTypeModal, setShowAccountTypeModal] = useState(false); // Controle do modal de tipo de conta
  const [selectedType, setSelectedType] = useState("profissional"); // Tipo de conta selecionado

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

    // Validação de senha
    if (!password.trim()) newErrors.password = "O campo senha é obrigatório.";

    setErrors(newErrors);

    // Verifica se senha e confirmação coincidem
    if (password && confirmPassword && password !== confirmPassword)
      newErrors.confirmPassword = "As senhas não coincidem.";

    setErrors(newErrors);

    // Se não houver erros, abre o modal de escolha do tipo de conta
    if (Object.keys(newErrors).length === 0) {
      setShowAccountTypeModal(true);
    }
  };

  // ---------------------- CONFIRMAR TIPO DE CONTA ----------------------
  const handleConfirmAccountType = () => {
    setShowAccountTypeModal(false); // Fecha modal
    navigation.navigate("FillProfile", { accountType: selectedType });
  };

  return (
    <SafeAreaView
      style={[
        styles.center,
        { justifyContent: "center", paddingHorizontal: 20 },
      ]}
    >
      {/* Título da tela */}
      <Text style={styles.entrar}>Crie na sua conta</Text>

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
          if (errors.email) setErrors({ ...errors, email: null }); // Remove erro se corrigido
        }}
      />
      {errors.email && (
        <Text style={{ color: "red", marginTop: 4 }}>{errors.email}</Text>
      )}

      {/* ---------------------- CAMPO SENHA ---------------------- */}
      <View style={{ position: "relative", width: "100%", marginTop: 10 }}>
        <TextInput
          placeholder="Senha"
          secureTextEntry={!passwordVisible} // Oculta/mostra senha
          style={[
            styles.inputSenha,
            { borderColor: errors.password ? "red" : "#ddd" },
          ]}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (errors.password) setErrors({ ...errors, password: null });
          }}
        />
        {/* Ícone de olho para alternar visibilidade */}
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

      {/* ---------------------- CAMPO CONFIRMAR SENHA ---------------------- */}
      <View style={{ position: "relative", width: "100%", marginTop: 10 }}>
        <TextInput
          placeholder="Confirmar senha"
          secureTextEntry={!passwordVisible} // Oculta/mostra senha
          style={[
            styles.inputSenha,
            { borderColor: errors.confirmPassword ? "red" : "#ddd" },
          ]}
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            if (errors.confirmPassword)
              setErrors({ ...errors, confirmPassword: null });
          }}
        />
        {/* Ícone de olho compartilhado com o campo senha */}
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
      {errors.confirmPassword && (
        <Text style={{ color: "red", marginTop: 4 }}>
          {errors.confirmPassword}
        </Text>
      )}

      {/* ---------------------- CHECKBOX "RELEMBRE-ME" ---------------------- */}
      <TouchableOpacity
        onPress={() => setChecked(!checked)}
        style={{
          flexDirection: "row",
          marginRight: "auto",
          marginTop: 16,
          alignItems: "center",
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
          { justifyContent: "space-around", width: "90%", marginTop: 40 },
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

      {/* ---------------------- LINK PARA LOGIN ---------------------- */}
      <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
        <Text style={{ color: "#2b6cb0", fontSize: 16 }}>
          Já possui conta? Login
        </Text>
      </TouchableOpacity>

      {/* ---------------------- MODAL TIPO DE CONTA ---------------------- */}
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

            {/* Título e subtítulo modal */}
            <Text
              style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}
            >
              Crie sua
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>
              Deseja criar conta como?
            </Text>

            {/* ---------------------- OPÇÕES DE TIPO DE CONTA ---------------------- */}
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

            {/* Texto explicativo dependendo do tipo de conta */}
            {selectedType === "profissional" ? (
              <Text style={{ fontSize: 14, color: "#555", marginBottom: 20 }}>
                Ao se registrar como{" "}
                <Text style={{ fontWeight: "bold" }}>profissional</Text>, você
                poderá anunciar e oferecer seus serviços na plataforma, além de
                também ter a opção de contratar serviços de outros usuários.
              </Text>
            ) : (
              <Text style={{ fontSize: 14, color: "#555", marginBottom: 20 }}>
                Ao se registrar como{" "}
                <Text style={{ fontWeight: "bold" }}>pessoa</Text>, você poderá
                contratar serviços e comprar produtos de profissionais e lojas
                já cadastrados.
              </Text>
            )}

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
                Criar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

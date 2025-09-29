// Tela de Onboarding/Login (OnboardingScreen.js) 
import React from "react";
import {SafeAreaView,ScrollView, Text, TouchableOpacity, Image, View,} from "react-native";
import styles from "../styles/styles";
import { FontAwesome } from "@expo/vector-icons";

// Tela de Onboarding/Login (OnboardingScreen)
// Essa tela é responsável por exibir as opções de login do usuário,
// permitindo autenticação com Facebook, Google, Apple ou login direto pelo app.
// Também contém divisórias visuais e estilização personalizada.

export default function OnboardingScreen({ navigation }) {
  return (
    // SafeAreaView garante que o conteúdo respeite as áreas seguras da tela (notch, status bar, etc).
    <SafeAreaView style={styles.container}>
      {/* ScrollView permite rolagem do conteúdo caso a tela seja pequena */}
      <ScrollView contentContainerStyle={{ padding: 20, alignItems: "center" }}>
        {/* Título da tela */}
        <Text style={styles.h4}>Login</Text>

        {/* Botão de login com Facebook */}
        <TouchableOpacity
          style={styles.btnentrar1}
          onPress={() => console.log("Login com Facebook")}
        >
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.Image}
            width={20}
            height={20}
          />
          <Text style={styles.btnText1}>Continuar com Facebook</Text>
        </TouchableOpacity>

        {/* Botão de login com Google */}
        <TouchableOpacity
          style={styles.btnentrar}
          onPress={() => console.log("Login com Google")}
        >
          <Image
            source={require("../../assets/google.png")}
            style={styles.Image}
          />
          <Text style={styles.btnText1}>Continuar com Google</Text>
        </TouchableOpacity>

        {/* Botão de login com Apple */}
        <TouchableOpacity
          style={styles.btnentrar}
          onPress={() => console.log("Login com Apple")}
        >
          <Image
            source={require("../../assets/apple.png")}
            style={styles.Image}
            width={20}
            height={20}
          />
          <Text style={styles.btnText1}>Continuar com Apple</Text>
        </TouchableOpacity>

        {/* Botão de login direto no aplicativo, 
            redireciona para a tela de autenticação (Auth) */}
        <TouchableOpacity
          style={[styles.primaryBtn, { marginTop: 80, width: 350 }]}
          onPress={() => navigation.replace("Auth")}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        {/* Link para criar conta */}
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <Text style={styles.txt1}>Ainda não possui conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.txt}>Criar conta</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// src/screens/PaymentMethodScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/styles";

export default function PaymentMethodScreen({ navigation }) {
  const [selected, setSelected] = useState("Pix");

  const paymentOptions = [
    { id: "1", name: "Paypal", icon: "paypal" },
    { id: "2", name: "Google Pay", icon: "google" },
    { id: "3", name: "Boleto bancario", icon: "barcode" },
    { id: "4", name: "Pix", icon: "cash" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.option1,
        selected === item.name && { borderColor: "#4A6CF7" },
      ]}
      onPress={() => setSelected(item.name)}
    >
      <View style={styles.optionLeft}>
        {item.icon === "paypal" && (
          <MaterialCommunityIcons name="paypal" size={24} color="#003087" />
        )}
        {item.icon === "google" && (
          <MaterialCommunityIcons name="google" size={24} color="#DB4437" />
        )}
        {item.icon === "barcode" && (
          <MaterialCommunityIcons name="barcode" size={24} color="#444" />
        )}
        {item.icon === "cash" && (
          <MaterialCommunityIcons name="cash" size={24} color="#00C853" />
        )}
        <Text style={styles.optionText}>{item.name}</Text>
      </View>

      <Ionicons
        name={
          selected === item.name
            ? "radio-button-on-outline"
            : "radio-button-off-outline"
        }
        size={22}
        color={selected === item.name ? "#4A6CF7" : "#aaa"}
      />
    </TouchableOpacity>
  );

  const handleContinue = () => {
    navigation.navigate("CheckoutScreen", { paymentMethod: selected });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header9}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle8}>Metodo de pagamento</Text>
        <TouchableOpacity  onPress={() => navigation.navigate("Payment") }
                >
          <Text style={styles.addNew}>Add New Card</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de métodos */}
      <FlatList
        data={paymentOptions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 20 }}
      />

      {/* Botão Continue */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PaymentConfirmationScreen")}
                >
        <Text style={styles.buttonTextT}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
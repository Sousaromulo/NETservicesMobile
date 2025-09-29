// src/screens/ContractDateScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

export default function ContractDateScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hour, setHour] = useState("09-10h");
  const [location, setLocation] = useState("Brasília, Brasil");

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Contratar serviço</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Calendário */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#3B82F6",
          },
        }}
        theme={{
          todayTextColor: "#3B82F6",
          arrowColor: "#3B82F6",
        }}
      />

      {/* Seleção de data/hora/local */}
      <View style={styles.form}>
        <Text style={styles.label}>Data de contrato</Text>
        <Text style={styles.value}>{selectedDate || "Selecione no calendário"}</Text>

        <Text style={styles.label}>Horários</Text>
        <View style={styles.pickerWrapper}>
          <Picker selectedValue={hour} onValueChange={(v) => setHour(v)}>
            <Picker.Item label="09 - 10h" value="09-10h" />
            <Picker.Item label="10 - 11h" value="10-11h" />
            <Picker.Item label="14 - 15h" value="14-15h" />
            <Picker.Item label="15 - 16h" value="15-16h" />
          </Picker>
        </View>

        <Text style={styles.label}>Localização</Text>
        <View style={styles.pickerWrapper}>
          <Picker selectedValue={location} onValueChange={(v) => setLocation(v)}>
            <Picker.Item label="Brasília, Brasil" value="Brasília, Brasil" />
            <Picker.Item label="São Paulo, Brasil" value="São Paulo, Brasil" />
            <Picker.Item label="Rio de Janeiro, Brasil" value="Rio de Janeiro, Brasil" />
          </Picker>
        </View>
      </View>

      {/* Botão continuar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Aqui você pode enviar os dados para próxima tela (Checkout, por exemplo)
          navigation.navigate("ContractorInfo", {
            date: selectedDate,
            hour,
            location,
          });
        }}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  title: { fontSize: 18, fontWeight: "700" },
  form: { marginTop: 16 },
  label: { fontWeight: "600", marginTop: 12 },
  value: { color: "#333", marginTop: 4 },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 6,
  },
  button: {
    backgroundColor: "#3B82F6",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 10,
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});

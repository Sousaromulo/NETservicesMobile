// src/screens/CreateServiceScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";

export default function CreateServiceScreen({ navigation }) {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [serviceType, setServiceType] = useState("Online");
  const [availability, setAvailability] = useState("24H/D");
  const [image, setImage] = useState(null);

  // controle do modal
  const [modalVisible, setModalVisible] = useState(false);

  const handlePublish = () => {
    // aqui poderia salvar o serviço na API / banco
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
      >
        {/* Header */}
        <View style={styles.header1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle1}>Anunciar serviços</Text>
        </View>

        {/* Nome */}
        <Text style={styles.label}>Nome do serviço</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Concerto de ar condicionado"
          value={serviceName}
          onChangeText={setServiceName}
        />

        {/* Descrição */}
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, { height: 90, textAlignVertical: "top" }]}
          placeholder="Explique o que você oferece, tempo estimado, materiais inclusos etc..."
          value={description}
          onChangeText={setDescription}
          multiline
        />

        {/* Preço */}
        <Text style={styles.label}>Preço / Faixa de Preço</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: R$ 100 por diária ou R$ 50/hora"
          value={price}
          onChangeText={setPrice}
        />

        {/* Local */}
        <Text style={styles.label}>Local de Atendimento</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua localização"
          value={location}
          onChangeText={setLocation}
        />

        {/* Foto */}
        <TouchableOpacity style={styles.photoUpload}>
          {image ? (
            <Image source={{ uri: image }} style={styles.preview} />
          ) : (
            <>
              <Ionicons name="camera-outline" size={24} color="#555" />
              <Text style={{ color: "#555", marginLeft: 8 }}>
                Adicionar foto
              </Text>
            </>
          )}
        </TouchableOpacity>

        {/* Tipo de serviço */}
        <Text style={styles.label}>Tipo de serviço</Text>
        <View style={styles.row}>
          {["Online", "Presencial", "Híbrido"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                serviceType === item && styles.optionSelected,
              ]}
              onPress={() => setServiceType(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  serviceType === item && { color: "#fff" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Disponibilidade */}
        <Text style={styles.label}>Disponibilidade</Text>
        <View style={styles.row}>
          {["24H/D", "12H/D", "6H/D", "3H/D"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.optionSmall,
                availability === item && styles.optionSelected,
              ]}
              onPress={() => setAvailability(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  availability === item && { color: "#fff" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Contato */}
        <Text style={styles.label}>Fontes de Contato</Text>
        <TextInput
          style={styles.input}
          placeholder="Email@gmail.com"
          value={contact}
          onChangeText={setContact}
        />

        {/* Botões */}
        <View style={styles.footerButtons}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.publishBtn} onPress={handlePublish}>
            <Text style={styles.publishText}>Publicar anúncio</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal de confirmação */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Ionicons
              name="checkmark-circle"
              size={80}
              color="#3B82F6"
              style={{ marginBottom: 16 }}
            />
            <Text style={styles.modalTitle}>
              Anúncio publicado com sucesso
            </Text>
            <Text style={styles.modalDesc}>
              Volte ao início para ver seu anúncio, ou clique em “Anunciar
              serviços” para ter acesso a ele novamente.
            </Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.returnButton]}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Home"); // ajuste o nome da tela inicial
                }}
              >
                <Text style={styles.returnText}>Voltar ao início</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// src/screens/ServiceDetailsScreen.js
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ServiceDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        {/* Imagem de capa */}
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: "https://img.freepik.com/fotos-gratis/jornalista-trabalhando-na-rua_23-2149307816.jpg" }}
            style={{ width: "100%", height: 200 }}
            resizeMode="cover"
          />
          {/* Botão voltar */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 40,
              left: 16,
              backgroundColor: "rgba(0,0,0,0.6)",
              borderRadius: 20,
              padding: 6,
            }}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Conteúdo */}
        <View style={{ padding: 16 }}>
          
          {/* Título e localização */}
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 4 }}>
            Repórter puliça do norte
          </Text>
          <Text style={{ color: "#666", marginBottom: 12 }}>
            Cajueiras, Manaíba - Brasil
          </Text>

          {/* Serviço + Detalhes */}
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 6 }}>Serviço</Text>
            <Text style={{ color: "#444" }}>Repórter e Diagramação</Text>
          </View>

          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 6 }}>Detalhes</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
              <Ionicons name="videocam-outline" size={22} color="#333" marginLeft={70} />
              <Ionicons name="document-text-outline" size={22} color="#333"  marginLeft={70}/>
              <Ionicons name="settings-outline" size={22} color="#333"  marginLeft={50}/>
            </View>
          </View>

          {/* Perfil do prestador */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
              style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }}
            />
            <View>
              <Text style={{ fontWeight: "600" }}>Nome do usuário</Text>
              <Text style={{ color: "#666" }}>@usuario</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
              <Ionicons name="heart-outline" size={24} color="#444" style={{ marginRight: 16 }} />
              <Ionicons name="share-outline" size={24} color="#444" />
            </View>
          </View>

          {/* Descrição */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 6 }}>Descrição</Text>
            <Text style={{ color: "#444", lineHeight: 20 }}>
              Um profissional criativo, multidisciplinar e confiável. 
              Com grande experiência em reportagem, locução, cobertura de eventos 
              e diagramação. Trabalhos em formato impresso e digital.
            </Text>
          </View>

          {/* Avaliação */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <Text style={{ fontWeight: "600" }}>Avaliação: </Text>
            <Ionicons name="star" size={18} color="#FFD700" />
            <Text style={{ marginLeft: 4, fontWeight: "600" }}>4.8</Text>
            <Text style={{ color: "#666", marginLeft: 6 }}>(110 avaliações)</Text>
          </View>

          {/* Preço + Botão */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#333" }}>R$ 553</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#007BFF",
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 8,
              }}
              onPress={() => navigation.navigate("ContractDate")}
            >
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>Contratar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

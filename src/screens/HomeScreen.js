// src/screens/HomeScreen.js
import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView, // Container seguro para diferentes dispositivos
  View, // Componente de container
  Text, // Componente de texto
  TextInput, // Componente de input
  TouchableOpacity, // Botão clicável
  Image, // Exibição de imagens
  ScrollView, // Scroll vertical ou horizontal
  FlatList, // Lista performática
  Animated, // Animações
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ícones
import * as Location from "expo-location"; // API de localização
import styles from "../styles/styles"; // Estilos externos

export default function HomeScreen({ navigation }) {
  // ------------------- Estados -------------------
  const [address, setAddress] = useState(""); // Endereço do usuário
  const [loadingLocation, setLoadingLocation] = useState(true); // Loading da localização
  const [errorMsg, setErrorMsg] = useState(null); // Mensagem de erro caso localização falhe
  const [refreshing, setRefreshing] = useState(false); // Estado de pull-to-refresh
  const [recentes, setRecentes] = useState([
    // Lista de serviços vistos recentemente
    {
      id: "1",
      nome: "Nome do contratado",
      endereco: "Endereço do contratado",
      rating: 4.9,
      imagem:
        "https://img.freepik.com/fotos-gratis/homem-trabalhando-na-industria_23-2149307835.jpg",
    },
    {
      id: "2",
      nome: "Nome do contratado",
      endereco: "Endereço do contratado",
      rating: 4.7,
      imagem:
        "https://img.freepik.com/fotos-gratis/fabrica-de-producao-com-trabalhador_23-2149307821.jpg",
    },
  ]);
  const [recomendados, setRecomendados] = useState([
    // Lista de serviços recomendados
    {
      id: "1",
      nome: "Nome do contratado",
      endereco: "Endereço do contratado",
      preco: "R$34",
      rating: 4.9,
      imagem: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
    {
      id: "2",
      nome: "Nome do contratado",
      endereco: "Endereço do contratado",
      preco: "R$34",
      rating: 4.8,
      imagem: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
  ]);

  const pullAnim = useRef(new Animated.Value(0)).current; // Animação do pull-to-refresh

  // ------------------- Efeito de localização -------------------
  useEffect(() => {
    (async () => {
      try {
        // Solicita permissão de localização
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permissão de localização negada.");
          setLoadingLocation(false);
          return;
        }

        // Obtém localização atual
        const location = await Location.getCurrentPositionAsync({});
        // Reverte geocódigo para endereço completo
        const reverseGeocode = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        // Monta endereço completo
        if (reverseGeocode.length > 0) {
          const place = reverseGeocode[0];
          const fullAddress = `${place.name ? place.name + ", " : ""}${
            place.street ? place.street + ", " : ""
          }${place.district ? place.district + ", " : ""}${
            place.city ? place.city + ", " : ""
          }${place.region ? place.region : ""}`;
          setAddress(fullAddress);
        }
      } catch (error) {
        setErrorMsg("Erro ao obter localização.");
        console.log(error);
      } finally {
        setLoadingLocation(false);
      }
    })();
  }, []);

  // ------------------- Função pull-to-refresh -------------------
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      // Adiciona novo item à lista de recentes
      const newRecentes = {
        id: (recentes.length + 1).toString(),
        nome: "Novo contratado",
        endereco: "Novo endereço",
        rating: 4.5,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2p5tNDfOHB1SUWDfiITEmzD6dc5D8I8woPQ&s",
      };
      setRecentes((prev) => [newRecentes, ...prev]);

      // Adiciona novo item à lista de recomendados
      const newRecomendados = {
        id: (recomendados.length + 1).toString(),
        nome: "Novo recomendado",
        endereco: "Novo endereço",
        preco: "R$40",
        rating: 4.6,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwk7gKbOvfeZXz1KDz5ksKxrwx6Ad9VvVw-g&s",
      };
      setRecomendados((prev) => [newRecomendados, ...prev]);

      setRefreshing(false);
    }, 2000);
  };

  // ------------------- Render -------------------
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Pull-to-refresh animado */}
      <Animated.View
        style={{
          alignItems: "center",
          marginVertical: 10,
          transform: [
            {
              scale: pullAnim.interpolate({
                inputRange: [-100, 0],
                outputRange: [1.5, 0],
                extrapolate: "clamp",
              }),
            },
          ],
          opacity: pullAnim.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: "clamp",
          }),
        }}
      ></Animated.View>

      {/* Lista principal */}
      <FlatList
        data={[]} // Não há dados no FlatList, pois tudo é renderizado no ListHeaderComponent
        ListHeaderComponent={
          <ScrollView
            contentContainerStyle={{ paddingBottom: 80 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Header fixo no topo */}
            <View
              style={{
                backgroundColor: "#3366FF",
                paddingVertical: 20,
                paddingHorizontal: 16,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              {/* Linha de perfil e localização */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    Localização
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    {loadingLocation
                      ? "Carregando..."
                      : errorMsg
                      ? errorMsg
                      : address}
                  </Text>
                </View>

                {/* Ícone de notificações */}
                <TouchableOpacity
                  style={{ marginLeft: "auto" }}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("ContractNotifications")} // Navega para tela de notificações
                >
                  <Ionicons
                    name="notifications-outline"
                    size={26}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>

              {/* Barra de pesquisa */}
              <View style={styles.SearchBar}>
                <Ionicons name="search-outline" size={20} color="#666" />
                <TextInput
                  placeholder="Pesquisar serviços..."
                  style={{ flex: 1, marginLeft: 8 }}
                  onFocus={() => navigation.navigate("Search")}
                />
                <TouchableOpacity
                  style={{ marginLeft: 8 }}
                  onPress={() => navigation.navigate("Filter")}
                >
                  <Ionicons name="options-outline" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Vistos recentemente */}
            <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                  Vistos recentemente
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("VerTudoScreen", {
                      title: "Vistos recentemente",
                      data: recentes,
                    })
                  }
                >
                  <Text style={{ color: "#3B82F6" }}>Ver tudo</Text>
                </TouchableOpacity>
              </View>

              {/* Scroll horizontal dos itens recentes */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recentes.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={{
                      width: 160,
                      marginRight: 12,
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      overflow: "hidden",
                      elevation: 2,
                    }}
                    onPress={() => navigation.navigate("ServiceDetails")}
                  >
                    <Image
                      source={{ uri: item.imagem }}
                      style={{ width: "100%", height: 100 }}
                    />
                    <View style={{ padding: 8 }}>
                      <Text style={{ fontWeight: "600" }}>{item.nome}</Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#666",
                          textAlign: "center",
                        }}
                      >
                        {item.endereco}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 4,
                        }}
                      >
                        <Ionicons name="star" size={14} color="#FFD700" />
                        <Text style={{ marginLeft: 4, fontSize: 12 }}>
                          {item.rating}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Recomendados */}
            <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
              <Text
                style={{ fontWeight: "700", fontSize: 16, marginBottom: 10 }}
              >
                Recomendados
              </Text>
              {recomendados.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 12,
                    elevation: 2,
                  }}
                  onPress={() => navigation.navigate("ServiceDetails")}
                >
                  <Image
                    source={{ uri: item.imagem }}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 8,
                      marginRight: 12,
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: "600" }}>{item.nome}</Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#666",
                        textAlign: "center",
                      }}
                    >
                      {item.endereco}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 2,
                      }}
                    >
                      <Ionicons name="star" size={14} color="#FFD700" />
                      <Text style={{ marginLeft: 4, fontSize: 12 }}>
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                  <Text style={{ fontWeight: "700", color: "#333" }}>
                    {item.preco}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        }
        refreshing={refreshing} // Pull-to-refresh
        onRefresh={onRefresh} // Callback
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          if (y < 0) pullAnim.setValue(y); // Atualiza animação pull-to-refresh
        }}
        scrollEventThrottle={16} // Atualização da animação a cada 16ms (~60fps)
      />
    </SafeAreaView>
  );
}

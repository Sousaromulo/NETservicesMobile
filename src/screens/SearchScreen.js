// src/screens/SearchScreen.js
import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/styles";
import { services } from "../data/services";

export default function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [showAll, setShowAll] = useState(false); // controlar "Ver mais"
  const animationRefs = useRef({}); // refs para animações

  // Serviços em alta (simulação: os 3 primeiros da lista)
  const trendingServices = services.slice(0, 3);

  // Carregar pesquisas recentes
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("@recent_searches");
        if (stored) setRecentSearches(JSON.parse(stored));
      } catch (e) {
        console.log("Erro ao carregar pesquisas recentes:", e);
      }
    })();
  }, []);

  // Salvar pesquisas recentes
  const saveRecentSearches = async (searches) => {
    try {
      await AsyncStorage.setItem("@recent_searches", JSON.stringify(searches));
    } catch (e) {
      console.log("Erro ao salvar pesquisas recentes:", e);
    }
  };

  // Função de pesquisa
  const handleSearch = () => {
    if (searchText.trim() === "") return;

    let updatedSearches = recentSearches;
    if (!recentSearches.includes(searchText)) {
      updatedSearches = [searchText, ...recentSearches.slice(0, 4)]; // máximo 5
      setRecentSearches(updatedSearches);
      saveRecentSearches(updatedSearches);
    }

    navigation.navigate("SearchResults", { query: searchText });
    setSearchText("");
  };

  // Remover pesquisa com animação
  const removeSearch = (item) => {
    if (animationRefs.current[item]) {
      Animated.timing(animationRefs.current[item], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        const updated = recentSearches.filter((s) => s !== item);
        setRecentSearches(updated);
        saveRecentSearches(updated);
        delete animationRefs.current[item];
      });
    }
  };

  // Lista de pesquisas a exibir (limite de 3 se showAll=false)
  const displayedSearches = showAll
    ? recentSearches
    : recentSearches.slice(0, 3);

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar serviços..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText("")}>
            <Ionicons name="close-circle" size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      {/* Pesquisas recentes */}
      {recentSearches.length > 0 && (
        <View style={{ marginTop: 20 }}>
          <Text style={styles.h5}>Pesquisas recentes</Text>
          {displayedSearches.map((item) => {
            if (!animationRefs.current[item])
              animationRefs.current[item] = new Animated.Value(1);
            return (
              <Animated.View
                key={item}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 6,
                  opacity: animationRefs.current[item],
                  transform: [
                    {
                      scale: animationRefs.current[item].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      }),
                    },
                  ],
                 }}
              >
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() =>
                    navigation.navigate("SearchResults", { query: item })
                  }
                >
                  <Text style={styles.listItem}>• {item}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeSearch(item)}>
                  <Ionicons name="close-circle" size={20} color="red" />
                </TouchableOpacity>
              </Animated.View>
            );
          })}
          {/* Botão Ver mais */}
          {recentSearches.length > 3 && !showAll && (
            <TouchableOpacity onPress={() => setShowAll(true)}>
              <Text style={[styles.listItem, { color: "#636363ff" }]}>
                Ver mais
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Serviços em alta */}
      {trendingServices.length > 0 && (
        <View style={{ marginTop: 20 }}>
          <Text style={styles.h5}>Serviços em alta</Text>
          <FlatList
            data={trendingServices}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItemContainer}
                onPress={() =>
                  navigation.navigate("ServiceDetails", { id: item.id })
                }
              >
                <Text style={styles.listItem}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import estilos from "./estilos";
import {
  pegarRepositoriosDoUsuario,
  pegarRepositoriosDoUsuarioName,
} from "../../services/requisicoes/repositorios";
import { useFocusEffect } from "@react-navigation/native";

export default function Repositorios({ route, navigation }) {
  const id = route.params.id;
  const [repo, setRepo] = useState([]);
  const [search, setSearch] = useState("");

  const getRep = async () => {
    const res = await pegarRepositoriosDoUsuario(id, search);
    setRepo(res);
  };

  useFocusEffect(
    React.useCallback(() => {
      getRep();
    }, [search])
  );

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Busque por um repositorio"
        autoCapitalize="none"
        style={estilos.entrada}
        value={search}
        onChangeText={(value) => setSearch(value)}
      />
      <Text style={estilos.repositoriosTexto}>
        {repo.length} repositórios criados
      </Text>
      <FlatList
        data={repo}
        style={{ width: "100%" }}
        keyExtractor={(repo) => repo.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={estilos.repositorio}
            onPress={() => navigation.navigate("InfoRepositorio", { item })}
          >
            <Text style={estilos.repositorioNome}>{item.name}</Text>
            <Text style={estilos.repositorioData}>
              Atualizado em {item.data}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate("CriarRepositorio", { item: id })}
      >
        <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
      </TouchableOpacity>
    </View>
  );
}

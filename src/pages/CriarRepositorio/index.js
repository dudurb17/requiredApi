import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import estilos from "./estilos";
import { createRepositorio } from "../../services/requisicoes/repositorios";

export default function CriarRepositorio({ route, navigation }) {
  const postId = route.params.item;
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");

  const save = async () => {
    const res = await createRepositorio(postId, nome, data);
    if (res == "sucesso") {
      Alert.alert("Repositorio criado com sucesso!!");
      navigation.goBack();
    } else {
      Alert.alert("Erro no criar");
    }
  };

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={estilos.entrada}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        style={estilos.entrada}
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity style={estilos.botao} onPress={save}>
        <Text style={estilos.textoBotao}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import estilos from "./estilos";
import { updateRepositoriosDoUsuario } from "../../services/requisicoes/repositorios";

export default function InfoRepositorio({ route, navigation }) {
  const rep = route.params.item;
  const [nome, setNome] = useState(rep.name);
  const [data, setData] = useState(rep.data);

  async function upate() {
    const res = await updateRepositoriosDoUsuario(
      rep.postId,
      nome,
      data,
      rep.id
    );
    if (res == "sucesso") {
      Alert.alert("Repositorio atualizado");
      navigation.goBack();
    } else {
      Alert.alert("Erro ao atualizar repositorio");
    }
  }

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        value={nome}
        onChangeText={setNome}
        style={estilos.entrada}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        value={data}
        onChangeText={setData}
        style={estilos.entrada}
      />
      <TouchableOpacity style={estilos.botao} onPress={() => upate()}>
        <Text style={estilos.textoBotao}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: "#DD2B2B", marginTop: 10 }]}
      >
        <Text style={estilos.textoBotao}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}

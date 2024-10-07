import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function App() {
  const [produto, setProduto] = useState({ nome: '', preco: '', descricao: '' })
  const [produtos, setProdutos] = useState([])

  const aoDigitar = (nome, valor) => {
    setProduto({ ...produto, [nome]: valor })

  }

  const adicionar = () => {
    Alert.alert('Aqui vamos gravar o registro de produto.')
  }


  return (
    <View styles={styles.container}>
      <Text styles={styles.title}>Cadastro de Produtos</Text>
      <TextInput
        placeholder="Informe o nome."
        value={produto.nome}
        onChangeText={(valor) => aoDigitar('nome', valor)} />
      <TextInput
        placeholder="Informe o preço."
        value={produto.preco}
        keyboardType="numeric"
        onChangeText={(valor) => aoDigitar('preco', valor)} />
      <TextInput
        placeholder="Informe a descrição."
        value={produto.descricao}
        onChangeText={(valor) => aoDigitar('descricao', valor)} />
      <View>
        <TouchableOpacity onPress={adicionar}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  }
});
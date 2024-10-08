import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [produto, setProduto] = useState({ nome: '', preco: '', descricao: '' })
  const [produtos, setProdutos] = useState([])

  const aoDigitar = (nome, valor) => {
    setProduto({ ...produto, [nome]: valor })

  }

  const adicionar = () => {
    setProdutos([...produtos, { ...produto }])
    setProduto({ nome: '', preco: '', descricao: '' })
    Alert.alert('Produto adicionado!!!')
  }

  const excluir = (index) => {
    const produtosTemp = produtos.filter((_, i) => i !== index)
    setProdutos(produtosTemp)
  }

  const listar = ({ item, index }) => (
    <View style={styles.itens}>
      <Text>{item.nome} - {item.preco} - {item.descricao}</Text>
      <TouchableOpacity onPress={() => excluir(index)} >
        <Icon name="trash" size={20} color='red' />
      </TouchableOpacity>

    </View>
  )


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produtos</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o nome."
        value={produto.nome}
        onChangeText={(valor) => aoDigitar('nome', valor)} />
      <TextInput
        style={styles.input}
        placeholder="Informe o preço."
        value={produto.preco}
        keyboardType="numeric"
        onChangeText={(valor) => aoDigitar('preco', valor)} />
      <TextInput
        style={styles.input}
        placeholder="Informe a descrição."
        value={produto.descricao}
        onChangeText={(valor) => aoDigitar('descricao', valor)} />
      <View style={styles.btnAddContainer}>
        <TouchableOpacity onPress={adicionar}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={produtos}
        renderItem={listar}
        keyExtractor={(item, index) => index.toString()}
      />
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10
  },
  btnAddContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20

  },
  itens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
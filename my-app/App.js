import axios from "axios";
import React, { useState, useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [produto, setProduto] = useState({ nome: '', preco: '', descricao: '' })
  const [produtos, setProdutos] = useState([])

  const APIURL = 'http://192.168.68.103:3001/produtos'

  const listar = async () => {
    const response = await axios.get(APIURL)
    setProdutos(response.data)
  }

  const aoDigitar = (nome, valor) => {
    setProduto({ ...produto, [nome]: valor })
  }

  const adicionar = async () => {
    setProdutos([...produtos, { ...produto }])
    setProduto({ nome: '', preco: '', descricao: '' })

    await axios.post(APIURL, produto)

    Alert.alert('Produto adicionado com sucesso!!!')
  }

  const cancelar = () => {
    Alert.alert('Cancelado!')

  }

  const excluir = async (registro) => {

    try {
      await axios.delete(`${APIURL}/${registro.id}`)
      Alert.alert('Registro excluido com sucesso!!!')

      listar()

    } catch (error) {
      Alert.alert('Ocorreu um erro. Aqui deve ser gerado um log.')
    }

    await axios.delete(`${APIURL}/${registro.id}`)
    Alert.alert('Registro excluido com sucesso!!!')

    listar()
  }

  useEffect(() => {
    listar()
  }, []);

  const lista = ({ item, index }) => (
    <View style={styles.itens}>
      <Text>{item.nome} - {item.preco} - {item.descricao}</Text>
      <TouchableOpacity onPress={() => excluir(item)} >
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
        <TouchableOpacity style={styles.btnAdd} onPress={adicionar}>
          <Text style={styles.btnAddText} >Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCancel} onPress={cancelar}>
          <Text style={styles.btnAddText} >Cancelar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={produtos}
        renderItem={lista}
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
  },
  btnAdd: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5
  },
  btnCancel: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5
  },
  btnAddText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
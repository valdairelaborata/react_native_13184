import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = useState('')
  const [mensagem, setMensagem] = useState('Tela inicial')

  const adicionar = () => {
    setMensagem('Registro adicionado!!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Lista de atividades</Text>
      <TextInput style={styles.input}

        placeholder='Nome da tarefa'
        value={tarefa}
        onChangeText={text => setTarefa(text)}
      />

      <TouchableOpacity style={styles.btnAdd} onPress={adicionar}>
        <Text style={styles.btnAddText} >Adicionar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 16,
    marginBottom: 10
  },
  btnAdd: {
    backgroundColor: '#a9a9a9',
    alignItems: 'center'

  },
  btnAddText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

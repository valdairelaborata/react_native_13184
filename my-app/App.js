import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [mensagem, setMensagem] = useState('Tela inicial')

  const adicionar = () => {
    setTarefas([...tarefas, { id: tarefas.length + 1, nome: tarefa }])
    setTarefa('')
  }

  const remover = (id) => {
    setTarefas(tarefas.filter(item => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Lista de atividades</Text>
      <TextInput style={styles.input}

        placeholder='digite o Nome da tarefa'
        value={tarefa}
        onChangeText={text => setTarefa(text)}
      />

      <TouchableOpacity style={styles.btnAdd} onPress={adicionar}>
        <Text style={styles.btnAddText} >Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <TouchableOpacity onPress={() => remover(item.id)} >
              <Text>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 25
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

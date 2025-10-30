import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//interface das cards
interface Task {
  id: string;
  title: string;
  done: boolean;
}

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  // Adiciona uma nova tarefa
  const handleAddTask = () => {
    if (!newTask.trim()) {
      Alert.alert('Atenção', 'Digite uma tarefa antes de adicionar.');
      return;
    }

    const newItem: Task = {
      id: Date.now().toString(),
      title: newTask,
      done: false,
    };

    setTasks([...tasks, newItem]);
    setNewTask('');
    setIsAdding(false);
  };

  // Alterna o status da tarefa (feito / não feito)
  const toggleDone = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  // Exclui tarefa
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.card}>
      {/* Quadrado de marcação */}
      <TouchableOpacity style={styles.checkBox} onPress={() => toggleDone(item.id)}>
        {item.done && <Ionicons name="checkmark" size={20} color="#fff" />}
      </TouchableOpacity>

      {/* Texto da tarefa */}
      <Text style={[styles.cardText, item.done && styles.cardTextDone]}>
        {item.title}
      </Text>

      {/* Lixeira */}
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Ionicons name="trash-outline" size={24} color="#d11a2a" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      {/* Lista de tarefas */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Campo para adicionar tarefa */}
      {isAdding && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nova tarefa..."
            placeholderTextColor="#aaa"
            value={newTask}
            onChangeText={setNewTask}
          />
          <TouchableOpacity style={styles.addButtonSmall} onPress={handleAddTask}>
            <Ionicons name="checkmark" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      )}

      {/* Botão flutuante de adicionar */}
      {!isAdding && (
        <TouchableOpacity style={styles.floatingButton} onPress={() => setIsAdding(true)}>
          <Ionicons name="add" size={32} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 40,
    color: '#4A90E2',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#4A90E2',
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  cardTextDone: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#4A90E2',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    left: 25,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#333',
  },
  addButtonSmall: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 10,
  },
});

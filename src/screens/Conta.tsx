import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function AccountScreen() {
  const [name, setName] = useState('');
  const [image, setImage] = useState<string | null>(null);

  // Carregar dados salvos ao iniciar
  useEffect(() => {
    (async () => {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        const storedImage = await AsyncStorage.getItem('userImage');

        if (storedName) setName(storedName);
        if (storedImage) setImage(storedImage);
      } catch (error) {
        console.error('Erro ao carregar dados salvos:', error);
      }
    })();
  }, []);

  // Salvar automaticamente quando o nome mudar
  useEffect(() => {
    AsyncStorage.setItem('userName', name);
  }, [name]);

  // Pedir permissão ao abrir o app
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Precisamos de acesso às suas fotos.');
      }
    })();
  }, []);

  // Escolher imagem
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setImage(uri);
        await AsyncStorage.setItem('userImage', uri);
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
    }
  };

  // Resetar dados
  const resetData = async () => {
    await AsyncStorage.multiRemove(['userName', 'userImage']);
    setName('');
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage} />
        ) : (
          <Ionicons name="person-circle-outline" size={100} color="#ccc" />
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.namePreview}>{name ? `Olá, ${name}!` : 'Seu nome aparecerá aqui'}</Text>

      <TouchableOpacity onPress={resetData} style={styles.resetButton}>
        <Text style={styles.resetText}>Limpar dados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  namePreview: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#e74c3c',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  resetText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

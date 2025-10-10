import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Option = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const options: Option[] = [
  { id: '1', title: 'Conta', icon: 'person-circle-outline' },
  { id: '2', title: 'Notificações', icon: 'notifications-outline' },
  { id: '3', title: 'Privacidade', icon: 'lock-closed-outline' },
  { id: '4', title: 'Idioma', icon: 'language-outline' },
];

export default function SettingsScreen() {
  const renderItem = ({ item }: { item: Option }) => (
    <TouchableOpacity style={styles.option}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={24} color="#4A90E2" />
      </View>
      <Text style={styles.optionText}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={20} color="#aaa" style={{ marginLeft: 'auto' }} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Configurações</Text>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,               // sombra Andooid
    shadowColor: '#000',      // sombra iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
});

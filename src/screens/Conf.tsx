import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootTabParamList } from '../AppNavigator';

type Props = NativeStackScreenProps<RootTabParamList, 'Settings'>;

export default function SettingsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      {/*Conta*/}
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Account' as never)}>
        <Ionicons name="person-circle-outline" size={24} color="#4A90E2" />
        <Text style={styles.optionText}>Conta</Text>
      </TouchableOpacity>

      {/*Notificacoes*/}
      <TouchableOpacity style={styles.option}>
        <Ionicons name="notifications-outline" size={24} color="#4A90E2" />
        <Text style={styles.optionText}>Notificações</Text>
      </TouchableOpacity>

      {/*Ajuda*/}
      <TouchableOpacity style={styles.option}>
        <Ionicons name="help-circle-outline" size={24} color="#4A90E2" />
        <Text style={styles.optionText}>Ajuda</Text>
      </TouchableOpacity>
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
    marginBottom: 25,
    marginTop: 40,
    color: '#4A90E2',
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
});

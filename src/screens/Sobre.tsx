import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Ionicons name="information-circle-outline" size={40} color="#4A90E2" />
          <Text style={styles.title}>Sobre a Equipe</Text>
        </View>

        <Text style={styles.text}>
        Trabalho feito por Gustavo Máximo e Marcos Bonfin, alunos do curso de ADS na Unifasipe de Sinop - MT.
        </Text>

        <Text style={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati eaque, perferendis incidunt veniam temporibus quidem natus beatae quia. Voluptates maiores reprehenderit eum blanditiis suscipit. Itaque magni error ullam labore.
        </Text>

        <Text style={styles.text}>
          Curabitur porta odio et eros euismod, sit amet malesuada sapien congue. Vivamus venenatis
          risus vitae lorem eleifend, at commodo metus iaculis. Aliquam erat volutpat. Donec ac
          semper lorem.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 40,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'justify',
  },
});

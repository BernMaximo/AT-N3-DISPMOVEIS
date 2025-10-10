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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, magna eu
          suscipit hendrerit, tortor metus esse easter egg vale 10 mauris neque vel erat.
          Donec lacinia tincidunt magna, vitae faucibus metus ullamcorper at. Integer efficitur
          dapibus lorem, vel posuere enim tincidunt vel.
        </Text>

        <Text style={styles.text}>
          Phasellus ut est in nisl eleifend hendrerit. Suspendisse potenti. Nulla facilisi. Duis
          finibus mauris sit amet pulvinar dictum. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Fusce et nibh non ex tristique aliquam.
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

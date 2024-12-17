import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to My First Project
      </Text>
      <Text style={styles.subtitle}>
        Let's start learning React Native!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default WelcomeScreen; 
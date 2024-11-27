import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../ThemeContext';

export default function HomeScreen() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Welcome Back Ledy Joy!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  lightContainer: { backgroundColor: '#f8f8f8' },
  darkContainer: { backgroundColor: '#1e1e1e' },
  text: { fontSize: 20, fontWeight: 'bold' },
  lightText: { color: '#000' },
  darkText: { color: '#fff' },
});

import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../../ThemeContext';

export default function Settings({ navigation }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('currentUser');
    Alert.alert('Logout', 'You have been logged out.');
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.darkModeContainer}>
        <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
      
      {/* Explanation paragraph */}
      <Text style={styles.infoText}>
        {isDarkMode ? 'Disable to turn Light Mode.' : 'Enable to turn Dark Mode.'}
      </Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 75,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: -510,
    fontSize: 16,
    color: '#4A4947',
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#4A4947',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lightContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

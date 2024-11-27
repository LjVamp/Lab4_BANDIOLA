import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../../ThemeContext';

export default function Profile() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* Profile Information */}
      <Image source={require('../../assets/ME.jpg')} style={styles.avatar} />
      <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>
        BANDIOLA, LEDY JOY D.
      </Text>
      <Text style={[styles.info, isDarkMode ? styles.darkText : styles.lightText]}>
        React Native Developer
      </Text>
      <Text style={[styles.info, isDarkMode ? styles.darkText : styles.lightText]}>
        3rd Year, USTP CDO
      </Text>
      <Text style={[styles.info, isDarkMode ? styles.darkText : styles.lightText]}>
        bandiola.ledyjoy@gmail.com
      </Text>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, isDarkMode ? styles.darkText : styles.lightText]}>30</Text>
          <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Apps</Text>
          <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Deployed</Text>

        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, isDarkMode ? styles.darkText : styles.lightText]}>20</Text>
          <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Clients</Text>
          <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Approved</Text>

        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statNumber, isDarkMode ? styles.darkText : styles.lightText]}>10</Text>
          <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Experience</Text>
          <Text style={[styles.statLabel, isDarkMode ? styles.darkText : styles.lightText]}>Years</Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  lightContainer: {
    backgroundColor: '#f8f8f8',
  },
  darkContainer: {
    backgroundColor: '#1e1e1e',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
    width: '100%',
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    marginTop: 5,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

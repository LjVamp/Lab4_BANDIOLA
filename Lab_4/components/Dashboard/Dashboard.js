import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from '../../ThemeContext';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: isDarkMode ? '#1e1e1e' : '#f8f8f8',
        },
        headerTintColor: isDarkMode ? '#fff' : '#000',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#1e1e1e' : '#f8f8f8',
        },
        tabBarActiveTintColor: isDarkMode ? '#f5dd4b' : '#000',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
          else if (route.name === 'Settings') iconName = 'settings-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerLeft: () => <SidebarMenu />,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const SidebarMenu = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsSidebarVisible(true)}>
        <Ionicons name="menu-outline" size={28} style={{ marginLeft: 10 }} color="#000" />
      </TouchableOpacity>

      {/* Sidebar Modal */}
      <Modal
        visible={isSidebarVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsSidebarVisible(false)}
      >
        <View style={styles.sidebarContainer}>
          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsSidebarVisible(false)}
          >
            <Ionicons name="close-outline" size={28} color="#fff" />
          </TouchableOpacity>

          {/* Avatar and Details */}
          <View style={styles.sidebarHeader}>
            <Image
              source={require('../../assets/ME.jpg')}
              style={styles.avatar}
            />
            <Text style={styles.name}>BANDIOLA, LEDY JOY D.</Text>
            <Text style={styles.role}>Student</Text>
          </View>

          {/* Menu Options */}
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <Text style={styles.footerText}>
            © Bandiola, Ledy Joy D.
            {'\n'}BSIT 3R7
          </Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    backgroundColor: '#4A4947',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sidebarHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 16,
    color: '#fff',
  },
  menuContainer: {
    marginVertical: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomColor: '#666',
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 18,
    color: '#fff',
  },
  footerText: {
    marginTop: 30,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

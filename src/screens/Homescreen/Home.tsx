import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NewsCards from '../../Components/NewsCards';
import ShortcutsCard from '../../Components/ShortcutsCard';
import Colors from '../../resource/theme/color';

const GoogleSearchInterface = () => {
  const shortcuts = [
    {id: 1, color: '#8B7355', icon: '📄'},
    {id: 2, color: '#4682B4', icon: '🌐'},
    {id: 3, color: '#2E8B57', icon: '🎓'},
    {id: 4, color: '#8B3A3A', icon: '🎵'},
  ];
  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.black()} />

      {/* Top Bar */}
      <View style={styles.header}>
        <Icon name="science" size={24} color="#fff" />
        <View style={styles.searchButton}>
          <Icon name="search" size={20} color="#fff" />
          <Text style={styles.searchButtonText}>Search</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileLetter}>A</Text>
        </TouchableOpacity>
      </View>

      {/* Google Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Google</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#fff" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <Icon name="mic" size={20} color="#fff" />
        <Icon name="camera-alt" size={20} color="#fff" />
      </View>
      <ScrollView>
        {/* Shortcuts */}
        <View style={styles.shortcutsContainer}>
          <ShortcutsCard />
        </View>

        {/* Weather Widget */}
        <View style={styles.weatherContainer}>
          <View style={styles.weatherLeft}>
            <Text style={styles.location}>Jaipur</Text>
            <Text style={styles.temperature}>10°</Text>
          </View>
          <View style={styles.weatherRight}>
            <Text style={styles.weatherInfo}>Air quality · 100</Text>
            <Text style={styles.weatherStatus}>Moderate 😐</Text>
          </View>
        </View>

        {/* News Card */}

        <NewsCards />

      </ScrollView>
        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="home" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="timer" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="notifications" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    padding: 8,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 16,
  },
  searchButtonText: {
    color: '#fff',
    marginLeft: 8,
  },
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8AB4F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileLetter: {
    color: '#202124',
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  logoText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    margin: 16,
    padding: 12,
    borderRadius: 24,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 8,
    marginRight: 12,
  },
  shortcutsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  shortcutButton: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortcutIcon: {
    fontSize: 24,
  },
  weatherContainer: {
    flexDirection: 'row',
    backgroundColor: '#303134',
    margin: 16,
    padding: 16,
    borderRadius: 16,
    justifyContent: 'space-between',
  },
  weatherLeft: {
    flex: 1,
  },
  location: {
    color: '#fff',
    fontSize: 16,
  },
  temperature: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  weatherRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  weatherInfo: {
    color: '#fff',
    fontSize: 14,
  },
  weatherStatus: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  newsCard: {
    backgroundColor: '#303134',
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsTitle: {
    color: '#fff',
    fontSize: 16,
    padding: 16,
    lineHeight: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#202124',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    padding: 8,
  },
});

export default GoogleSearchInterface;

import React, {useCallback, useState} from 'react';
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
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NewsCards from '../../Components/NewsCards';
import ShortcutsCard from '../../Components/ShortcutsCard';
import Colors from '../../resource/theme/color';
import {GoogleAccountModel} from '../../Components/GoogleAccountMenu';

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const menuItems = [
    {label: 'Search history', value: 'Saving'},
    {label: 'Delete last 15 minutes', value: ''},
    {label: 'Search personalisation', value: ''},
    {label: 'SafeSearch', value: ''},
    {label: 'Results about you', value: ''},
    {label: 'Tasks', value: ''},
    {label: 'Saves and collections', value: ''},
    {label: 'Your profile', value: ''},
  ];
  return (
    <>
      <StatusBar backgroundColor={Colors.black()} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Top Bar */}
          <View style={styles.header}>
            <Icon name="science" size={24} color="#fff" />
            <View style={styles.searchButton}>
              <Icon name="search" size={20} color="#fff" />
              <Text style={styles.searchButtonText}>Search</Text>
            </View>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => {
                setModalVisible(true);
              }}>
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
        {/* model for manage account */}
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <ScrollView style={styles.modalContent}>
              {/* Profile Section */}
              <View style={styles.profileContainer}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300?person'}}
                  style={styles.profileImage}
                />
                <View>
                  <Text style={styles.profileName}>Ankit Sharma</Text>
                  <Text style={styles.profileEmail}>ankitsharma@gmail.com</Text>
                </View>
              </View>

              {/* Manage Account Button */}
              <TouchableOpacity style={styles.manageAccountButton}>
                <Text style={styles.manageAccountText}>
                  Manage your Google Account
                </Text>
              </TouchableOpacity>

              {/* Menu Items */}
              {menuItems.map((item, index) => (
                <View key={index} style={styles.menuItem}>
                  <Text style={styles.menuItemText}>{item.label}</Text>
                  {item.value ? (
                    <Text style={styles.menuItemValue}>{item.value}</Text>
                  ) : null}
                </View>
              ))}

              {/* Footer Buttons */}
              <View style={styles.footerButtons}>
                <TouchableOpacity style={styles.footerButton}>
                  <Text style={styles.footerButtonText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                  <Text style={styles.footerButtonText}>Help and feedback</Text>
                </TouchableOpacity>
              </View>

              {/* Footer Links */}
              <View style={styles.footerLinks}>
                <Text style={styles.footerLinkText}>Privacy Policy</Text>
                <Text style={styles.footerLinkSeparator}>•</Text>
                <Text style={styles.footerLinkText}>Terms of service</Text>
              </View>

              {/* Close Modal Button */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeModalButton}>
                <Text style={styles.closeModalButtonText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
      </SafeAreaView>
    </>
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
  // model
  modalContainer: {
    // flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: 'rgba(0,0,0,0.5)', // Dim background
  },
  modalContent: {
    backgroundColor: '#1c1c1c',
    width: '90%',
    borderRadius: 10,
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#bbb',
    fontSize: 14,
  },
  manageAccountButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  manageAccountText: {
    color: '#fff',
    fontSize: 14,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 16,
  },
  menuItemValue: {
    color: '#bbb',
    fontSize: 14,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerLinkText: {
    color: '#bbb',
    fontSize: 12,
  },
  footerLinkSeparator: {
    color: '#bbb',
    marginHorizontal: 5,
  },
  closeModalButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  closeModalButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Home;

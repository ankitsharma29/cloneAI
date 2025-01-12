import React, {useState} from 'react';
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
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NewsCards from '../../Components/NewsCards';
import ShortcutsCard from '../../Components/ShortcutsCard';
import Colors from '../../resource/theme/color';

const Home = ({navigation}: any) => {
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
              onPress={() => setModalVisible(true)}>
              <Text style={styles.profileLetter}>A</Text>
            </TouchableOpacity>
          </View>

          {/* Google Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Google</Text>
          </View>

          {/* Search Bar */}
          <TouchableOpacity
            style={styles.searchBar}
            onPress={() => {
              navigation.navigate('SearchScreen');
            }}>
            <View style={styles.searchBar}>
              <Icon name="search" size={20} color="#fff" />

              <Text style={styles.searchInput}>Search</Text>
              <Icon name="mic" size={20} color="#fff" />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('GoogleLensScreen');
                }}>
                <Icon name="camera-alt" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

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

        {/* Modal for Manage Account */}
        <Modal
          visible={isModalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
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
              <ScrollView>
                {menuItems.map((item, index) => (
                  <View key={index} style={styles.menuItem}>
                    <Text style={styles.menuItemText}>{item.label}</Text>
                    {item.value ? (
                      <Text style={styles.menuItemValue}>{item.value}</Text>
                    ) : null}
                  </View>
                ))}
              </ScrollView>

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
            </View>
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
    paddingHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  searchButton: {
    flexDirection: 'row',
    backgroundColor: '#303134',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  searchButtonText: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 16,
  },
  profileButton: {
    backgroundColor: '#303134',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileLetter: {
    color: '#fff',
    fontSize: 18,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  logoText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#303134',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 16,
  },
  shortcutsContainer: {
    marginVertical: 10,
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#303134',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  weatherLeft: {
    justifyContent: 'center',
  },
  location: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  temperature: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  weatherRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  weatherInfo: {
    color: '#999',
    fontSize: 14,
  },
  weatherStatus: {
    color: '#fff',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#303134',
    paddingVertical: 10,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#1c1c1c',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#999',
    fontSize: 14,
  },
  manageAccountButton: {
    backgroundColor: '#303134',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  manageAccountText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#303134',
  },
  menuItemText: {
    color: '#fff',
    fontSize: 14,
  },
  menuItemValue: {
    color: '#999',
    fontSize: 14,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    color: '#999',
    fontSize: 14,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerLinkText: {
    color: '#999',
    fontSize: 14,
  },
  footerLinkSeparator: {
    color: '#999',
    marginHorizontal: 5,
  },
  closeModalButton: {
    backgroundColor: '#303134',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeModalButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Home;

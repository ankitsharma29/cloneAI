import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchScreen = ({navigation}:any) => {
  const recentSearches = [
    'top most AI Tools',
    'sequins skirt less than 2000',
    'top most fruits',
    'black leather skirt with button',
    'neon shirt',
    'city palace ticket price',
  ];

  const renderRecentSearch = ({item}) => (
    <View style={styles.searchItem}>
      <Icon name="history" size={20} color="#888" style={styles.historyIcon} />
      <Text style={styles.searchText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search or type URL"
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={()=>{
          navigation.navigate('VoiceScreen')
        }}>

        <Icon name="mic" size={24} color="#888" style={styles.icon} />
        </TouchableOpacity>
        <Icon name="camera-alt" size={24} color="#888" style={styles.icon} />
      </View>

      {/* Recent Searches */}
      <FlatList
        data={recentSearches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRecentSearch}
        contentContainerStyle={styles.recentSearchesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    padding: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginHorizontal: 8,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 4,
  },
  recentSearchesList: {
    marginTop: 20,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  historyIcon: {
    marginRight: 12,
  },
  searchText: {
    color: '#fff',
    fontSize: 16,
  },
  incognitoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#303134',
    borderRadius: 16,
  },
  incognitoText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SearchScreen;

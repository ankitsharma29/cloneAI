import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

// Mock Data for Search Results
const mockResults = [
  {
    image: 'https://picsum.photos/200/300?sports',
    title: 'Trendy Top 1',
    price: '$25',
    link: 'Amazon.com',
  },
  {
    image: 'https://picsum.photos/200/300?sports',
    title: 'Stylish Top 2',
    price: '₹659',
    link: 'Myntra',
  },
  {
    image: 'https://picsum.photos/200/300?sports',
    title: 'Casual Wear 3',
    price: '$35',
    link: 'Flipkart',
  },
  {
    image: 'https://picsum.photos/200/300?sports',
    title: 'Formal Shirt 4',
    price: '$40',
    link: 'Amazon.com',
  },
  {
    image: 'https://picsum.photos/200/300?sports',
    title: 'Formal Shirt 4',
    price: '$40',
    link: 'Amazon.com',
  },
  {
    image: 'https://picsum.photos/200/300?sports',
    title: 'Formal Shirt 4',
    price: '$40',
    link: 'Amazon.com',
  },
  {
    image: 'https://picsum.photos/200/300?sports',
    title: 'Formal Shirt 4',
    price: '$40',
    link: 'Amazon.com',
  },
  {
    image: 'https://picsum.photos/200/300?sports',
    title: 'Formal Shirt 4',
    price: '$40',
    link: 'Amazon.com',
  },
  {
    image: 'https://picsum.photos/200/300?sports',
    title: 'Formal Shirt 4',
    price: '$40',
    link: 'Amazon.com',
  },
];

const categories = ['All', 'Products', 'Visual Matches', 'About This Image'];

const LensSearchScreen = ({navigation}: any) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <View style={styles.container}>
      {/* Header */}
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

      {/* Categories */}
      <View style={styles.categories}>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(item)}
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.selectedCategoryButton,
              ]}>
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.selectedCategoryText,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Results */}
      <FlatList
        data={mockResults}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.resultCard}>
            <Image source={{uri: item.image}} style={styles.resultImage} />
            <Text style={styles.resultTitle}>{item.title}</Text>
            <Text style={styles.resultPrice}>{item.price}</Text>
            <Text style={styles.resultLink}>{item.link}</Text>
          </View>
        )}
      />

      {/* Feedback Section */}
      {/* <View style={styles.feedback}>
        <Text style={styles.feedbackText}>Are these results useful?</Text>
        <View style={styles.feedbackButtons}>
          <TouchableOpacity>
            <Text style={styles.feedbackButton}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.feedbackButton}>No</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#292929',
  },
  queryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#332222',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  categoryButton: {
    marginHorizontal:8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#444444',
  },
  selectedCategoryButton: {
    backgroundColor: '#00BFFF',
  },
  categoryText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  resultCard: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#2A2A2A',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  resultImage: {
    width: '100%',
    height: width / 2 - 40,
    borderRadius: 10,
  },
  resultTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0E0E0',
    textAlign: 'center',
  },
  resultPrice: {
    fontSize: 14,
    color: '#32CD32',
    marginTop: 2,
    textAlign: 'center',
  },
  resultLink: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
  },
  feedback: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#292929',
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  feedbackText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  feedbackButtons: {
    flexDirection: 'row',
  },
  feedbackButton: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#00BFFF',
  },
  searchBar: {
    marginVertical:10,
    flexDirection: 'row',
    backgroundColor: '#303134',
    padding: 2,
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
});

export default LensSearchScreen;

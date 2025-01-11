import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const newsData = [
  {
    id: 1,
    title: "This superstar was Ratan Tata's closest friend, shared same room, went for picnics, listened songs together",
    source: "Business Today",
    timeAgo: "2 hours ago",
    category: "Business",
    image: "https://picsum.photos/200/300?business,tata"
  },
  {
    id: 2,
    title: "Scientists Discover New Species in Amazon Rainforest, Remarkable Findings Shock Research Community",
    source: "Science Daily",
    timeAgo: "1 hour ago",
    category: "Science",
    image: "https://picsum.photos/200/300?rainforest,amazon"
  },
  {
    id: 3,
    title: "Tech Giant Unveils Revolutionary AI-Powered Device, Market Responds with Record-Breaking Surge",
    source: "Tech Chronicle",
    timeAgo: "3 hours ago",
    category: "Technology",
    image: "https://picsum.photos/200/300?technology,ai"
  },
  {
    id: 4,
    title: "Global Climate Summit Reaches Historic Agreement, Nations Unite for Unprecedented Action",
    source: "World News",
    timeAgo: "4 hours ago",
    category: "Environment",
    image: "https://picsum.photos/200/300?climate,summit"
  },
  {
    id: 5,
    title: "Breakthrough in Quantum Computing Promises to Transform Data Processing Forever",
    source: "Tech Insider",
    timeAgo: "5 hours ago",
    category: "Technology",
    image: "https://picsum.photos/200/300?quantum,computer"
  },
  {
    id: 6,
    title: "Medical Researchers Announce Major Progress in Cancer Treatment Development",
    source: "Health Report",
    timeAgo: "2 hours ago",
    category: "Health",
    image: "https://picsum.photos/200/300?medical,laboratory"
  },
  {
    id: 7,
    title: "Space Agency Reveals Plans for First Human Settlement on Mars by 2040",
    source: "Space News",
    timeAgo: "6 hours ago",
    category: "Space",
    image: "https://picsum.photos/200/300?mars,space"
  },
  {
    id: 8,
    title: "Economic Report Shows Unexpected Growth in Global Markets Despite Challenges",
    source: "Financial Times",
    timeAgo: "1 hour ago",
    category: "Economy",
    image: "https://picsum.photos/200/300?finance,market"
  },
  {
    id: 9,
    title: "Revolutionary Clean Energy Technology Promises to Solve Global Power Crisis",
    source: "Energy Today",
    timeAgo: "3 hours ago",
    category: "Technology",
    image: "https://picsum.photos/200/300?clean,energy"
  },
  {
    id: 10,
    title: "Archaeological Discovery Rewrites Understanding of Ancient Civilization",
    source: "History Channel",
    timeAgo: "7 hours ago",
    category: "History",
    image: "https://picsum.photos/200/300?archaeology,ancient"
  },
  {
    id: 11,
    title: "Artificial Intelligence System Passes Medical Licensing Exam, Raises New Questions",
    source: "Tech Review",
    timeAgo: "4 hours ago",
    category: "Technology",
    image: "https://picsum.photos/200/300?artificial,intelligence"
  },
  {
    id: 12,
    title: "Sports Legend Announces Surprise Comeback, Fans Worldwide Celebrate",
    source: "Sports Weekly",
    timeAgo: "2 hours ago",
    category: "Sports",
    image: "https://picsum.photos/200/300?sports,stadium"
  }
];

const NewsCards = () => {
  const renderItem = useCallback(({ item }) => (
    <TouchableOpacity style={styles.newsCard}>
      <Image
        style={styles.newsImage}
        source={{ uri: item.image }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryPill}>
            <Text style={styles.category}>{item.category}</Text>
          </View>
          <Text style={styles.timeAgo}>{item.timeAgo}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.sourceContainer}>
          <View style={styles.sourceInfo}>
            <Text style={styles.source}>{item.source}</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreButtonText}>⋮</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  ), []);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const ListHeaderComponent = useCallback(() => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Top Stories</Text>
    </View>
  ), []);

  return (
    <FlatList
      data={newsData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      windowSize={5}
      removeClippedSubviews={true}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 8,
    paddingBottom: 80, // Space for bottom navigation
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  newsCard: {
    backgroundColor: '#303134',
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  newsImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#404144',
  },
  contentContainer: {
    padding: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryPill: {
    backgroundColor: '#404144',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  category: {
    color: '#8AB4F8',
    fontSize: 12,
    fontWeight: 'bold',
  },
  timeAgo: {
    color: '#9AA0A6',
    fontSize: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    fontWeight: '500',
  },
  sourceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  sourceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  source: {
    color: '#9AA0A6',
    fontSize: 14,
  },
  moreButton: {
    padding: 4,
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default NewsCards;
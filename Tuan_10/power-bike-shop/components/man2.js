import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BikeShopScreen({navigation}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedBikes, setLikedBikes] = useState([]); // State để lưu các bike đã được yêu thích

  const categories = ['All', 'Roadbike', 'Mountain'];

  // Fetch dữ liệu từ API
  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch('https://6731a4bb7aaf2a9aff11580c.mockapi.io/Bike'); // Thay đổi URL này với API của bạn
        const data = await response.json();
        setBikes(data);
      } catch (error) {
        console.error('Error fetching bikes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []); // Chỉ chạy một lần khi component được mount

  // Hàm để kiểm tra xem xe đạp có trong danh sách yêu thích không
  const toggleLike = (bikeId) => {
    setLikedBikes((prevLikedBikes) => {
      if (prevLikedBikes.includes(bikeId)) {
        // Nếu bikeId đã có trong danh sách yêu thích, loại bỏ nó
        return prevLikedBikes.filter((id) => id !== bikeId);
      } else {
        // Nếu bikeId chưa có trong danh sách yêu thích, thêm vào
        return [...prevLikedBikes, bikeId];
      }
    });
  };

  const renderCategory = (category) => (
    <TouchableOpacity
      key={category}
      style={[
        styles.categoryButton,
        selectedCategory === category && styles.selectedCategoryButton,
      ]}
      onPress={() => setSelectedCategory(category)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === category && styles.categoryTextChange,
        ]}>
        {category}
      </Text>
    </TouchableOpacity>
  );

  const renderBikeItem = ({ item }) => {
    const isLiked = likedBikes.includes(item.id); // Kiểm tra nếu chiếc xe đạp này đã được yêu thích
    return (
      <View style={styles.bikeCard}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
      >
        <Image source={{ uri: item.Image }} style={styles.bikeImage} />
        <Text style={styles.bikeName}>{item.name}</Text>
        <Text style={styles.bikePrice}>${item.Price}</Text>
      </TouchableOpacity>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world’s Best Bike</Text>

      <View style={styles.categoryContainer}>
        {categories.map(renderCategory)}
      </View>

      <FlatList
        data={bikes}
        renderItem={renderBikeItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.bikeList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D32F2F',
  },
  selectedCategoryButton: {
    backgroundColor: '#D32F2F',
  },
  categoryText: {
    color: '#D32F2F',
    fontSize: 16,
  },
  categoryTextChange: {
    color: '#fff',
    fontSize: 16,
  },
  bikeList: {
    paddingBottom: 16,
  },
  bikeCard: {
    flex: 1,
    backgroundColor: '#fef5ed',
    borderRadius: 16,
    padding: 8,
    margin: 8,
    alignItems: 'center',
  },
  bikeImage: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  bikePrice: {
    fontSize: 18,
    color: '#FF8A65',
    marginTop: 4,
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

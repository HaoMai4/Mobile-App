import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BikeShopDetailScreen() {
  const [favorites, setFavorites] = useState([]);

  const bikes = [
    {
      id: '1',
      name: 'Pina Mountain',
      price: 350,
      originalPrice: 449,
      discount: '15% OFF',
      description: 'It is a very important form of writing as we write almost everything in paragraphs...',
      image: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6RgZqYaaj2yoEYcjn1xLuF6ejkVm5sj0Q2REjJLnMUO7MB-JMtKcmnFw8oA-21~I278VVSigiVjDi7As9CR8e3d0kVdVahjQ~iK24vFqNq26DEEOxvhKmjWhZAptz4w3HeHoO~IRWnv~zcorXAalQ98u9FQT01fBOz5h3Xu-xZ1ccmd6yJnkN~HrEe0q~G2NjvHeZNIHigUZDSaqNOTgHiekyzPG7ia0oc~O9v16nJz15q0JFFhE3vWf4030yzjsSL~8XGw0oRTUWVMMhxxyYnwfZmfvbqe-B5y~Gechq~e5NVwMqeG~LOWh8KvYiOrY-jz0uuelyFgi2DqzkJuPA__',
    },
    // Add more items here
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const renderBikeItem = ({ item }) => (
    <View style={styles.bikeCard}>
      <Image source={{ uri: item.image }} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.discount}>{item.discount} {item.price}$</Text>
        <Text style={styles.originalPrice}>{item.originalPrice}$</Text>
      </View> 
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <FontAwesome
            name={favorites.includes(item.id) ? 'heart' : 'heart-o'}
            size={20}
            color="#D32F2F"
            style={styles.heartIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
    flex: 1,  // Đảm bảo container chiếm toàn bộ không gian màn hình
    backgroundColor: 'white',
    padding: 16,
  },
  bikeCard: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    padding: 8,
    position: 'relative',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    height: '100%', // Đảm bảo các card chiếm toàn bộ không gian
  },
  bikeImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'contain',
    backgroundColor: "#fdeded",
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  discount: {
    fontSize: 14,
    color: '#696969',
    fontWeight: 'bold',
  },
  originalPrice: {
    marginLeft: 10,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
   descriptionTitle:{
     marginTop: 10,
     fontWeight: "bold"
   },
  description: {
    fontSize: 12,
    color: '#757575',
    marginVertical: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  addToCartButton: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: '#D32F2F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  addToCartText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: "center",
  },
  heartIcon: {
    marginLeft: 8,
  },
});


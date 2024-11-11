import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function PowerBikeShopScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6RgZqYaaj2yoEYcjn1xLuF6ejkVm5sj0Q2REjJLnMUO7MB-JMtKcmnFw8oA-21~I278VVSigiVjDi7As9CR8e3d0kVdVahjQ~iK24vFqNq26DEEOxvhKmjWhZAptz4w3HeHoO~IRWnv~zcorXAalQ98u9FQT01fBOz5h3Xu-xZ1ccmd6yJnkN~HrEe0q~G2NjvHeZNIHigUZDSaqNOTgHiekyzPG7ia0oc~O9v16nJz15q0JFFhE3vWf4030yzjsSL~8XGw0oRTUWVMMhxxyYnwfZmfvbqe-B5y~Gechq~e5NVwMqeG~LOWh8KvYiOrY-jz0uuelyFgi2DqzkJuPA__' }} 
          style={styles.bikeImage} 
        />
      </View>
      
      <Text style={styles.title}>POWER BIKE SHOP</Text>
      
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('BikeShop')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  headerContainer: {
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: '#04A777',
  },
  headerText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
  },
  imageContainer: {
    padding: 10,
    width: "100%",
    height: 350,
    backgroundColor: '#f8e6e5',
    borderRadius: 16,
    marginBottom: 16,
  },
  bikeImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginTop: 100,
    width: "90%",
    backgroundColor: '#FF5733',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
  },
});

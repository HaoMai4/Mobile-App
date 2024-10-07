import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const data = [
  { id: '1', title: 'Ca nấu lẩu, nấu mì mini...', shop: 'Shop Devang', image: require('./assets/ca_nau_lau.png') },
  { id: '2', title: '1KG KHÔ GÀ BƠ TỎI ...', shop: 'Shop LTD Food', image: require('./assets/kho_ga_bo_toi.png') },
  { id: '3', title: 'Xe cần cẩu đa năng', shop: 'Thế giới đồ chơi',image: require('./assets/xe_can_cau.png') },
  { id: '4', title: 'Đồ chơi dạng mô hình', shop: 'Thế giới đồ chơi', image: 'https://cf.shopee.vn/file/e2890647c0e71a762705b7118297eaf3' },
  { id: '5', title: 'Lãnh đạo giản đơn', shop: 'Minh Long Book', image: 'https://link-to-image' },
  { id: '6', title: 'Hiểu lòng con trẻ', shop: 'Minh Long Book', image: 'https://link-to-image' },
];

const ChatScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.shop}>{item.shop}</Text>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shop: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  chatButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChatScreen;
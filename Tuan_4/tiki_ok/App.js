import { React, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Dimensions, TouchableOpacity, TextInput } from 'react-native';

export default function Tiki() {
  return (
    <View style={styles.header}>
      {/* Sản phẩm */}
      <View style={{flex: 1.7}}>
        {/* Ảnh sản phẩm - tên sản phẩm */}
        <View style={style.viewImage}>
          <Image source={require('./assets/sach.jpg')} style={styles.imageItem} />
        </View>

        {/* Thông tin sản phẩm */}
        <View style={styles.infor}>
          <Text style={styles.textInfor}>
            Nguyen ham tich phan va ung dung
          </Text>
          <Text
            style={[styles.textInfor,
              {
                marginTop: 15,
              },
            ]}>
              Cung cap boi Tiki Trading
          </Text>
          <Text style={style.price}>141.800 d</Text>
          <Text style={styles.priceMain}>141.800 d</Text>
          <View
          style={{
            flexDirection: 'row',
          }}>
            <View
            style={{
              flexDirection: 'row',
              width: '70%',
              gap: 8,
            }}>

              <View
              style={{
                width: 20, 
                height: 20,
                backgroundColor: '#C4C4C4',
              }}>
                <TouchableOpacity onPress={() => {setNumber(number == 1 ? 1 : number - 1)}}>
                  <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                    -
                  </Text>
                  </TouchableOpacity>
              </View>
              <Text> {number} </Text>
              <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#C4C4C4',
              }}></View>
            </View>
          </View>
          </View>
      </View>
    </View>
  );

};

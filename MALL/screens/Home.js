import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Data, DataMer} from '../data/DATA';
import {styles} from '../components/style';
const CarItem = props => (
  <View style={styles.carItem}>
    <Image style={styles.carItemImg} source={props.item.imgSource} />
    <View style={{paddingLeft: 20, flex: 3}}>
      <Text style={styles.nameItem}>{props.item.name}</Text>
      <Text style={styles.textItem}>{props.item.price}</Text>
    </View>
  </View>
);

export default Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailItem');
            }}>
            <CarItem item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => {
          `${item.id}`;
        }}
        contentContainerStyle={styles.wrapperItem}
      />
    </View>
  );
};

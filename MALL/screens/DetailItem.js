import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {styles} from '../components/style';
import {DataMer} from '../data/DATA';
const Item = props => (
  <View style={styles.car}>
    <Text style={styles.textDetail}>
      <Text style={{fontWeight: 'bold', color: 'red'}}>Name:</Text>{' '}
      {props.item.name}
    </Text>
    <Text style={styles.textDetail}>
      <Text style={{fontWeight: 'bold', color: 'green'}}>Price:</Text>{' '}
      {props.item.price}
    </Text>
    <Image style={styles.imgCar} source={props.item.imgSource} />
    <Text style={styles.textDetail}>
      <Text style={{fontWeight: 'bold', color: 'blue'}}>Details:</Text>{' '}
      {props.item.detail}
    </Text>
  </View>
);
export default DetailItem = ({navigation, route}) => {
  // const {data} = route.params.data;
  return (
    <SafeAreaView>
      <FlatList
        data={DataMer}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Item item={item} />
          </TouchableOpacity>
        )}
        // keyExtractor={index => index.toString()}
        contentContainerStyle={styles.wrapperItem}
      />
    </SafeAreaView>
  );
};

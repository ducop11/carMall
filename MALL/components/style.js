import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#EEEEEE',
  },
  wrapperItem: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  carItem: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    marginVertical: 10,
    width: WIDTH - 30,
    height: 150,
    backgroundColor: '#fff',
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 20,
  },
  carItemImg: {
    flex: 1,
    width: 80,
    height: 80,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  nameItem: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textItem: {
    paddingTop: 5,
  },
  // detailItem
  car: {
    backgroundColor: '#fff',
    marginBottom: 15,
    height: 340,
  },
  imgCar: {
    maxWidth: '100%',
    maxHeight: 200,
  },
  textDetail: {
    fontSize: 18,
    paddingLeft: 20,
    paddingVertical: 10,
  },
});
export {styles};

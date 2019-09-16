import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  Button,
  Picker,
} from 'react-native';
import {Header, Card} from 'react-native-elements';
import CustomHeader from '../../components/Common/CustomHeader';
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Footer,
//   FooterTab,
//   Button,
//   Left,
//   Right,
//   Body,
//   Icon,
//   Text,
//   Card,
// } from 'native-base';

const Orders = props => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader page="ORDER" heading="Today's Orders" cart={true} />
      <View style={styles.selectList}>
        <Picker>
          <Picker.Item label="All" value="All" />
          <Picker.Item label="SCHEDULED" value="SCHEDULED" />
          <Picker.Item label="NORMAL" value="NORMAL" />
        </Picker>
      </View>
      <View style={{flex: 1}}>
        <Card containerStyle={styles.cardView}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
              }}
              source={{
                uri:
                  'https://facebook.github.io/react-native/img/tiny_logo.png',
              }}
            />
            <View style={{marginTop: 5}}>
              <Text style={{marginLeft: 10}}>Name: Bisleri</Text>
              <Text style={{marginLeft: 10}}>Price: Rs.39</Text>
            </View>
          </View>
        </Card>
      </View>
      {/* <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{
          text: 'PROFILE',
          style: {color: '#fff', fontSize: 18},
        }}
        rightComponent={{icon: 'person icon', color: '#fff'}}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  selectList: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    height: 50,
    width: '95%',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  cardView: {
    borderRadius: 15,
    borderColor: 'lightgray',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 2,
  },
});

export default Orders;

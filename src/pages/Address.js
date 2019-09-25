import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../components/Common/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox, Card, Text} from 'react-native-elements';
import {Container, Content, Footer} from 'native-base';
import navController from '../controllers/navController';
const Address = props => {
  const [address, setAddress] = useState([
    {
      house_no: '002, #86',
      colony: 'Reliable Residency',
      city: 'Bangalore',
      state: 'Bihar',
      pin: '841301',
      latitude: '12.121221',
      longitude: '-41.2342323',
      address_id: 1,
      name: 'Mohit Prakash',
      phone: '7022488224',
    },
    {
      house_no: '002, #86',
      colony: 'Reliable Residency',
      city: 'Bangalore',
      state: 'Bihar',
      pin: '841302',
      address_id: 2,
      name: 'Mohit Prakash',
      phone: '7022488224',
    },
  ]);
  const [addressId, setAddressId] = useState(1);
  return (
    <Container>
      <CustomHeader
        page="ADDRESS"
        heading="Address"
        backButton={true}
        cart={true}
      />
      <Content style={{backgroundColor: '#F4F2FF'}}>
        <View>
          <TouchableOpacity
            onPress={() => navController.navigate('AddAddress')}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                backgroundColor: 'white',
                marginBottom: 10,
                marginTop: 5,
              }}>
              <CheckBox
                checkedIcon={
                  <Icon
                    name="plus"
                    size={24}
                    style={{marginRight: 10}}
                    color={'#0E65B3'}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="plus"
                    size={24}
                    style={{marginRight: 10}}
                    color={'#0E65B3'}
                  />
                }
                checked={true}
              />
              <Text
                style={{
                  fontSize: 16,
                  position: 'relative',
                  top: 16,
                  color: '#0E65B3',
                }}>
                Add a New Address
              </Text>
            </View>
          </TouchableOpacity>
          {address.map((item, index) => (
            <View style={{display: 'flex', backgroundColor: 'white'}}>
              <View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottomColor: 'lightgray',
                    borderBottomWidth: 1,
                  }}>
                  <CheckBox
                    checked={addressId === item.address_id}
                    onPress={() => setAddressId(item.address_id)}
                  />
                  <View
                    style={{padding: 5}}
                    onPress={() => setAddressId(item.address_id)}>
                    <Text style={{fontSize: 16}}>{item.name}</Text>
                    <Text style={{fontSize: 14}}>{item.house_no}</Text>
                    <Text style={{fontSize: 14}}>{item.colony}</Text>
                    <Text style={{fontSize: 14}}>
                      {item.city},{item.state}
                    </Text>
                    <Text style={{fontSize: 14}}>{item.pin}</Text>
                    <Text style={{fontSize: 14}}>{item.phone}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </Content>
      <Footer>
        <TouchableOpacity
          onPress={() => Alert.alert('Simple Button pressed')}
          style={{position: 'relative', top: 10}}>
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              color: 'white',
              fontSize: 18,
            }}>
            Deliver Here
          </Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default Address;

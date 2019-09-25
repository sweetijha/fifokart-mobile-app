import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Container, Content, Footer} from 'native-base';
import CustomHeader from '../components/Common/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox, Card, Text, Input} from 'react-native-elements';
const AddAddress = props => {
  const [houseNo, setHouseNo] = useState('');
  const [colony, setColony] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <Container>
      <CustomHeader
        page="Add_ADDRESS"
        heading="Add Address"
        backButton={true}
        cart={true}
      />
      <Content style={{backgroundColor: '#F4F2FF'}}>
        <View>
          <View>
            <View
              style={{
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                backgroundColor: 'white',
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
              }}>
              <View>
                <Input
                  placeholder="Name"
                  value={name}
                  onChangeText={val => setName(val)}
                  containerStyle={{marginBottom: 10}}
                />
              </View>
              <View>
                <Input
                  placeholder="House No"
                  value={houseNo}
                  onChangeText={val => setHouseNo(val)}
                  containerStyle={{marginBottom: 10}}
                />
              </View>
              <View>
                <Input
                  placeholder="Colony"
                  value={colony}
                  onChangeText={val => setColony(val)}
                  containerStyle={{marginBottom: 10}}
                />
              </View>
              <View>
                <Input
                  placeholder="City"
                  value={city}
                  onChangeText={val => setCity(val)}
                  containerStyle={{marginBottom: 10}}
                />
              </View>
              <View>
                <Input
                  placeholder="State"
                  value={state}
                  onChangeText={val => setState(val)}
                  containerStyle={{marginBottom: 10}}
                />
              </View>
              <View>
                <Input
                  placeholder="Pin Code"
                  value={pin}
                  onChangeText={val => setPin(val)}
                  containerStyle={{marginBottom: 10}}
                  keyboardType={`number-pad`}
                  maxLength={6}
                />
              </View>
              <View>
                <Input
                  placeholder="Phone"
                  value={phone}
                  onChangeText={val => setPhone(val)}
                  containerStyle={{marginBottom: 10}}
                  keyboardType={`number-pad`}
                  maxLength={10}
                />
              </View>
            </View>
          </View>
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
            Submit
          </Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default AddAddress;

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../components/Common/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {H3, Card} from 'native-base';
import {CheckBox} from 'react-native-elements';
import navController from '../controllers/navController';
const Cart = props => {
  const [isScheduled, setIsScheduled] = useState(false);
  const [addressId, setAddressId] = useState('');
  const [cartDetails, setCartDetails] = useState([
    {
      product_id: 1,
      product_name: 'Bisleri New',
      mrp: 75,
      selling_price: 70,
      quantity: 2,
      product_image:
        'https://5.imimg.com/data5/OK/LL/MY-3949632/bislerii-mineral-water-20-ltr-250x250.png',
    },
    {
      product_id: 2,
      product_name: 'Local Water',
      mrp: 35,
      selling_price: 30,
      quantity: 1,
      product_image:
        'https://5.imimg.com/data5/OK/LL/MY-3949632/bislerii-mineral-water-20-ltr-250x250.png',
    },
  ]);
  function changeQuantity(index, qty) {
    cartDetails[index].quantity += qty;
    setCartDetails([...cartDetails]);
  }
  function getTotalPrice() {
    let totalPrice = 0;
    for (let item of cartDetails) {
      totalPrice += item.selling_price * item.quantity;
    }
    return totalPrice;
  }
  return (
    <View style={{position: 'relative', height: '100%'}}>
      <CustomHeader page="CART" heading="My Cart" backButton={true} />
      <View>
        {/* <CheckBox
          title="Click here for shceduled your order"
          checked={isScheduled}
          onPress={() => setIsScheduled(!isScheduled)}
        /> */}
        <View style={{display: 'flex', padding: 5}}>
          <Card style={{padding: 10}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                paddingBottom: 10,
              }}>
              <Text style={{flex: 1}}>Price Details</Text>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <Text style={{flex: 1}}>Price ({cartDetails.length} Items)</Text>
              <Text style={{fontSize: 14}}>
                <Icon name="currency-inr" size={16} /> {getTotalPrice()}
              </Text>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
              <Text style={{flex: 1}}>Delivery</Text>
              <Text style={{fontSize: 14}}>Free</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderTopWidth: 1,
                borderTopColor: 'gray',
                paddingTop: 10,
              }}>
              <Text style={{flex: 1}}>Total Price</Text>
              <Text style={{fontSize: 14}}>
                <Icon name="currency-inr" size={16} />
                {getTotalPrice()}
              </Text>
            </View>
          </Card>
        </View>
        {cartDetails.map((item, index) => (
          <View style={{display: 'flex', padding: 5}}>
            <Card style={{padding: 10}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{marginTop: 5, flex: 1}}>
                  <H3 style={{marginLeft: 10}}>{item.product_name}</H3>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        color: '#B20000',
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                        fontSize: 20,
                        fontWeight: '600',
                        marginRight: 10,
                      }}>
                      <Icon name="currency-inr" color={'#B20000'} size={20} />
                      {item.mrp}
                    </Text>
                    <Text
                      style={{
                        color: 'blue',
                        fontSize: 20,
                        fontWeight: '600',
                      }}>
                      <Icon name="currency-inr" color={'blue'} size={20} />
                      {item.selling_price}
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          marginRight: 10,
                          fontSize: 22,
                        }}>{`QTY:- `}</Text>
                      <Icon
                        name="minus-circle"
                        size={24}
                        style={{marginRight: 10}}
                        color={'#B20000'}
                        onPress={() => changeQuantity(index, -1)}
                      />
                      <Text
                        style={{
                          marginRight: 10,
                          fontSize: 22,
                          position: 'relative',
                          top: -3,
                        }}>
                        {item.quantity}
                      </Text>
                      <Icon
                        name="plus-circle"
                        size={24}
                        style={{marginRight: 10}}
                        color={'#0E65B3'}
                        onPress={() => changeQuantity(index, 1)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 50,
                      height: 60,
                      resizeMode: 'cover',
                    }}
                    source={{
                      uri: item.product_image,
                    }}
                  />
                  <View
                    style={{
                      padding: 5,
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderColor: '#B20000',
                      borderWidth: 1,
                      borderRadius: 5,
                      marginTop: 10,
                      display: 'flex',
                      flexDirection: 'row',
                    }}>
                    <Icon
                      name="trash-can-outline"
                      style={{marginRight: 10}}
                      color={'#B20000'}
                      size={20}
                    />
                    <Text style={{color: '#B20000'}}>{`remove`}</Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        ))}
        <View style={{display: 'flex', padding: 5}}>
          <Card style={{padding: 10}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                paddingBottom: 10,
              }}>
              <Text style={{flex: 1}}>Price Details</Text>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <Text style={{flex: 1}}>Price ({cartDetails.length} Items)</Text>
              <Text style={{fontSize: 14}}>
                <Icon name="currency-inr" size={16} /> {getTotalPrice()}
              </Text>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
              <Text style={{flex: 1}}>Delivery</Text>
              <Text style={{fontSize: 14}}>Free</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderTopWidth: 1,
                borderTopColor: 'gray',
                paddingTop: 10,
              }}>
              <Text style={{flex: 1}}>Total Price</Text>
              <Text style={{fontSize: 14}}>
                <Icon name="currency-inr" size={16} />
                {getTotalPrice()}
              </Text>
            </View>
          </Card>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          padding: 10,
          borderTopWidth: 2,
          borderTopColor: 'lightgray',
        }}>
        <Text style={{fontSize: 22, flex: 1}}>
          <Icon name="currency-inr" size={22} />
          {getTotalPrice()}
        </Text>
        <TouchableOpacity style={{paddingLeft: 30, paddingRight: 10}}>
          <Button
            title="Place Order"
            onPress={() => navController.navigate("Address")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

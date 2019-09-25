import React, {useState, useReducer, useCallback} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {
  Container,
  Content,
  Footer,
  Title,
  Form,
  Picker,
  Item,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../../assets/svgs/cart';
import LocationDetect from '../../components/Products/LocationDetect';
import ProductList from '../../components/Products/ProductList';
import CustomHeader from '../../components/Common/CustomHeader';
import {reducer, initialState} from '../../service/reducer/user';
import {GET_LOGIN} from '../../service/constant';

const Product = props => {
  const [vendor, setVendor] = useState('ALL');
  const [state, dispatch] = useReducer(reducer, initialState);
  Alert.alert(JSON.stringify(state));
  return (
    <Container>
      <CustomHeader page="PRODUCT" cart={true} />
      <Content>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: '100%'}}
              placeholder="Select Vendor"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={vendor}
              onValueChange={val => setVendor(val)}>
              <Picker.Item label="ALL" value="ALL" />
              <Picker.Item label="Vendor 1" value="1" />
              <Picker.Item label="Vendor 2" value="2" />
            </Picker>
          </Item>
        </Form>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <ProductList list={[1, 2, 3, 4, 5]} />
        </View>
      </Content>

      <Footer>
        <Title
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: 10,
          }}>
          <Text>Proceed To Checkout</Text>
        </Title>
      </Footer>
    </Container>
  );
};

export default Product;

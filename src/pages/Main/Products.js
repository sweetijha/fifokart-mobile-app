import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  Title,
  Badge,
  Form,
  Picker,
  Item
} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Cart from "../../assets/svgs/cart";
import LocationDetect from "../../components/Products/LocationDetect";
import ProductList from "../../components/Products/ProductList";

const Product = props => {
  const [vendor, setVendor] = useState("ALL");
  return (
    <Container>
      <Header style={{ backgroundColor: "white", display: "flex" }}>
        <LocationDetect />
        <View
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <Badge
            primary
            style={{
              position: "absolute",
              top: 5,
              right: -5,
              width: 20,
              height: 20
            }}
          >
            <Text style={{ fontSize: 12, color: "white" }}>2</Text>
          </Badge>
          <Icon name="cart-outline" color={"#384850"} size={30} />
        </View>
      </Header>

      <Content>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: "100%" }}
              placeholder="Select Vendor"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={vendor}
              onValueChange={val => setVendor(val)}
            >
              <Picker.Item label="ALL" value="ALL" />
              <Picker.Item label="Vendor 1" value="1" />
              <Picker.Item label="Vendor 2" value="2" />
            </Picker>
          </Item>
        </Form>
        <View
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <ProductList list={[1, 2, 3, 4, 5]} />
        </View>
      </Content>

      <Footer>
        <Title
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            top: 10
          }}
        >
          <Text>Proceed To Checkout</Text>
        </Title>
      </Footer>
    </Container>
  );
};

export default Product;

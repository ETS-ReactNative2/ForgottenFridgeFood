import React, { useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Menu from "../components/Menu";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-default";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
`;
const ProductContainer = styled.View`
  height: 85%;
`;
const Texts = styled.Text``;
const MenuItems = styled.View`
  align-items: center;
`;
const ListsScreen = ({ navigation, route }) => {
  const { key, name } = route.params;
  return (
    <Wrapper>
      <SearchBar
        inputStyle={{ backgroundColor: "white" }}
        containerStyle={{
          backgroundColor: "white",
          borderWidth: 1,
          borderRadius: 40,
          height: 42,
          justifyContent: "center",
          marginBottom: 10,
        }}
        placeholderTextColor={"#479FEC"}
        placeholder={"Do i have.."}
      />
      <Texts>
        {key}
        {name}
      </Texts>
      <ProductContainer>
        <Product />
      </ProductContainer>
      <MenuItems>
        <Menu />
      </MenuItems>
    </Wrapper>
  );
};
export default ListsScreen;

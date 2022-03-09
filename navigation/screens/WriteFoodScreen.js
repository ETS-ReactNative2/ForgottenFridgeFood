import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const Wrapper = styled.View`
  margin: 10% 5% 10% 5%;
  height: 90%;
  background-color: gray;
`;
const Texts = styled.Text``;
const AddButton = styled.TouchableOpacity`
  margin: 0 auto 0 auto;
  width: 60%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50px;
`;
const AddButtonText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.text.white};
`;
const TextInputStyled = styled.TextInput`
  margin: 10% 0 10% 0;
  font-size: 25px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.text.white};
`;

const WriteFoodScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <TextInputStyled placeholder="Name" />
      <AddButton
        onPress={() => {
          navigation.navigate("Lists", { key: 1, name: "nedim" });
        }}
      >
        <AddButtonText>Add food</AddButtonText>
      </AddButton>
    </Wrapper>
  );
};
export default WriteFoodScreen;

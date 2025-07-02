import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";


const Detail = (): React.JSX.Element => {
  return (
    <View>
      <Header />
      <View>
        <Text>買い物リスト</Text>
        <Text>2023年10月1日 10:00</Text>
      </View>
      <ScrollView>
        <Text>
          買い物リスト
          書体やレイアウトなどを確認するために使用します。
          本文ようなので使い方を間違えると不自然に見えることもあります。
        </Text>
      </ScrollView>
      <CircleButton>+</CircleButton>
    </View>
  );
}

export default Detail;
import React, { memo } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";


const Detail = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text  style={styles.memoDate}>2023年10月1日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          書体やレイアウトなどを確認するために使用します。
          本文ようなので使い方を間違えると不自然に見えることもあります。
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 12,
    lineHeight: 16,
    marginLeft: 16,
    marginBottom: 16,
  },
  memoBody: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
    backgroundColor: "#FFFFFF",
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#0000000",
  },
});

export default Detail;
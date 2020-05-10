import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  Dimensions,
  SafeAreaView
} from "react-native";
import AlphabetSectionList from "react-native-alphabet-sectionlist";
import sectionListGetItemLayout from "react-native-section-list-get-item-layout";

import collection from "./data";

const collectionByAlphabet = collection.releases.reduce((acc, item) => {
  const artist = item.basic_information.artists[0].name;
  const firstLetterCapitalized = artist[0].toUpperCase();
  return {
    ...acc,
    [firstLetterCapitalized]: acc[firstLetterCapitalized]
      ? [...acc[firstLetterCapitalized], item]
      : [item]
  };
}, {});

const win = Dimensions.get("window");

const Item = ({ item }) => {
  return (
    <View key={item.basic_information.instance_id}>
      {/* <Text>{item.basic_information.title}</Text> */}
      <Image
        source={{ uri: item.basic_information.cover_image }}
        style={styles.image}
      />
    </View>
  );
};

const getItemLayout = sectionListGetItemLayout({
  getItemHeight: (rowData, sectionIndex, rowIndex) => win.width,
  getSectionHeaderHeight: () => 12,
  listHeaderHeight: 40
});

const renderHeader = () => {
  return <Text>Your Collection</Text>;
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AlphabetSectionList
        data={collectionByAlphabet}
        renderItem={({ item }) => <Item item={item} />}
        getItemLayout={getItemLayout}
        renderHeader={renderHeader}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: win.width
  }
});

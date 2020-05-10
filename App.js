import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  Dimensions
} from "react-native";
import HeaderScrollView from "react-native-header-scroll-view";

import data from "./data";

const win = Dimensions.get("window");

const Item = ({ item }) => {
  return (
    <View>
      <Text>{item.basic_information.title}</Text>
      <Image
        source={{ uri: item.basic_information.cover_image }}
        style={styles.image}
      />
    </View>
  );
};

export default function App() {
  return (
    <HeaderScrollView title="Your Collection">
      <FlatList
        data={data.releases}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.basic_information.instance_id}
      />
    </HeaderScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: win.width
  }
});

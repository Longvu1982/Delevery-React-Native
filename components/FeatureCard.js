import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import DropShadow from "react-native-drop-shadow";
import React from "react";
import { urlFor } from "../sanity";

const FeatureCard = ({name, rating, image, address, dsc, id}) => {
  return (
    // <DropShadow style={styles.shadowProp}>
      <TouchableOpacity className="w-56 h-52 relative mr-3 rounded-sm overflow-hidden shadow">
        <Image
          resizeMode="cover"
          className="w-full h-full"
          source={{
            uri: urlFor(image).url(),
          }}
        />
        <View className="absolute bottom-0 left-0 right-0 h-[80px] bg-white px-2 py-1 overflow-hidden">
          <Text className="text-base font-bold mb-1">{name}</Text>
          <View className="flex-row items-center space-x-1 mb-1">
            <StarIcon size={12} color="#00ccbb" />
            <Text className="text-[#00ccbb] text-xs">{rating}</Text>
            <View className="w-[2.5px] h-[2.5px] bg-[#00ccbb] rounded-full"></View>
            <Text  className="text-xs text-gray-500">{dsc}</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <MapPinIcon size={12} color="#00ccbb" />
            <Text className="text-[#00ccbb] text-xs">Gần bạn</Text>
            <View className="w-[2.5px] h-[2.5px] bg-[#00ccbb] rounded-full"></View>
            <Text numberOfLines={1} className="text-xs text-gray-500 text-ellipsis flex-1">{address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    // </DropShadow>
  );
};

export default FeatureCard;
const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#373737",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

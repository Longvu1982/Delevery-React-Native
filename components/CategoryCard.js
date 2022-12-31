import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ title, ImgUrl }) => {
	return (
		<TouchableOpacity className="relative rounded overflow-hidden mr-2">
			<Image source={{ uri: ImgUrl }} className="w-20 h-20 bg-yellow-300" />
			<Text className="absolute left-1 bottom-1 text-white">{title}</Text>
		</TouchableOpacity>
	);
};

export default CategoryCard;

import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import React from "react";

const Categories = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			className="bg-gray-100"
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
		>
			<CategoryCard
				ImgUrl="https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/square-cake-chocolate011-700x700.jpg"
				title="test 1"
			/>
			<CategoryCard
				ImgUrl="https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/square-cake-chocolate011-700x700.jpg"
				title="test 1"
			/>
			<CategoryCard
				ImgUrl="https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/square-cake-chocolate011-700x700.jpg"
				title="test 1"
			/>
			<CategoryCard
				ImgUrl="https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/square-cake-chocolate011-700x700.jpg"
				title="test 1"
			/>
			<CategoryCard
				ImgUrl="https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/square-cake-chocolate011-700x700.jpg"
				title="test 1"
			/>
			<CategoryCard
				ImgUrl="https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/square-cake-chocolate011-700x700.jpg"
				title="test 1"
			/>
			<CategoryCard
				ImgUrl="https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/square-cake-chocolate011-700x700.jpg"
				title="test 1"
			/>
			<CategoryCard
				ImgUrl="https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/square-cake-chocolate011-700x700.jpg"
				title="test 1"
			/>
			<CategoryCard
				ImgUrl="https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/square-cake-chocolate011-700x700.jpg"
				title="test 1"
			/>
		</ScrollView>
	);
};

export default Categories;

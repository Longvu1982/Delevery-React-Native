import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeatureCard from "./FeatureCard";
import client from "../sanity";

const FeatureRow = ({ id, title, dcs }) => {
  const [featuredCard, setFeaturedCard] = useState([]);
  const getFeaturedCard = () =>
    client
      .fetch(
        `*[_type == 'featured' && _id == $id ] {
        restaurants[] -> {
          _id, name, dsc, mainImage, rating, address
        }
      }[0]`,
        { id }
      )
      .then((data) => setFeaturedCard(data.restaurants));

  useEffect(() => {
    getFeaturedCard();
  }, []);

  console.log(featuredCard);
  return (
    <View className="mt-3">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-xs font-semibold text-gray-400">{dcs}</Text>
        </View>
        <ArrowRightIcon size={20} color="#00ccbb" />
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingVertical: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {featuredCard && featuredCard.map(({ _id, name, dsc, mainImage, rating, address }) => (
          <FeatureCard
            key={_id}
            id={_id}
            name={name}
            dsc={dsc}
            rating={rating}
            address={address}
            image={mainImage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;

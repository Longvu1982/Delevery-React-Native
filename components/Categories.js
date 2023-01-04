import { RefreshControl, ScrollView, View } from "react-native";
import CategoryCard from "./CategoryCard";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { urlFor } from "../sanity";
import client from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    wait(600).then(() => getCategories());
  }, []);

  const getCategories = () =>
    client
      .fetch(`*[_type == 'category']|order(order) {_id, title, image}`)
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });

  useEffect(() => {
    getCategories();
  }, []);

//   console.log(categories);
  return (
    <>
      <RefreshControl refreshing={false} onRefresh={onRefresh} tintColor='transparent' />
      {isLoading ? (
        <View className="items-center justify-center h-20">
          <ActivityIndicator />
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="bg-gray-100 mb-2"
          contentContainerStyle={{
            paddingTop: 10,
          }}
        >
          {categories?.map(({ _id, title, image }) => (
            <CategoryCard
              key={_id}
              title={title}
              ImgUrl={urlFor(image).width(200).url()}
            />
          ))}
        </ScrollView>
      )}
    </>
  );
};

export default Categories;

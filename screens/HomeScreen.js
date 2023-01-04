import { View, Text, Image, TextInput, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import { ScrollView } from "react-native";
import client from "../sanity";

const HomeScreen = () => {
  const [featuredRow, setFeaturedRow] = useState();
  const getFeatured = () =>
    client
      .fetch(`*[_type == 'featured'] {name, dsc, _id}`)
      .then((data) => setFeaturedRow(data));

  useEffect(() => {
    getFeatured();
  }, []);

  console.log(featuredRow);
  return (
    <>
      <SafeAreaView className="pb-0 pt-8 bg-white">
        <View className="bg-white h-auto px-4 pb-3">
          <View className="flex-row items-center mb-4">
            <View className="flex-1 mt-2 flex-row space-x-2 items-center">
              <Image
                source={{
                  uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
                }}
                className="w-12 h-12 rounded-full bg-gray-300"
              />
              <View>
                <Text className="text-gray-400 font-semibold text-[12px]">
                  Giao hàng ngay!
                </Text>
                <View className="flex-row items-center space-x-2">
                  <Text className="text-black font-bold text-lg">
                    Vị trí hiện tại
                  </Text>
                  <ChevronDownIcon
                    size={15}
                    color="#00ccbb"
                    className="-mb-6"
                  />
                </View>
              </View>
            </View>
            <View>
              <UserIcon size={35} color="#00ccbb" />
            </View>
          </View>
          <View className="flex-row items-center justify-center space-x-2">
            <View className="flex-1 px-2 py-3 bg-gray-100 flex-row items-center space-x-1">
              <MagnifyingGlassIcon size={15} color="gray" />
              <TextInput
                // onBlur={() => console.log("blur")}
                className="w-full h-4"
                placeholder="Tìm kiếm món ăn"
              />
            </View>
            <AdjustmentsVerticalIcon size={25} color="#00ccbb" />
          </View>
        </View>
        <View className="bg-gray-100 px-[15px]">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 300,
            }}
          >
            <Categories />
            {featuredRow?.map(({ _id, name, dsc }) => (
              <FeatureRow key={_id} id={_id} title={name} dcs={dsc} />
            ))}
            {/* <FeatureRow title="Near you" dcs="Find your best food" /> */}
            <Text className="text-black">Nothing</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

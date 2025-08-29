import React from "react";
import { View, Text, Image } from "react-native";
import { books, bands, games } from "../catalogue.json";
import "./../global.css";

export default function CatalogueScreen() {
  return (
    <View className="flex-1 overflow-y-auto">
      <View className="h-16 px-10 bg-blue-600 justify-center items-start">
        <Text className="text-blue-50 font-bold text-lg">Roel's Catalogue</Text>
      </View>

      <View className="flex-1 bg-gray-100 p-4 flex">
        <Text className="text-2xl font-bold mb-4">Books</Text>
        <Text className="mb-4">
          These are the books I like most and recommend you to give a chance to.
        </Text>

        <View className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {books.map((book) => (
          <View key={book.id} className="bg-white rounded-lg shadow p-4 mb-4 justify-between flex">
            <Text className="text-lg font-bold mb-1">{book.title}</Text>
            <Text className="italic text-gray-600 mb-1">{book.subtitle}</Text>
            <Text className="text-gray-400">{book.year}</Text>
          </View>
        ))}
        </View>

        <Text className="text-2xl font-bold mt-8 mb-4">Bands</Text>
        <Text className="mb-4">
          These are the books I like most and recommend you to give a chance to.
        </Text>

        <View className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {bands.map((band) => (
            <View
              key={band.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
            >
              <Image
                source={{ uri: band.url }}
                className="w-full h-72 mb-4 rounded object-cover"
              />
              <View className="flex-1">
                <Text className="text-lg font-bold mb-1">{band.name}</Text>
                <Text className="italic text-gray-600 mb-1">{band.genre}</Text>
                <Text className="text-gray-400">{band.founded}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text className="text-2xl font-bold mt-8 mb-4">Games</Text>
        <Text className="mb-4">
          The games which have a special place in my heart. They're awesome.
        </Text>

        <View className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <View
              key={game.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
            >
              <Image
                source={{ uri: game.url }}
                className="w-full h-72 mb-4 rounded object-cover"
              />
              <View className="flex-1">
                <Text className="text-lg font-bold mb-1">{game.title}</Text>
                <Text className="italic text-gray-600 mb-1">{game.subtitle}</Text>
                <Text className="text-gray-400">{game.year}</Text>
              </View>
            </View>
          ))}
        </View>

      </View>
    </View>
  );
}

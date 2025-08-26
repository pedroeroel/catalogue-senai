import React from 'react';
import { View, Text } from 'react-native';
import { books } from '../catalogue.json';
import './../global.css'

export default function CatalogueScreen() {

  return (
    <View>
        {books.map(book => (
            <View key={book.id} className="mb-4">
                <Text className="text-lg font-bold">{book.title}</Text>
                <Text className="italic text-gray-600">{book.subtitle}</Text>
                <Text className="text-gray-400">{book.year}</Text>
            </View>
        ))}
    </View>
  );
}
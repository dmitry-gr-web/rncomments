import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function CommentItem() {
  return (
    <View>

      <View style={styles.header}>
        <View style={styles.img}></View>
        <Text>CommentItem</Text>
        <Text>20.05.2024</Text>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          provident odio, dolorum, nemo earum eum tempora velit voluptates natus
          omnis laborum necessitatibus perspiciatis. Assumenda, facere
          inventore! Corporis dolorem nulla quam.
        </Text>
      </View>
      <TouchableOpacity style={{backgroundColor: 'red'}}>
        <Text>Ответить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#06daf6',
    flexDirection: 'row',
    borderRadius: 10,
  },
  img: {
    backgroundColor: 'pink',
    borderRadius: 100,
    width: 70,
    height: 70,
  },
});

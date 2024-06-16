import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddCommentScreen() {
  const [comment, setComment] = useState('');
  const router = useRouter();

  const handleAddComment = () => {
    console.log('Comment:', comment);
    router.push('/comments');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Comment</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your comment"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Submit" onPress={handleAddComment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

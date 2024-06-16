import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useState} from 'react';
export default function AddCommentScreen({navigation}) {
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    console.log('Comment:', comment);
    navigation.navigate('comments');
  };

  return (
    <View style={styles3.container}>
      <Text style={styles3.title}>Add Comment</Text>
      <TextInput
        style={styles3.input}
        placeholder="Enter your comment"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Submit" onPress={handleAddComment} />
    </View>
  );
}
const styles3 = StyleSheet.create({
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

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import {useState} from 'react';
import CommentItem from '../components/CommentItem';
export default function CommentsScreen({navigation}) {
  return (
    // <SafeAreaView style={{flex:1}}>
    <View style={styles2.container}>
      <View>
        <Text>Комментарии</Text>
        <Text>UserName</Text>
        <Text>Email</Text>
        <Text>Date</Text>
      </View>
      {/* <Text style={styles2.title}>Comments</Text>
      <Button
        title="Add Comment"
        onPress={() => navigation.navigate('addComment')}
      /> */}
      <ScrollView>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      </ScrollView>

    </View>
    // </SafeAreaView>
  );
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

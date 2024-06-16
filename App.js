
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Stack } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const StackNavigator = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="index" component={LoginScreen} options={{ title: 'Login' }} />
        <StackNavigator.Screen name="comments" component={CommentsScreen} options={{ title: 'Comments' }} />
        <StackNavigator.Screen name="addComment" component={AddCommentScreen} options={{ title: 'Add Comment' }} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      navigation.navigate('comments');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
function CommentsScreen({ navigation }) {
  return (
    <View style={styles2.container}>
      <Text style={styles2.title}>Comments</Text>
      <Button title="Add Comment" onPress={() => navigation.navigate('addComment')} />
    </View>
  );
}
function AddCommentScreen({ navigation }) {
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
const styles2 = StyleSheet.create({
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
});


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
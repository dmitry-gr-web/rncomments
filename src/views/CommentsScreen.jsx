import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native'
import {useCallback,useState} from 'react'
import {fontFamily} from '../utils/constants'
import CommentItem from '../components/CommentItem'
import {SvgComponent} from '../assets/image/svg'
import { useTheme } from '@react-navigation/native'
export default function CommentsScreen({navigation}) {
  const [refreshing, setRefreshing] = useState(false)
  const theme = useTheme()
  console.log(theme)
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])
  return (
    // <SafeAreaView style={{flex:1}}>
    <View style={styles2.container}>
      <View>
        <Text style={styles2.text}>Комментарии</Text>
        <Text>UserName</Text>
        <Text>Email</Text>
        <Text>Date</Text>
      </View>
      <TouchableOpacity onPress={() => {
            navigation.navigate('addComment');
      }}>
        <SvgComponent style={{transform: [{rotate: '45deg'}]}} />
      </TouchableOpacity>
      {/* <Text style={styles2.title}>Comments</Text>
      <Button
        title="Add Comment"
        onPress={() => navigation.navigate('addComment')}
      /> */}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </ScrollView>
    </View>
    // </SafeAreaView>
  )
}
const styles2 = StyleSheet.create({
  text: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
  },
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
})

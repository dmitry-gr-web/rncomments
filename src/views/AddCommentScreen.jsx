import React from 'react'
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
  avatar: Yup.string().required('Avatar is required'),
  username: Yup.string().required('UserName is required'),
  email: Yup.string().email('Invalid email').optional(),
  homepage: Yup.string().url('Invalid URL').optional(),
  captcha: Yup.string().optional(),
  text: Yup.string().optional(),
})

const FormComponent = () => (
  <Formik
    initialValues={{
      avatar: '',
      username: '',
      email: '',
      homepage: '',
      captcha: '',
      text: '',
    }}
    validationSchema={validationSchema}
    onSubmit={values => {
      console.log(values)
    }}>
    {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
      <View style={styles.container}>
        <Text>Avatar</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('avatar')}
          onBlur={handleBlur('avatar')}
          value={values.avatar}
        />
        {touched.avatar && errors.avatar && (
          <Text style={styles.error}>{errors.avatar}</Text>
        )}

        <Text>UserName</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={values.username}
        />
        {touched.username && errors.username && (
          <Text style={styles.error}>{errors.username}</Text>
        )}

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        {touched.email && errors.email && (
          <Text style={styles.error}>{errors.email}</Text>
        )}

        <Text>Homepage</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('homepage')}
          onBlur={handleBlur('homepage')}
          value={values.homepage}
        />
        {touched.homepage && errors.homepage && (
          <Text style={styles.error}>{errors.homepage}</Text>
        )}

        <Text>CAPTCHA</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('captcha')}
          onBlur={handleBlur('captcha')}
          value={values.captcha}
        />
        {touched.captcha && errors.captcha && (
          <Text style={styles.error}>{errors.captcha}</Text>
        )}

        <Text>Text</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('text')}
          onBlur={handleBlur('text')}
          value={values.text}
        />
        {touched.text && errors.text && (
          <Text style={styles.error}>{errors.text}</Text>
        )}

        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
})

export default FormComponent

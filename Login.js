import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Image, TextInput, Alert, Animation, Animated, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Fontisto";
import Icon2 from "react-native-vector-icons/Fontisto";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const Login = ({ navigation }, props) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  const data = { name: name, email: email }
  const addUserhandler = () => {
    if (name == '' || email == '') {
      alert('Please fill all required field')
    } else {
      setname('')
      setemail('')
      alert('Login Successfully')
    }

  };
  return (
    <View style={styles.container}>

<KeyboardAwareScrollView>


      <View style={styles.log}>
        <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold', marginLeft: '10%' }}>
          Log In
        </Text>
      </View>


      <View style={styles.input}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon style={{ marginLeft: 10, alignSelf: 'center' }} name="user" size={16} color='white' />
          <TextInput
            placeholderTextColor="white"
            style={{ marginLeft: 3, color: 'white',width:'100%' }}
            placeholder="Username"
            onChangeText={(email) => setemail(email)}
            defaultValue={email}
          />
        </View>
      </View>


      <View style={styles.input1}>
        <View style={{ flexDirection: 'row', }}>
          <Icon1 style={{ marginLeft: 10, alignSelf: 'center' }} name="locked" size={16} color='white' />
          <View style={{ width: '78%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{width:'100%'}}>
              <TextInput
                placeholderTextColor="white"
                style={{ marginLeft: 5, color: 'white' }}
                placeholder="Password"
                onChangeText={(text) => setname(text)}
                defaultValue={name}
              />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ color: 'white', }}>
                Show
              </Text>
            </View>
          </View>
        </View>
      </View>


      <View style={styles.remember}>
        <View style={{ flexDirection: 'row' }}>
          <Icon2 style={{ alignSelf: 'center' }} name="checkbox-passive" size={16} color='white' />
          <Text style={{ marginLeft: 10, color: 'white' }}>
            Remember me
          </Text>
        </View>
        <Text style={{ color: '#ef3b58' }}>
          Forgot Password
        </Text>
      </View>


      <TouchableOpacity onPress={addUserhandler}  >
        <View style={styles.button}>
          <Text style={{ fontSize: 15, fontSize: 18, color: 'white', fontWeight: 'bold' }}>
            Log in
          </Text>
        </View>
      </TouchableOpacity>


      <View style={styles.signin}>
        <Text style={{ color: 'white', fontSize: 16 }}>
          Or Sign in with
        </Text>
        <View style={styles.logos}>
          <Image
            style={{ width: 23, height: 23 }}
            source={require('./fb.png')}
          />
          <Image
            style={{ width: 23, height: 23 }}
            source={require('./twitter.png')}
          />
          <Image
            style={{ width: 23, height: 23 }}
            source={require('./ggg.png')}
          />
          <Image
            style={{ width: 23, height: 23 }}
            source={require('./insta.jpg')}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'darkgrey' }}>
            Don't have an account?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>

            <Text style={{ color: '#ef3b58', marginLeft: '10%' }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

</KeyboardAwareScrollView>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25273e",
  },
  textInput:
  {
    width: '85%',
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#FF9800',
    backgroundColor: '#fff',
  },

  log:
  {
    height: height * 10 / 100,
    width: width * 70 / 100,
    marginTop:'15%',
  },

  input:

  {
    height: height * 6 / 100,
    borderColor: '#ef3b58',
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center'
  },

  input1:
  {
    height: height * 6 / 100,
    borderColor: '#ef3b58',
    marginTop: '6%',
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center'
  },

  remember:

  {
    width: '75%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '5%',
    flexDirection: 'row'
  },

  button:
  {
    width: '78%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ef3b58',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%'
  },

  signin:
  {
    width: '78%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '40%'
  },
  logos:

  {
    paddingVertical: 15,
    justifyContent: 'space-between',
    width: '41%',
    flexDirection: 'row'
  },




});




export default Login;


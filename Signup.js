import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Alert, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Icon2 from "react-native-vector-icons/Fontisto";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const Signup = ({ navigation }) => {
    const [name, setname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const data = { name: name, lname: lname, email: email, password: password, cpassword: cpassword }

    const addUserhandler = () => {
        if (name == '' || lname == '' || email == '' || password == '' || cpassword == '') {
            alert('Please fill all required field')
        } else {
            setname('')
            setlname('')
            setemail('')
            setpassword('')
            setcpassword('')
            alert('Signup Successfully')
        }
    };

    return (

        <View style={styles.container}>

            <KeyboardAwareScrollView>
                <View style={styles.signup}>
                    <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold', marginLeft: '10%' }}>
                        Sign Up
                    </Text>
                </View>


                <View style={styles.input}>
                    <View style={styles.inputs}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                placeholderTextColor="white"
                                style={{ marginLeft: 10, color: 'white',width:'100%' }}
                                placeholder="First Name"
                                onChangeText={(text) => setname(text)}
                                defaultValue={name}
                            />
                        </View>
                    </View>
                    <View style={styles.input1}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                placeholderTextColor="white"
                                style={{ marginLeft: 10, color: 'white',width:'100%'  }}
                                placeholder="Last Name"
                                onChangeText={(text) => setlname(text)}
                                defaultValue={lname}
                            />
                        </View>
                    </View>
                </View>


                <View style={{ height: height * 6 / 100, borderColor: '#ef3b58', borderWidth: 1, borderRadius: 20, width: '80%', alignSelf: 'center', marginTop: '7%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            placeholderTextColor="white"
                            style={{ marginLeft: 10, color: 'white',width:'100%'  }}
                            placeholder="Email"
                            onChangeText={(email) => setemail(email)}
                            defaultValue={email}
                        />
                    </View>
                </View>


                <View style={styles.input3}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{width:'100%' }}>
                                <TextInput
                                    placeholderTextColor="white"
                                    style={{ marginLeft: 10, color: 'white' }}
                                    placeholder="Password"
                                    onChangeText={(text) => setpassword(text)}
                                    defaultValue={password}
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


                <View style={styles.input3}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{width:'100%' }}>
                                <TextInput
                                    placeholderTextColor="white"
                                    style={{ marginLeft: 10, color: 'white' }}
                                    placeholder=" Confirm Password"
                                    onChangeText={(text) => setcpassword(text)}
                                    defaultValue={cpassword}
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


                <View style={{ width: '70%', alignSelf: 'center', marginTop: '5%', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon2 style={{ alignSelf: 'center' }} name="checkbox-passive" size={16} color='white' />
                        <Text style={{ marginLeft: 10, color: 'white' }}>
                            I Agree with
                        </Text>
                    </View>
                    <Text style={{ color: '#ef3b58', marginLeft: '2%' }}>
                        privacy
                    </Text>
                    <Text style={{ color: 'white', marginLeft: '2%' }}>
                        and
                    </Text>
                    <Text style={{ color: '#ef3b58', marginLeft: '2%' }}>
                        policy
                    </Text>
                </View>


                <TouchableOpacity onPress={addUserhandler} >
                    <View style={{ width: '78%', height: 40, justifyContent: 'center', borderRadius: 20, backgroundColor: '#ef3b58', alignItems: 'center', alignSelf: 'center', marginTop: '10%' }}>
                        <Text style={{ fontSize: 15, fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                            Sign up
                        </Text>
                    </View>
                </TouchableOpacity>


                <View style={styles.account}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'darkgrey' }}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: '#ef3b58', marginLeft: '7%' }}>
                                Sign in
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

        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#FF9800',
        backgroundColor: '#fff',
    },
    signup:
    {
        height: height * 10 / 100,
        width: width * 70 / 100,
        marginTop: '15%'
    },

    input:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '82%',
        alignSelf: 'center'
    },
    inputs:
        { height: height * 6 / 100, flexDirection: 'row', borderColor: '#ef3b58', borderWidth: 1, borderRadius: 20, width: '49%', alignSelf: 'center' },
    input1:
    {
        height: height * 6 / 100,
        flexDirection: 'row',
        borderColor: '#ef3b58',
        borderWidth: 1,
        borderRadius: 20,
        width: '49%',
        alignSelf: 'center'
    },

    input3:
    {
        height: height * 6 / 100,
        borderColor: '#ef3b58',
        marginTop: '6%',
        borderWidth: 1,
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center'
    },

    account:
    {
        width: '78%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '25%'
    }


});




export default Signup;


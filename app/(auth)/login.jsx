import { Image, StyleSheet, View, Text, TouchableOpacity, Animated, Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import LoginField from '../../components/LoginField'
import {Link, router} from 'expo-router';
import CustomText from '../../components/CustomText'

import { icons } from '../../constants'

const Login = () => {
  // return (
  //   <SafeAreaView>
  //     <View className="flex items-center justify-center h-full">
  //       {/* <CustomText title="Hello World" textStyle="text-black-500 text-3xl"/> */}
  //     </View>
  //   </SafeAreaView>
  // )

  const [usePassword, setUsePassword] = useState(true);
  const [form, setForm] = useState({
    mobile: '',
    password: '',
    otp:'',
    usePassword: usePassword
  })

  const submit = async () => {
    try {
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }

  const opacity = useRef(new Animated.Value(1)).current;

  const toggleUsePassword = () => {
      setUsePassword(!usePassword);
      setForm({...form, usePassword: !usePassword})
  };

  return (
    <SafeAreaView className="flex flex-col p-4 h-full justify-between bg-blue-10">
      <View className="">
        <View className="h-60 mt-20 flex justify-center items-center">
          <Image 
            source = {icons.main_logo}
            style={styles.image} 
          />
          <Text className={`font-pbold text-2xl w-max`}>Sign In</Text>
        </View>
        <View className="flex justify-around h-70 mt-15">
          {/* <View>
            <Text className={`font-pbold text-left text-2xl`}>Welcome Back!</Text>
            <Text className={`font-pmedium text-base text-left`}>Log in to your account to enjoy the seamless service of Uniworld.</Text>
          </View> */}
          <View>
            <LoginField
              placeholder="Mobile number"
              value={form.mobile}
              handleChangeText={(e) => setForm({...form, mobile: e})}
              keyboardType='phone-pad'
            />

            {(usePassword) ? 
                  <LoginField
                    placeholder="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({...form, password: e})}
                    secureTextEntry={true}
                  /> :
                  <LoginField
                    placeholder="OTP"
                    value={form.opt}
                    handleChangeText={(e) => setForm({...form, otp: e})}
                    keyboardType='number-pad'
                  />
            }
            <TouchableOpacity activeOpacity={0.8} onPress={toggleUsePassword}>
              <Text className={`font-pmedium text-sm text-right`}>{(usePassword) ? "Login Using OTP" : "Login Using Password"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className={`h-14`}>
        <View className="flex flex-row">
            <View className="flex-1">
                <CustomButton buttonStyle="bg-secondary rounded-md mr-2" textStyle={`font-pbold text-base`} text='Reset Password' handlePress={()=>console.log("Reset Password")}/>
            </View>
            <View className="flex-1">
                <CustomButton buttonStyle="bg-primary rounded-md ml-2" textStyle={`font-pbold text-base`} text='Sign In' handlePress={submit}/>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,  // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain',
  },
});
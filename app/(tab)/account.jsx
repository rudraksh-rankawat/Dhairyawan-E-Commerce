import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../../components/CustomText'

const account = () => {
  return (
    <View>
      <CustomText title="Account" textStyle="text-black-500 text-3xl"/> 
    </View>
  )
}

export default account
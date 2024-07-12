import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack, Slot} from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false }}/>
        <Stack.Screen name='dashboard' options={{headerShown: false }}/>
        <Stack.Screen name='profile' options={{headerShown: false }}/>
    </Stack>
  )
}

export default RootLayout

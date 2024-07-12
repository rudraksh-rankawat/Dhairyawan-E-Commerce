import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Dhairyawan Dashboard</Text>
      <Link href='/' style={{color: 'white', padding: 10, backgroundColor: 'black', marginTop: 20}}> Log Out </Link>
    </View>
  )
}

export default dashboard

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
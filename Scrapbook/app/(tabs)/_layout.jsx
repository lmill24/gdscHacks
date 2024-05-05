import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const TabsLayout = () => {
  return (
    <>
    <Stack>
        <Stack.Screen
        name="home"
        options={{
            headerShown:false, title: "Back"
        }} />
        <Stack.Screen
        name="add"
        options={{
            headerShown:false, title: "Back"
        }} />
    </Stack>
    <StatusBar backgroundColor='#161622' style="light" />
    </>
  )
}

export default TabsLayout
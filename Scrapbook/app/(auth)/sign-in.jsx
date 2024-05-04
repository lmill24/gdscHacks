import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white">
        <ScrollView>
            <View>
            <Text className="text-5xl text-red-500 font-bold">Scrapbook</Text>
            
            </View>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default SignIn
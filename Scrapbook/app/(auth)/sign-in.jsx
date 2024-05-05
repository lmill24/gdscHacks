import { View, Text, ScrollView, TouchableOpacity, Image, Button, TextInput } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import {router} from 'expo-router';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';


const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
        
  return (
    <SafeAreaView className="bg-white h-full">
        <ScrollView>
            <View className="flex-1 items-center justify-center">
                
                <Text className="text-3xl text-red-500 font-bold">Welcome</Text>
            
           
            </View>
            
            <View className="flex-1 items-left ml-10 justify-center p-2">
            <Text className=" text-base text-2xl text-black font-bold">Email
           </Text></View>
           <View className="flex-1 items-center justify-center">
            <View className="w-[300] h-[60] bg-gray-200 p-2">
                <TextInput className="text-2xl"
                value={email}
                onChangeText={(email) => {
                    setEmail(email)
                }}
                />

            </View>
            </View>
            <View className="flex-1 items-left ml-10 justify-center p-2">
            <Text className=" text-base text-2xl text-black font-bold">Password
           </Text></View>
           <View className="flex-1 items-center justify-center p-2">
            <View className="w-[300] h-[60] bg-gray-200 p-2">
                <TextInput className="text-2xl"
                
                onChangeText={(password) => {
                    setPassword(password)
                }}
                />
            </View>
            </View>
            <View className="flex-1 items-center justify-center p-10">
             <TouchableOpacity
         onPress={() => router.push("../../(tabs)/home")}>
            <View className="w-[250] h-[70] bg-green-200 items-center justify-center">
                <Text className="font-bold text-xl">Continue to Home</Text>
            </View>
  </TouchableOpacity>
  
  
            </View>
        </ScrollView>
        <StatusBar style="auto" />
    </SafeAreaView>
  )
}
export default SignIn
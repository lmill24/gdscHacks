import { StatusBar } from 'expo-status-bar';
import {Button, Image,Text, View, Pressable, TouchableOpacity } from 'react-native';
import {router} from 'expo-router';

const Welcome = () => {
    return (
        <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-red-500 font-bold">Scrapbook</Text>
      <Image 
        source= {require('../assets/movieStrip.png')}
        className="w-[600px] h-[300px]"
        resizeMode="contain"
      />
      
    <TouchableOpacity backgroundColor="#ff471a"
         className="px-7 py-3 rounded-2xl bg-red-500"
         onPress={() => router.push("/sign-in")}>
    <Text className="text-white text-2xl font-bold"> Continue with Gmail </Text>
  </TouchableOpacity>

<StatusBar style="auto" />
    </View>
    )
    
      
    
};

export default Welcome;
// web  92424552679-8d45p9p2gu3vbr331gsfcf4meopcfgk4.apps.googleusercontent.com
// ios  92424552679-b5k9nu27sl0f1q68hol51jfjri4i3bm0.apps.googleusercontent.com
import { StatusBar } from 'expo-status-bar';
import {Button, Image,Text, View, Pressable, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import {router} from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";


const Welcome = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-5xl text-green-900 font-bold">Scrapbook</Text>
      
      
      <Image 
        source= {require('../assets/movieStrip.png')}
        className="w-[600px] h-[300px]"
        resizeMode="contain"
      />
      
    <TouchableOpacity
         onPress={() => router.push("/sign-in")}>
            <View 
        className="w-[250px] h-[70px] bg-red-500 rounded-lg justify-center items-center"
        resizeMode="contain">
        <Text className="text-3xl text-white font-bold">Continue {"\n"}{"\n"}{"\n"}</Text>
      </View>
  </TouchableOpacity>
  
              
</View>
         </ScrollView>

<StatusBar style="auto" />
    
    </SafeAreaView>
    );
};
export default Welcome;


import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import {router} from 'expo-router';
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
    
    const [accessToken, setAccessToken] = React.useState(null);
const [user, setUser] = React.useState(null);
const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
        iosClientId:"899599661171-liga94hathagrt6u9keucl93si77nb56.apps.googleusercontent.com"

    }
);

React.useEffect(() => {
    if(response?.type === "success"){
         setAccessToken(response.authentication.accessToken);
        accessToken && fetchUserInfo();
    } else {
        console.log("error");
    }
}, [response, accessToken])

async function fetchUserInfo(accessToken) {
    if (!accessToken) return;
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: 'Bearer ${accessToken}' }
        
    });
    const userInfo = await response.json();
    setUser(userInfo);
}

const ShowUserInfo = () => {
    if (!user){
        return (
            <View>
            <Text className="text-2xl">
                Welcome 
            </Text>
            <Image source={{uri: user.picutre}} className="h-[100] w-[100]" />
            </View>
        )
    }
}









  return (
    <SafeAreaView className="bg-white h-full">
        <ScrollView>
            <View className="flex-1 items-center justify-center">
                {user && <ShowUserInfo />}
                {user === null && 
                <>
                <Text className="text-3xl text-red-500 font-bold">Welcome</Text>
            <TouchableOpacity
            disabled={!request}
                   onPress={() => {promptAsync();}}>
                      <View className="w-[250] h-[70] bg-green-200 items-center justify-center">
                      <Text> Wecome</Text>
                      </View>
            </TouchableOpacity>
            </>
                }
            </View>
            <View className="flex-1 items-left ml-10 justify-center">
            <Text className="text-2xl text-black font-bold">Email
            {"\n"}</Text>
            <Text className="text-2xl text-black font-bold">Password
            {"\n"}</Text></View>
            <View className="flex-1 items-center justify-center">
            <TouchableOpacity
         onPress={() => router.push("/home")}>
            <View className="w-[250] h-[70] bg-green-200 items-center justify-center">
                <Text className="font-bold text-xl">Continue to Home</Text>
            </View>
  </TouchableOpacity>
  
  
            </View>
        </ScrollView>
      
    </SafeAreaView>
  )
}
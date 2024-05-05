import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Linking, Button, Image, TouchableOpacity, TextInput, ScrollView, Dimensions, Alert } from 'react-native';
import Constants from 'expo-constants';
import {router} from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

const Home = () => {
        
        return (
            <SafeAreaView className="bg-primary h-full">
            <ScrollView
        contentContainerStyle={{
            
        }}>

<Text className="text-5xl text-green-900 font-bold text-center "> Welcome to Scrapbook {"\n"}</Text>
<View className="justify-center items-center">
<View className="bg-slate-300 h-[100] w-[300] border-slate-400 border-4 rounded-xl shadow-black shadow-xl justify-center items-center mt-3">
        <TouchableOpacity 
                    onPress={() => router.push("/add")}>
            <Image 
                source= {require('../../assets/plus.png')}
                className="w-[200px] h-[100px]"
                resizeMode="contain" />  

        </TouchableOpacity>
        
                </View>
                </View>
                <Text>{"\n"}{"\n"}</Text>
                
                
            <View className="justify-center items-center">
            <View className="h-[450] w-[300] bg-black items-center pt-6">
                 <Image
                        source={require('../../assets/friends1.jpg')}
                      className=" h-[300] w-[250] border-gray-200 border-2"
                      
                      />
                      <View className="h-[80] w-[250] bg-white mt-5">
                      <Text className="text-black font-bold text-center italic text-sm m-5"> Drive Date with my soulmate! {"\n"} 15/05/2018 </Text>
                      </View>
                        </View>
                </View>

                <Text>{"\n"}</Text>

                <View className="justify-center items-center">
            <View className="h-[450] w-[300] bg-black items-center pt-6">
                 <Image
                        source={require('../../assets/friends2.jpg')}
                      className=" h-[300] w-[250] border-gray-200 border-2"
                      
                      />
                      <View className="h-[80] w-[250] bg-white mt-5">
                      <Text className="text-black font-bold text-center italic text-sm m-5"> 
                      Our First PARTY!! (Kyle was so drunk LOL) 19/06/2017 </Text>
                      </View>
                        </View>
                </View>

  
               
                
                </ScrollView>

<StatusBar style="auto" />
    
    </SafeAreaView>
    );
};

export default Home;

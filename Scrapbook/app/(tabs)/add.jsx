import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native'
import React, {useState} from 'react'
import Constants from 'expo-constants';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

const Add = () => {
    state = {
        date: 'YYYY/DD/MM',
        welcomeDisplay: 'block',
        firstDisplay: 'none',
        addDisplay: 'none',
        feedDisplay: 'none',
        
    };

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(null);


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
      
  return (
    
<SafeAreaView className="bg-primary h-full">
            <ScrollView
        contentContainerStyle={{
          
        }}
      >
        <View className="flex-1 justify-center items-center justify-items-center">
                 
      {/*creates a page that allows the user to add their scrapbook info*/}
      <Text className="text-5xl text-red-700 font-bold text-center">Scrapbook</Text>
                    
                       <View className="bg-slate-400 h-[50] w-[200] px-3 py-2 m-2">
                        
                            <TextInput className="font-bold text-white text-xl"
                            placeholder="Add a unique title"
                            onChangeText={(title) => {
                            setTitle(title)
          
        }}
                            />
                        </View>
                        
                        <View className="bg-slate-400 h-[50] w-[200] px-3 py-2 m-2">
                        
                            <TextInput className="font-bold text-white text-xl"
                             placeholder="DD/MM/YYYY"
                             onChangeText={(date) => {
                             setDate(date)
                             }}
                            />
                        </View>
                        <View className="bg-slate-400 h-[250] w-[250] px-3 py-2 m-2  items-center">
                        
                            <TouchableOpacity onPress={pickImage} >
                            <Text className="font-bold text-gray-500 text-lg"> Add a picture </Text>
                            </TouchableOpacity>
                            {image && <Image source={{ uri: image }} className="h-[200] w-[200]" />}
                        </View>
                        {/*change to touchableopacity*/}
                        <TouchableOpacity style = {styles.submitButton}
                            onPress={this.submitPress}
                        >
                            <Text className="font-bold text-white">
                                Post
                            </Text>
                        
                        </TouchableOpacity>

                        
                        <View className="justify-center items-center">
            <View className="h-[450] w-[300] bg-black items-center pt-6">
                 <Image
                        source={{ uri: image }}
                        initialSource={require("../../assets/icon.png")}
                      className=" h-[300] w-[250] border-gray-200 border-2"
                      
                      />
                      <View className="h-[80] w-[250] bg-white mt-5">
                      <Text className="text-black font-bold text-center italic text-sm m-5"> {title}{"\n"} {date} </Text>
                      </View>
                        </View>
                </View>
</View>
                      
                    
                    
                    </ScrollView>
                
                
                    <StatusBar style="auto" />
    
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    barArea: {
        height: 40,
        width: 300,
        borderRadius: 10,
        margin: 10,
     },
     
     container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         paddingTop: Constants.statusBarHeight,
         backgroundColor: '#ecf0f1',
     },
     
     infoButton: {
         width: 200,
         height: 50,
         backgroundColor: '#73A9AD',
         alignItems: 'center',
         justifyContent: 'center',
         margin: 10
     },
     
     infoText: {
         margin: 24,
         fontSize: 18,
         fontWeight: 'bold',
         textAlign: 'center',
         color: '#FFFFFF',
     },
     

    topContainer: {
        
        alignItems: 'center',
        justifyContent: 'center',
        width: 500,
        height: '100%',
        backgroundColor: '#F5F0BB',
    },
    picContainer: {
        
        alignItems: 'center',
        justifyContent: 'top',
        paddingTop: 20,
        width: 300,
        height: 450,
        backgroundColor: '#FFFFFF',
    },
    
    navbarButton: {
        width: 100,
        height: 100,
        backgroundColor: '#DBDFAA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navbarContainer: {
        flexDirection: 'row',
        height: 150,
        width: 400,
        backgroundColor: '#DBDFAA',
        borderColor: '#B3C890',
        borderTopWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    submitButton: {
        width: 200,
        height: 50,
        backgroundColor: 'firebrick',
        borderWidth: 2,
        borderColor: 'lightcoral',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
    },
    welcomeText: {
        margin: 24,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#73A9AD',
    },

});
export default Add
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Linking, Button, Image, TouchableOpacity, TextInput, ScrollView, Dimensions, Alert } from 'react-native';
import Constants from 'expo-constants';
import {router} from 'expo-router';



export default class App extends Component {
    state = {
        date: 'YYYY/DD/MM',
        welcomeDisplay: 'block',
        firstDisplay: 'none',
        addDisplay: 'none',
        feedDisplay: 'none',
        
    };
    
    
    submitPress = () => (
        this.setState({
            welcomeDisplay: 'none',
            firstDisplay: 'none',
            addDisplay: 'none',
            feedDisplay: 'block',
        })
    );
        
    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };
    render() {
        
        return (
            <View style={styles.container}>
                
                {/*creates a page that allows the user to view their past scrapbook information*/}
                <View style={{display: this.state.feedDisplay}}>
                    <View style={styles.topContainer}>
                        <View style={styles.picContainer}>
                            <Image
                                source={{uri: 'https://pyxis.nymag.com/v1/imgs/986/0a9/fb8617a064d7dee0e01b7335d9769a49ac-23-friends-cover-story-lede-mobile.rvertical.w570.jpg'}}
                                style={{ height: 320, width: 250}}
                            ></Image>
                            
                        
                        </View>
                    
                    
                    </View>
                </View>

                
    
                
  {/*is for the navbar which always shows*/}
  <View className="bottom-0">
    <Text>
    {"\n"}{"\n"}{"\n"}
    </Text>
  <View className="bg-zinc-200 h-[100] w-[500] py-5">
        <TouchableOpacity 
                    className="justify-center items-center"
                    onPress={() => router.push("/add")}>
            <Image 
                source= {require('../../assets/plus.png')}
                className="w-[70px] h-[70px]"
                resizeMode="contain" />  

        </TouchableOpacity>
                </View>
         </View>
                
            </View>
        );
    }
}

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
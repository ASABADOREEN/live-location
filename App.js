import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location";
export default function App() {
  
async function GetLocation(){
  let { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service",
        [{text: "OK"}],
        {cancelable: false}
      );
    }
  let coords = await Location.getCurrentPositionAsync({});

  alert(JSON.stringify(coords))
    }
  
  
  
  return (
    <View style={styles.container}>
     <Button title = "Show My Location" onPress={GetLocation}/>
      <StatusBar style="auto" />
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

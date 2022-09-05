import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Main} from "./src/Main";
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux";
import {store} from "./src/store/store";


export default function App() {
  return (

          <View style={styles.container}>
              <Provider store={store}>
                  <NavigationContainer>
                      <Main/>
                      <StatusBar style="auto" />
                  </NavigationContainer>
              </Provider>
          </View>


  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
  },
});

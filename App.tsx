import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Main} from "./src/Main";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
      <NavigationContainer>
          <View style={styles.container}>
              <Main/>

              <TouchableOpacity>
                  <Text>Press Here</Text>
              </TouchableOpacity>
              <StatusBar style="auto" />
          </View>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf4fd',
  },
});

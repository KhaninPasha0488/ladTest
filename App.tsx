import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, Button, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App</Text>
      <ActivityIndicator size="large" />
      <Button
          onPress={()=>{}}
          title="Вход"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
      <Pressable onPress={()=>{}}>
        <Text>I'm pressable!</Text>
      </Pressable>

      <TouchableOpacity>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeb4d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 justify-center items-center'>
     <TouchableOpacity>
<Text className='text-2xl bg-red-600 p-2  rounded-2xl'>
  Hello Man
</Text>
</TouchableOpacity>


    </View>
  );
}


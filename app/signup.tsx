import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import styles from '@/constants/styles';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/signup.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

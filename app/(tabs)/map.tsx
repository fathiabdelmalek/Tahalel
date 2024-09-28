import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import styles from '@/constants/styles';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map Tab</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/map.tsx" />
    </View>
  );
}

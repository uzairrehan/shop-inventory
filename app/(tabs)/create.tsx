import { StyleSheet, Image, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (    <View style={styles.titleContainer}>
        <View>
          <ThemedText type="title">Dashboard</ThemedText>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: "4%",
    flexDirection: "row",
    gap: 8,
    flex:1,
    backgroundColor:"#fff"
  },
});

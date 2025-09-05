import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../theme/theme';

export default function ClosetScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Closet Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    fontFamily: fonts.regular,
    color: colors.text,
  },
});

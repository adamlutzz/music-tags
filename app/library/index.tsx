import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LibraryIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose what to view:</Text>
      <Link href="/library/songs" asChild>
        <Pressable style={styles.button}><Text>Songs</Text></Pressable>
      </Link>
      <Link href="/library/albums" asChild>
        <Pressable style={styles.button}><Text>Albums</Text></Pressable>
      </Link>
      <Link href="/library/artists" asChild>
        <Pressable style={styles.button}><Text>Artists</Text></Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  button: { marginVertical: 10, padding: 10, backgroundColor: '#eee', borderRadius: 8 },
});
// app/(tabs)/library.tsx

import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function Library() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Songs" onPress={() => router.push('/library/songs')} />
      <Button title="Albums" onPress={() => router.push('/library/albums')} />
      <Button title="Artists" onPress={() => router.push('/library/artists')} />
    </View>
  );
}

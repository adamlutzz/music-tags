import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function ItemPage() {
  const { itemType } = useLocalSearchParams();
  const [tag, setTag] = useState('');

  const handleTag = () => {
    console.log(`Tagged ${itemType} with:`, tag);
    setTag('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>{itemType} Page</Text>
      <TextInput
        placeholder="Add a tag..."
        value={tag}
        onChangeText={setTag}
        style={{
          marginTop: 20,
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
        }}
      />
      <Button title="Tag it" onPress={handleTag} />
    </View>
  );
}
import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { mockSongs } from '../data/mockSongs';

export default function TaggingScreen() {
  const [songs, setSongs] = useState(mockSongs);
  const [newTag, setNewTag] = useState('');
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);

  const handleAddTag = () => {
    if (!selectedSongId || newTag.trim() === '') return;

    setSongs(prevSongs =>
      prevSongs.map(song =>
        song.id === selectedSongId
          ? { ...song, tags: [...song.tags, newTag.trim()] }
          : song
      )
    );
    setNewTag('');
  };

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={songs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18 }}>{item.title} – {item.artist}</Text>
            <Text>Tags: {item.tags.join(', ')}</Text>
            <Button title="Tag this song" onPress={() => setSelectedSongId(item.id)} />
          </View>
        )}
      />

      {selectedSongId && (
        <View>
          <TextInput
            placeholder="Enter new tag"
            value={newTag}
            onChangeText={setNewTag}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <Button title="Add Tag" onPress={handleAddTag} />
        </View>
      )}
    </View>
  );
}
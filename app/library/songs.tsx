// app/library/songs.tsx
import { mockSongs } from '@/app/data/mockSongs';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SongsScreen() {
  const [tagsById, setTagsById] = useState<Record<string, string>>({});

  const handleTagChange = (songId: string, newTag: string) => {
    setTagsById(prev => ({
      ...prev,
      [songId]: newTag,
    }));
  };

  const renderItem = ({ item }: { item: (typeof mockSongs)[0] }) => {
    return (
      <View style={styles.songItem}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist}</Text>

        <TextInput
          style={styles.input}
          placeholder="Add tag"
          value={tagsById[item.id] || ''}
          onChangeText={(text) => handleTagChange(item.id, text)}
        />
        <Text style={styles.currentTag}>
          Current tag: {tagsById[item.id] ? tagsById[item.id] : 'None'}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={mockSongs}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  songItem: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  artist: {
    color: '#555',
    marginBottom: 8,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  currentTag: {
    fontSize: 12,
    color: '#777',
  },
});
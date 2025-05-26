import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [song, setSong] = useState("");
  const [tag, setTag] = useState("");
  const [taggedSongs, setTaggedSongs] = useState<{ song: string; tag: string }[]>([]);

  const handleAddTag = () => {
    if (song && tag) {
      setTaggedSongs([...taggedSongs, { song, tag }]);
      setSong("");
      setTag("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎵 Music Tagger</Text>

      <TextInput
        placeholder="Song name"
        value={song}
        onChangeText={setSong}
        style={styles.input}
      />

      <TextInput
        placeholder="Tag"
        value={tag}
        onChangeText={setTag}
        style={styles.input}
      />

      <Button title="Add Tag" onPress={handleAddTag} />

      <FlatList
        data={taggedSongs}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            🎧 {item.song} — #{item.tag}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  item: {
    paddingVertical: 8,
    fontSize: 16,
  },
});
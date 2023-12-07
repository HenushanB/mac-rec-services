import { SearchBar } from 'react-native-elements';
import { StyleSheet, View} from 'react-native';
import react, { useState } from 'react';

export default function Search() {
    const [search, setSearch] = useState(" ");

    return (
        <View style ={styles.search}>
            <SearchBar
            placeholder="Type Here..."
            onChangeText={newText => setSearch(newText)}
            value={search}
            lightTheme={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        marginVertical: 10,
        color: '#ECE6F0',
        borderRadius: 15,
        marginHorizontal: 10
    }
  });
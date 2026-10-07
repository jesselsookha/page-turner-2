import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../constants/theme';

interface GenreStat {
  genre: string;
  count: number;
  percentage: number;
}

// Hardcoded aggregated mock stats
const MOCK_GENRE_STATS: GenreStat[] = [
  { genre: 'Science fiction', count: 2, percentage: 50 },
  { genre: 'Self help', count: 1, percentage: 25 },
  { genre: 'Textbook', count: 1, percentage: 25 },
];

export default function GenreScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Genre Analytics</Text>
        <Text style={styles.subtitle}>Distribution across logged books</Text>

        <FlatList
          data={MOCK_GENRE_STATS}
          keyExtractor={(item) => item.genre}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.genreName}>{item.genre}</Text>
                <Text style={styles.genreCount}>{item.count} {item.count === 1 ? 'Book' : 'Books'}</Text>
              </View>

              <View style={styles.progressBackground}>
                <View style={[styles.progressFill, { width: `${item.percentage}%` }]} />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: '800', color: COLORS.textMain },
  subtitle: { fontSize: 14, color: COLORS.textMuted, marginTop: 4, marginBottom: 20 },
  card: { backgroundColor: COLORS.card, borderRadius: 12, padding: 16, marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  genreName: { fontSize: 15, fontWeight: '700', color: COLORS.textMain },
  genreCount: { fontSize: 13, color: COLORS.accent, fontWeight: '600' },
  progressBackground: { height: 8, backgroundColor: '#334155', borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: COLORS.accent, borderRadius: 4 },
});

import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { MOCK_BOOKS } from '../constants/mockData';
import { Book } from '../types/book';

export default function HistoryScreen(): React.JSX.Element {
  const renderBookItem = ({ item }: { item: Book }) => (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={styles.titleContainer}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookMeta}>{item.author} • {item.genre}</Text>
        </View>
        <Ionicons
          name={item.isFavorite ? 'heart' : 'heart-outline'}
          size={22}
          color={item.isFavorite ? '#EF4444' : COLORS.textMuted}
        />
      </View>

      <View style={styles.cardBottom}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.status}</Text>
        </View>
        <Text style={styles.pageCount}>{item.pages} pages</Text>
        <View style={styles.ratingRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
              key={star}
              name={star <= item.rating ? 'star' : 'star-outline'}
              size={14}
              color="#FBBF24"
            />
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Reading History</Text>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={COLORS.textMuted} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search title or author..."
            placeholderTextColor={COLORS.textMuted}
          />
        </View>

        {/* Filter Pills */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={[styles.filterChip, styles.filterActive]}>
            <Text style={styles.filterTextActive}>All Books ({MOCK_BOOKS.length})</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>Favorites</Text>
          </TouchableOpacity>
        </View>

        {/* FlatList rendering Mock Data */}
        <FlatList
          data={MOCK_BOOKS}
          keyExtractor={(item) => item.id}
          renderItem={renderBookItem}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: '800', color: COLORS.textMain, marginBottom: 16 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  searchInput: { flex: 1, marginLeft: 8, color: COLORS.textMain, fontSize: 14 },
  filterRow: { flexDirection: 'row', marginBottom: 16 },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    marginRight: 8,
  },
  filterActive: { backgroundColor: COLORS.accent },
  filterText: { fontSize: 12, color: COLORS.textMuted },
  filterTextActive: { fontSize: 12, color: '#FFFFFF', fontWeight: '700' },
  listContent: { paddingBottom: 20 },
  card: { backgroundColor: COLORS.card, borderRadius: 14, padding: 14, marginBottom: 12 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  titleContainer: { flex: 1, marginRight: 8 },
  bookTitle: { fontSize: 16, fontWeight: '700', color: COLORS.textMain },
  bookMeta: { fontSize: 13, color: COLORS.textMuted, marginTop: 4 },
  cardBottom: { flexDirection: 'row', alignItems: 'center', marginTop: 12, justifyContent: 'space-between' },
  badge: { backgroundColor: '#334155', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  badgeText: { fontSize: 11, color: COLORS.textMain, fontWeight: '600' },
  pageCount: { fontSize: 12, color: COLORS.accent, fontWeight: '600' },
  ratingRow: { flexDirection: 'row' },
});

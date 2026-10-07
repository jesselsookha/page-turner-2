import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { MOCK_BOOKS } from '../constants/mockData';

export default function HomeScreen(): React.JSX.Element {
  // Hardcoded statistics calculated from mock data
  const lastBook = MOCK_BOOKS[MOCK_BOOKS.length - 2]; // Last completed book
  const totalPages = 1072; // 320 + 496 + 256
  const avgPages = Math.round(totalPages / 3); // ~357
  const goalPages = 2000;
  const progressPercent = Math.min(Math.round((totalPages / goalPages) * 100), 100);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>PAGE TURNER</Text>
          <Text style={styles.subGreeting}>Welcome back! Keep turnin' those pages 📚</Text>
        </View>

        {/* Goal Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="flag" size={18} color={COLORS.accent} />
            <Text style={styles.cardTitle}>Annual Page Goal</Text>
            <Text style={styles.goalPercent}>{progressPercent}%</Text>
          </View>
          
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
          </View>
          
          <Text style={styles.goalText}>
            {totalPages.toLocaleString()} / {goalPages.toLocaleString()} pages read
          </Text>
        </View>

        {/* Statistics Grid */}
        <View style={styles.statsRow}>
          <View style={[styles.card, styles.statCard]}>
            <Ionicons name="book-outline" size={22} color={COLORS.accent} />
            <Text style={styles.statNumber}>{totalPages.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Total Pages Read</Text>
          </View>

          <View style={[styles.card, styles.statCard]}>
            <Ionicons name="calculator-outline" size={22} color={COLORS.accent} />
            <Text style={styles.statNumber}>{avgPages}</Text>
            <Text style={styles.statLabel}>Avg Pages / Book</Text>
          </View>
        </View>

        {/* Last Read Book */}
        <Text style={styles.sectionTitle}>Last Book Read</Text>
        <View style={styles.card}>
          <Text style={styles.bookTitle}>{lastBook.title}</Text>
          <Text style={styles.bookMeta}>{lastBook.author} • {lastBook.genre}</Text>
          
          <View style={styles.bookFooter}>
            <Text style={styles.pageCount}>{lastBook.pages} pages</Text>
            <View style={styles.ratingRow}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name={star <= lastBook.rating ? 'star' : 'star-outline'}
                  size={16}
                  color="#FBBF24"
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 20 },
  header: { marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: '800', color: COLORS.textMain, letterSpacing: 1 },
  subGreeting: { fontSize: 14, color: COLORS.textMuted, marginTop: 4 },
  card: { backgroundColor: COLORS.card, borderRadius: 16, padding: 16, marginBottom: 16 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: COLORS.textMain, marginLeft: 8, flex: 1 },
  goalPercent: { fontSize: 16, fontWeight: '700', color: COLORS.accent },
  progressBarBackground: { height: 10, backgroundColor: '#334155', borderRadius: 5, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: COLORS.accent, borderRadius: 5 },
  goalText: { fontSize: 13, color: COLORS.textMuted, marginTop: 10 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statCard: { width: '48%', alignItems: 'flex-start' },
  statNumber: { fontSize: 22, fontWeight: '800', color: COLORS.textMain, marginVertical: 6 },
  statLabel: { fontSize: 12, color: COLORS.textMuted },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: COLORS.textMain, marginBottom: 12, marginTop: 8 },
  bookTitle: { fontSize: 18, fontWeight: '700', color: COLORS.textMain },
  bookMeta: { fontSize: 14, color: COLORS.textMuted, marginVertical: 6 },
  bookFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  pageCount: { fontSize: 13, color: COLORS.accent, fontWeight: '600' },
  ratingRow: { flexDirection: 'row' },
});

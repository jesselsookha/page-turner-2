import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { GENRES } from '../constants/genres';

export default function AddBookScreen(): React.JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState<string>('Self help');
  const [rating, setRating] = useState<number>(4);
  const [isCompleted, setIsCompleted] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Log a New Book</Text>
        <Text style={styles.subtitle}>Keep your personal reading journal updated</Text>

        {/* Title Input */}
        <Text style={styles.label}>Title *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Atomic Habits"
          placeholderTextColor={COLORS.textMuted}
          value="Atomic Habits"
        />

        {/* Author Input */}
        <Text style={styles.label}>Author *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. James Clear"
          placeholderTextColor={COLORS.textMuted}
          value="James Clear"
        />

        {/* Page Count */}
        <Text style={styles.label}>Number of Pages *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 320"
          placeholderTextColor={COLORS.textMuted}
          keyboardType="numeric"
          value="320"
        />

        {/* Genre Selector Chips */}
        <Text style={styles.label}>Select Genre *</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
          {GENRES.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.chip, selectedGenre === item.name && styles.chipActive]}
              onPress={() => setSelectedGenre(item.name)}
            >
              <Text style={[styles.chipText, selectedGenre === item.name && styles.chipTextActive]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Reading Status Switch */}
        <View style={styles.switchRow}>
          <View>
            <Text style={styles.labelNoMargin}>Finished Reading?</Text>
            <Text style={styles.subText}>{isCompleted ? 'Status: Completed' : 'Status: Currently Reading'}</Text>
          </View>
          <Switch
            value={isCompleted}
            onValueChange={setIsCompleted}
            trackColor={{ false: '#334155', true: COLORS.accent }}
            thumbColor="#F8FAFC"
          />
        </View>

        {/* Star Rating Picker */}
        <Text style={styles.label}>Rating</Text>
        <View style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Ionicons
                name={star <= rating ? 'star' : 'star-outline'}
                size={32}
                color="#FBBF24"
                style={styles.starIcon}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Save to Journal</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 20 },
  title: { fontSize: 24, fontWeight: '800', color: COLORS.textMain },
  subtitle: { fontSize: 14, color: COLORS.textMuted, marginTop: 4, marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: COLORS.textMain, marginTop: 12, marginBottom: 6 },
  labelNoMargin: { fontSize: 14, fontWeight: '600', color: COLORS.textMain },
  subText: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  input: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 14,
    color: COLORS.textMain,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#334155',
  },
  chipContainer: { flexDirection: 'row', marginVertical: 6 },
  chip: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  chipActive: { backgroundColor: COLORS.accent, borderColor: COLORS.accent },
  chipText: { color: COLORS.textMuted, fontSize: 13, fontWeight: '500' },
  chipTextActive: { color: '#FFFFFF', fontWeight: '700' },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: 14,
    borderRadius: 12,
    marginVertical: 16,
  },
  starRow: { flexDirection: 'row', marginTop: 6, marginBottom: 20 },
  starIcon: { marginRight: 8 },
  submitButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});

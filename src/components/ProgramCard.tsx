import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Program } from "../data/programs";

interface Props {
  item: Program;
  onPress: () => void;
}

const ProgramCard: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.leftBar} />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.flag}>{item.flag}</Text>
          <Text style={styles.country}>{item.country}</Text>
        </View>
        <Text style={styles.university}>{item.university}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.duration}>⏳ {item.duration}</Text>
          <Text style={styles.viewMore}>View Details →</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 3,
    overflow: "hidden",
  },
  leftBar: {
    width: 4,
    backgroundColor: "#4F6EF7",
  },
  content: {
    flex: 1,
    padding: 14,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 6,
  },
  flag: {
    fontSize: 18,
  },
  country: {
    fontSize: 12,
    color: "#888",
    fontWeight: "500",
  },
  university: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    color: "#666",
    lineHeight: 19,
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  duration: {
    fontSize: 12,
    color: "#888",
  },
  viewMore: {
    fontSize: 12,
    color: "#4F6EF7",
    fontWeight: "600",
  },
});

export default ProgramCard;
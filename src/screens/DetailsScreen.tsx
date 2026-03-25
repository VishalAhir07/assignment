import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./HomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { program } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.flag}>{program.flag}</Text>
          <Text style={styles.university}>{program.university}</Text>
          <Text style={styles.country}>{program.country}</Text>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <InfoRow label="💰 Tuition" value={program.tuitionRange} />
          <View style={styles.divider} />
          <InfoRow label="⏳ Duration" value={program.duration} />
          <View style={styles.divider} />
          <InfoRow label="🗣 Language" value={program.language} />
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About the Program</Text>
          <Text style={styles.sectionText}>{program.fullDetails}</Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back to Programs</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7ff",
  },
  hero: {
    backgroundColor: "#4F6EF7",
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 20,
  },
  flag: {
    fontSize: 48,
    marginBottom: 10,
  },
  university: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
  },
  country: {
    fontSize: 15,
    color: "#c5d0ff",
    marginTop: 6,
    fontWeight: "500",
  },
  infoCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: -20,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a2e",
    maxWidth: "55%",
    textAlign: "right",
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
  },
  section: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
  },
  backButton: {
    marginHorizontal: 16,
    marginBottom: 32,
    marginTop: 4,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e4ff",
  },
  backButtonText: {
    color: "#4F6EF7",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default DetailsScreen;
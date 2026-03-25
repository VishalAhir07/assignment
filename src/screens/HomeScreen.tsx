import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ProgramCard from "../components/ProgramCard";
import programs, { Program } from "../data/programs";

export type RootStackParamList = {
  Home: undefined;
  Details: { program: Program };
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }: { item: Program }) => (
    <ProgramCard
      item={item}
      onPress={() => navigation.navigate("Details", { program: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f7ff" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Study Abroad 🌍</Text>
        <Text style={styles.headerSubtitle}>Explore universities worldwide</Text>
      </View>
      <FlatList
        data={programs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7ff",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e8e8e8",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a2e",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#888",
    marginTop: 3,
  },
  list: {
    paddingTop: 8,
    paddingBottom: 24,
  },
});

export default HomeScreen;
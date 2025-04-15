import { Image, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{ height: 130 }} />
      <Image
        source={require('@/assets/images/hero.jpg')}
        style={styles.heroImage}
        resizeMode="cover"
      />

      <ThemedView style={styles.titleBlock}>
        <ThemedText type="title">Welcome to Litchfield!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.infoCard}>
        <ThemedView style={styles.infoLeft}>
          <ThemedText style={styles.infoIcon}>ℹ️</ThemedText>
          <ThemedText>Quick Information</ThemedText>
        </ThemedView>
        <ThemedText style={styles.infoArrow}>❯</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  heroImage: {
    width: '90%',
    height: 180,
    borderRadius: 16,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titleBlock: {
    alignItems: 'center',
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    gap: 8,
  },
  infoIcon: {
    fontSize: 20,
  },
  infoArrow: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto',
    paddingVertical: 20,
    alignItems: 'center',
  },
});

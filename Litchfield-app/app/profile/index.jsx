import { View, Pressable } from 'react-native';
import { useGlobalStyles } from '@/constants/globalStyles';
import { useThemeContext } from '@/context/ThemeProvider';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
    const { theme: colorScheme } = useThemeContext();
    const globalStyles = useGlobalStyles();
    const router = useRouter();

    const sections = [
        { label: 'Profile Info', icon: 'person.crop.circle', path: '/profile/profile_detail' },
        { label: 'Theme', icon: 'paintpalette', path: '/profile/theme' },
        { label: 'Points', icon: 'star', path: '/profile/points' },
        { label: 'Wishlist', icon: 'heart', path: '/profile/wishlist' },
        { label: 'Payment', icon: 'creditcard', path: '/profile/payment' },
        { label: 'Help', icon: 'questionmark.circle', path: '/profile/help' },
        { label: 'Support', icon: 'bubble.left.and.bubble.right', path: '/profile/support' },
    ];

    return (
        <ThemedView style={globalStyles.subPageContainer}>
            {sections.map(({ label, icon, path }) => (
                <Pressable key={path} onPress={() => router.push({ pathname: path, params: { title: label } })}>
                    <ThemedView style={globalStyles.buttonCard}>
                        <ThemedView style={globalStyles.buttonLeft}>
                            <IconSymbol name={icon} color={Colors[colorScheme].text} />
                            <ThemedText type="subtitle">{label}</ThemedText>
                        </ThemedView>
                        <IconSymbol name="chevron.right" size={28} color={Colors[colorScheme].text} />
                    </ThemedView>
                </Pressable>
            ))}
        </ThemedView>
    );
}
import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

const createGlobalStyles = (colorScheme) =>
    StyleSheet.create({
        container: {
            paddingTop: 130,
            flex: 1,
            backgroundColor: Colors[colorScheme].background,
            justifyContent: 'flex-start',
        },
        inputTextBox: {
            paddingVertical: 25,
            paddingHorizontal: 30,
            borderRadius: 16,
            borderWidth: 2,
            borderColor: Colors[colorScheme].border,
            backgroundColor: Colors[colorScheme].background,
            fontSize: 18,
            color: Colors[colorScheme].text,
        },
        heroImage: {
            height: 250,
            width: '90%',
            borderRadius: 16,
            marginBottom: 20,
            alignSelf: 'center',
            overflow: 'hidden',
        },
        titleBlock: {
            alignItems: 'center',
            marginBottom: 16,
            gap: 4,
        },
        buttonCard: {
            backgroundColor: '#f1f1f1',
            borderRadius: 12,
            padding: 16,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        buttonLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f1f1f1',
            gap: 8,
        },
        overlay: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        overlayContent: {
            width: '80%',
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 12,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 10,
        },
        footer: {
            marginTop: 'auto',
            paddingVertical: 20,
            alignItems: 'center',
        },
    });

export const useGlobalStyles = () => {
    const scheme = useColorScheme() ?? 'light';
    return createGlobalStyles(scheme);
};
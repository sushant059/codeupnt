import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        paddingTop: 130,
        flexGrow: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
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

export { globalStyles };
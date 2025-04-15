import { Tabs, useRouter, usePathname } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const currentScreen = pathname.split('/').pop();
  const titleMap = {
    index: 'Litchfield Explorer',
    explore: 'Explore',
    shop: 'Shop',
  };
  const pageTitle = titleMap[currentScreen] || 'Litchfield Explorer';

  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('@/assets/fonts/Lobster-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: 'black' }} />;
  }

  return (
    <>
      <View style={{ position: 'absolute', top: 70, left: 30, right: 30, flexDirection: 'row', alignItems: 'center', zIndex: 100 }}>
        <Text style={{
          fontSize: 34,
          fontFamily: 'Lobster-Regular',
          color: Colors[colorScheme ?? 'light'].text,
        }}>{pageTitle}</Text>
        <View style={{ flexDirection: 'row', marginLeft: 'auto', gap: 10 }}>
          <IconSymbol name="magnifyingglass" size={28} color={Colors[colorScheme ?? 'light'].icon} />
          <IconSymbol name="cart" size={28} color={Colors[colorScheme ?? 'light'].icon} />
          <IconSymbol name="person.circle" size={28} color={Colors[colorScheme ?? 'light'].icon} />
        </View>
      </View>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 30,
            backgroundColor: 'black',
            borderRadius: 40,
            height: 60,
            paddingHorizontal: 30,
            marginHorizontal: 30,
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          },
        }}>
        <Tabs.Screen
          name="explore"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <IconSymbol size={40} name={focused ? 'safari.fill' : 'safari'} color={color} style={{ marginTop: 20 }} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <IconSymbol size={40} name={focused ? 'house.fill' : 'house'} color={color} style={{ marginTop: 20 }} />
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <IconSymbol size={40} name={focused ? 'bag.fill' : 'bag'} color={color} style={{ marginTop: 20 }} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

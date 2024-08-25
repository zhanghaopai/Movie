import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <View>
            <SafeAreaView  className="flex-1">
                <StatusBar></StatusBar>
                <Text className="text-blue-400">HomeScreen</Text>
            </SafeAreaView>
        </View>
    );
}
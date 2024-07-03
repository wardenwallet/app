import { Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Not Found",
        }}
      />
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-bold">404</Text>
      </View>
    </>
  );
}

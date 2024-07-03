import * as React from "react";
import { Alert, View } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";

import * as LocalAuthentication from "expo-local-authentication";

export default function Screen() {
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const handleBiometricAuth = async () => {
    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Login with Biometrics",
        disableDeviceFallback: true,
        cancelLabel: "Cancel",
      });
      if (biometricAuth.success) {
        Alert.alert("Success", "You are in!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex-1 flex-col items-center max-h-fit">
      <View className="flex-1 flex justify-end px-6 bg-secondary/30 w-full">
        <Text className="text-4xl font-light">
          Secure Self-Custody Wallet Solution
        </Text>
      </View>
      <View className="flex-1 justify-end p-6 pb-12 bg-secondary/30 w-full">
        <Button className="mb-4" size="lg" onPress={handleBiometricAuth}>
          <Text>Create New Wallet</Text>
        </Button>
        <Button variant="outline" size="lg" className="bg-secondary/30">
          <Text>Add Existing Wallet</Text>
        </Button>
      </View>
    </View>
  );
}

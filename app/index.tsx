import * as React from "react";
import { View, ImageBackground } from "react-native";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Fingerprint } from "lucide-react-native";

export default function Screen() {
  return (
    <View className="flex-1 flex-col items-center max-h-fit">
      <View className="flex-1 flex justify-end px-6 bg-secondary/30 w-full">
        <Text className="text-4xl font-light">
          Secure Self-Custody Wallet Solution
        </Text>
      </View>
      <View className="flex-1 p-6 bg-secondary/30 w-full">
        <Input
          placeholder="email@example.com"
          aria-labelledbyledBy="inputLabel"
          aria-errormessage="inputError"
          cursorColor="#ffffffCC"
          selectionColor="#ffffff4D"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          autoCapitalize="none"
          autoFocus={false}
          className="rounded-xl mb-4 bg-secondary/30"
        />
        <Button className="rounded-xl mb-4" size="lg">
          <Text>Continue</Text>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-xl bg-secondary/30 flex flex-row items-center"
        >
          <Text>Continue with Passkey</Text>
          <Fingerprint color="white" style={{ marginLeft: 8 }} size={16} />
        </Button>
      </View>
    </View>
  );
}

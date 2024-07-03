import * as React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Fingerprint } from "lucide-react-native";

export default function Screen() {
  return (
    <View className="flex-1 flex-col items-center">
      <View className="flex-1 flex justify-end px-6 bg-secondary/30 w-full">
        <Text className="text-3xl">
          Warden —{" "}
          <span className="text-primary/70">
            Secure Self-Custody Wallet Solution
          </span>
          .
        </Text>
      </View>
      <View className="flex-1 p-6 bg-secondary/30 w-full">
        <Input
          placeholder="email@example.com"
          aria-labelledbyledBy="inputLabel"
          aria-errormessage="inputError"
          className="rounded-xl mb-4 bg-secondary/30"
        />
        <Button className="rounded-xl mb-4">
          <Text>Continue</Text>
        </Button>
        <Button variant="outline" className="rounded-xl bg-secondary/30">
          <Text className="flex items-center">
            Continue with Passkey <Fingerprint className="h-4 w-4 ml-2" />
          </Text>
        </Button>
      </View>
    </View>
  );
}

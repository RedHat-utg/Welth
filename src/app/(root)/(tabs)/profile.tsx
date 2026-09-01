import { useAuth, useUser } from "@clerk/expo";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign-out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          await signOut();
          router.replace("/sign-in");
        },
      },
    ]);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text onPress={handleSignOut} className="text-brand-coral text-center">
          Log Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="relative flex-1 items-center justify-center bg-[#F4F4F4] px-8 ">
      <TouchableOpacity className="">
        <Text>start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

import { SafeAreaView, ScrollView } from "react-native";
import Search from "../components/Search";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Search />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

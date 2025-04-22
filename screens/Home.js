import { View, Text, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Home(props) {
  return (
    <View>
      <Text>Home</Text>
      <Text>Welcome to the Home Screen!</Text>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.text}>
          askl;djhf;laskjdf;lkjasdf;ljasdl;kfjasdl;kfjasdlas;ldkfj
          a;lsdkjf;laskdjfl;kajsdf;lkjasdl;fkjal;sdkjflk;sajfl;ksdjfl;akjsdf
          a;lsdkfj;laskjdfl;kasjdf;lkjasl;kdfjl;kasjdfl;kasjdflkasjdf
          as;ldkfja;sldjflkasjdf
          asdklfjas;dlkjf;alskdjf;lkajsd;lfkjaslk;djhfasdl;fjasl;dlkjf
        </Text>
      </ScrollView>
      <View style={styles.bottom}>
        <Text>Welcome to the Home Bottom!</Text>
        <View style={{ position: "absolute", top: 10, right: 10 }}>
          <FontAwesome name="cog" size={30} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 50, color: "black" },
  scrollContainer: {
    padding: 100,
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "green",
    height: 100,
    width: "100%",
  },
});
export default Home;

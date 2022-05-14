import React from "react";
import { View, ImageBackground, Linking } from "react-native";

import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  SectionImage,
  useTheme,
} from "react-native-rapi-ui";

import background from "../../assets/bg.png";
import { getAuth, signOut } from "firebase/auth";


export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          
        }}
      >
      <ImageBackground source={background} resizeMode= 'contain' style={{flex:1,justifyContent: "center"}}>
        <Section style={{margin: 35}}>          
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Bienvenidos al Home
            </Text>            
            <Button
              status='primary'
              text="Navegar a segunda ventana"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              status="primary400"
              text="Logout"
              onPress={() => {
                signOut(auth);
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "warning300" : "primary200"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
        </ImageBackground>
      </View>
    </Layout>
  );
}

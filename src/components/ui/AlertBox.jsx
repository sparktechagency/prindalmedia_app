import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button, Dialog, PanningProvider } from "react-native-ui-lib";

const AlertBox = () => {
  const [isVisible, setIsVisible] = useState();

  return (
    <View>
      <Dialog
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        panDirection={PanningProvider.Directions.DOWN}
        containerStyle={{
          width: 324,
          alignSelf: "center",
          backgroundColor: "white",
          borderRadius: 16,
          padding: 24,
        }}
      >
        <View center>
          <View
            style={{
              backgroundColor: "#F0F0F0",
              padding: 16,
              borderRadius: 50,
              marginBottom: 16,
            }}
          >
            <AntDesign name="checkcircle" size={32} color="black" />
          </View>

          <Text text60BO marginB-8>
            Successful!
          </Text>
          <Text text70 color="#6B7280" marginB-20>
            Your post was successful
          </Text>

          <Button
            label="Done"
            onPress={() => setIsVisible(false)}
            backgroundColor="black"
            labelStyle={{ color: "white", fontWeight: "bold" }}
            style={{ borderRadius: 999, paddingVertical: 12, width: "100%" }}
          />
        </View>
      </Dialog>
    </View>
  );
};

export default AlertBox;

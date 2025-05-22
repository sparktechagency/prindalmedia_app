import { AppleMaps, GoogleMaps } from "expo-maps";
import { AppleMapsMapType } from "expo-maps/build/apple/AppleMaps.types";
import { GoogleMapsMapType } from "expo-maps/build/google/GoogleMaps.types";
import { Platform, Text } from "react-native";

export default function MapView() {
  // console.log(longitude, latitude);
  // const lat = latitude ?? 37.8199;
  // const long = longitude ?? -122.4783;

  if (Platform.OS === "ios") {
    return (
      <AppleMaps.View
        style={{ flex: 1 }}
        cameraPosition={{
          coordinates: {
            latitude: 37.8199,
            longitude: -122.4783,
          },
          zoom: 12,
        }}
        annotations={annotations}
        properties={{
          isTrafficEnabled: false,
          mapType: AppleMapsMapType.STANDARD,
          selectionEnabled: true,
        }}
        // onMapClick={(e) => {
        //   // console.log("Map clicked:", e);
        // }}
        // onMarkerClick={(e) => {
        //   // console.log("Marker clicked:", e);
        // }}
        // onCameraMove={(e) => {
        //   // console.log("Camera moved:", e);
        // }}
        // onMapLoaded={() => {
        //   // console.log("Map loaded");
        // }}
      />
    );
  } else if (Platform.OS === "android") {
    return (
      <GoogleMaps.View
        style={{ flex: 1 }}
        cameraPosition={{
          coordinates: {
            latitude: 37.8199,
            longitude: -122.4783,
          },
          zoom: 12,
        }}
        markers={markers}
        properties={{
          isBuildingEnabled: true,
          isIndoorEnabled: true,
          mapType: GoogleMapsMapType.NORMAL,
          selectionEnabled: true,
          isMyLocationEnabled: false,
          isTrafficEnabled: true,
        }}
        // onMapClick={(e) => {
        //   console.log("Map clicked:", e);
        // }}
        // onMarkerClick={(e) => {
        //   console.log("Marker clicked:", e);
        // }}
        // onCameraMove={(e) => {
        //   console.log("Camera moved:", e);
        // }}
        // onMapLoaded={() => {
        //   console.log("Map loaded");
        // }}
      />
    );
  } else {
    return <Text>Maps are only available on Android and iOS</Text>;
  }
}

const markers = [
  {
    coordinates: { latitude: 49.259133, longitude: -123.10079 },
    title: "Location Name",
    snippet: "Location Description",
    draggable: true,
  },
];

const annotations = [
  {
    coordinates: { latitude: 37.8199, longitude: -122.4783 },
    title: "Location Name",
    text: "Location Description",
    textColor: "white",
    backgroundColor: "black",
  },
];

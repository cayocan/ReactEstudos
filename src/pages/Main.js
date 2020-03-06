import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { requestPermissionAsync, getCurrentPositionAsync } from "expo-location";

// import { Container } from './styles';

export default function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                });
            }
        }
        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker
                coordinate={{
                    latitude: currentRegion.latitude,
                    longitude: currentRegion.longitude
                }}
            >
                <Image
                    style={styles.avatar}
                    source={{
                        uri:
                            "data:image/jpeg;base64,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"
                    }}
                />
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: "#fff"
    }
});

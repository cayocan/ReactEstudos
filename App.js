import React, { Fragment } from "react";
import Routes from "./src/Routes";
import { StatusBar } from "react-native";

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7D40E2" />
            <Routes />
        </>
    );
}
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7159c1",
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        fontWeight: "bold",
        fontSize: 32,
        color: "#fff"
    }
});
*/

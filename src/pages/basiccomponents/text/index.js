import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextInANest = () => {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = useState("This is not a bird nest.");

    const onPressTitle = () => {
        setTitleText("Bird's Nest [Tu apertou no botão]");
    };
    return (
        <Text style={StyleSheet.baseText}>
            <Text style={StyleSheet.titleText} onPress={onPressTitle}>
                {titleText}
                {"\n"}
                {"\n"}
            </Text>
            <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});
export default TextInANest;
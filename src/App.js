import React from "react";
import { SafeAreaView, StyleSheet, Text, ScrollView, StatusBar } from "react-native"
import ViewBoxesWithColorAndText from "./pages/basiccomponents/view";
import TextInANest from './pages/basiccomponents/text';
import Appstylesheet from './pages/basiccomponents/stylesheet';
import UselessTextInputMultiline from './pages/basiccomponents/textinput';
import DisplayAnImage from './pages/basiccomponents/image';
import AppSectionList from './pages/listviews/sectionlist';
import AppFlatList from "./pages/listviews/flatlist";
import AppButton from "./pages/userinterface/button";
import AppSwitch from "./pages/userinterface/switch";

const App = () => {
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.text}>
            <ViewBoxesWithColorAndText />
             <TextInANest/>
             <Appstylesheet/>
            <UselessTextInputMultiline/> 
            <DisplayAnImage/>
             <AppFlatList/>
            <AppSectionList/>
            <AppButton/> 
           <AppSwitch/> 
            <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});


export default App;
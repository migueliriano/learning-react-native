/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput
} from 'react-native';
import TextFieldTest from "./src/components/TextFieldTest";
import ScrollViewTest from "./src/components/ScrollViewTest";
import ListViewTest from "./src/components/ListViewTest";
import FetchMovies from "./src/components/FetchMovies";

const App = () => {
  const [textValue, setTextValue] = useState( '');
  return (
      <ScrollView>
        {/*<TextFieldTest />*/}
        {/*<ScrollViewTest />*/}
        {/*<ListViewTest />*/}
        <FetchMovies />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

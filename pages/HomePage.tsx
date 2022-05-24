
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ListRow from './ListRow';

const TabOneScreen: React.FC<{}> = (props: any) => {
  return (
    <ScrollView style={styles.container}>
      <ListRow title={"Hello World"} onPress={() => {
        props.navigation.navigate('Hello World');
      }} />
      <ListRow title={"Hello World2"} onPress={() => {
        props.navigation.navigate('Hello World2');
      }} />
      <ListRow title={"Logo"} onPress={() => {
        props.navigation.navigate('Logo');
      }} />
      <ListRow title={"Hue"} onPress={() => {
        props.navigation.navigate('Hue');
      }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
});

export default TabOneScreen;


import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ListRow from './ListRow';

const TabOneScreen: React.FC<{}> = (props: any) => {
  return (
    <ScrollView style={styles.container}>
      <ListRow title={"Hello World"} onPress={() => {
        props.navigation.navigate('Hello World');
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

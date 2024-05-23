import {View, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AlertModal from './src/AlertModal';
import ReanimatedView from './src/ReanimatedView';

export default function App() {
  const [showAnimatedView, setShowAnimatedView] = useState(false);

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      {showAnimatedView && <ReanimatedView />}
      <Button
        title="animate view switch"
        onPress={() => setShowAnimatedView(!showAnimatedView)}
      />
      <Button
        title="show Modal"
        onPress={() => {
          setVisible(true);
        }}
      />
      <AlertModal
        visible={visible}
        hideModal={() => {
          setVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  block: {
    width: 100,
    height: 3,
    margin: 1,
  },
  black: {backgroundColor: 'black'},
  orange: {backgroundColor: 'orange'},
  green: {backgroundColor: 'green'},
  blue: {backgroundColor: 'blue'},
});

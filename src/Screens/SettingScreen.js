import * as React from 'react';
import { Button, View } from 'react-native';


function SettingScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        //   onPress={() => navigation.navigate('setting')}
          title="Go to notifications"
        />
      </View>
    );
  }

  export default SettingScreen
import * as React from 'react';
import { Button, View } from 'react-native';


function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        //   onPress={() => navigation.navigate('profile')}
          title="Go to notifications"
        />
      </View>
    );
  }

  export default ProfileScreen
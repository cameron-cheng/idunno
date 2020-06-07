import React from 'react';
import { Share, View, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Session Code: YZXN',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
    return (
    <View style={{ marginTop: 50 }}>
      <QRCode value="http://www.google.com"/>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

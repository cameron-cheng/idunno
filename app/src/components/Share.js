// import React from 'react';
// import { Share, View, Button, Text } from 'react-native';
// import QRCode  from 'react-native-qrcode-svg';

export default ShareExample = ({roomId, props}) => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `Session Code: ${roomId}`
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
      <Text style={{marginBottom: 30, marginLeft: 40, fontSize: 30 }}>YZXN</Text>
      <View style={{ marginLeft: 35 }}><QRCode value="http://www.google.com"/></View>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};


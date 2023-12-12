import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export const DigitalCareNavigationView = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://mercy-digital-care-navigator.web.app/' }}
        style={{}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        setSupportMultipleWindows={false}
        startInLoadingState
        originWhitelist={['*']}
      />
    </SafeAreaView>
  );
};

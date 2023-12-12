import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DigitalCareNavigationView } from 'digital-care-navigation';

export default function App() {
  const [showNavigationView, setShowNavigationView] = useState(false);
  return (
    <View style={styles.container}>
      {showNavigationView ? (
        <DigitalCareNavigationView />
      ) : (
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              setShowNavigationView(true);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Find Care Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 55,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#155b7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

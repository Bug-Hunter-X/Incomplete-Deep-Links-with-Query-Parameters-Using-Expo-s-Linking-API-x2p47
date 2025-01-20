import * as Linking from 'expo-linking';

Linking.addEventListener('url', (event) => {
  if (event.url) {
    // Process the complete URL here
    console.log('Complete URL:', event.url);
  }
});

//If getInitialUrl is needed, use it as fallback
Linking.getInitialURL().then((url) => {
  if (url) {
    console.log('Initial URL:', url);
  }
});
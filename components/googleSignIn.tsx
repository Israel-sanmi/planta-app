// import React, { useState } from 'react';
// import { View, Button, ActivityIndicator, Alert, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';
// import {firebase} from '@/services/config';

// const GoogleSignInButton = () => {
//   const [loading, setLoading] = useState(false);
//   const [authUrl, setAuthUrl] = useState('');

//   const generateAuthUrl = async () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     const auth = firebase.auth();
//     const result = await auth.signInWithPopup(provider);
//     setAuthUrl(result.credential.idToken);
//   };

//   const handleGoogleSignIn = async () => {
//     setLoading(true);
//     try {
//       await generateAuthUrl();
//       setLoading(false);
//     } catch (error:any) {
//       setLoading(false);
//       Alert.alert('Sign in error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <>
//           <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
//           {authUrl !== '' && (
//             <WebView
//               source={{ uri: authUrl }}
//               onNavigationStateChange={(event) => {
//                 if (event.url.startsWith('YOUR_REDIRECT_URI')) {
//                   // Handle the URL redirection logic here
//                 }
//               }}
//               style={styles.webview}
//             />
//           )}
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   webview: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
// });

// export default GoogleSignInButton;

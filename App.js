import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import SignUp from './SignUp';
import {firebase} from './Firebase/firebase';
const Stack = createStackNavigator();



const App=() => {
const [isSignedIn, setIsSignedIn]=useState(false);


useEffect(()=>{
 firebase.auth().onAuthStateChanged(user=>{
if(user){
  setIsSignedIn(true);
}else{
  setIsSignedIn(false);
}

 })
})
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Signup" screenOptions={{headerShown:false}}>
    <Stack.Screen name="Login" component={Login}  />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;

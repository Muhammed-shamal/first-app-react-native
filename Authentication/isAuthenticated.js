import React from 'react';
import { useAuth } from '../Context/authContext';

const PrivateRoute = ({ children, navigation }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If the user is not authenticated, navigate to the Login screen
    navigation.navigate('Login');
    return null;
  }

  // If the user is authenticated, render the children components
  return children;
};

export default PrivateRoute;

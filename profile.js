import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SectionList } from 'react-native';
import { useAuth } from './Context/authContext';

const ProfileScreen = ({ navigation }) => {
  const { isAuthenticated } = useAuth();

  const sections = [
    {
      title: 'Profile',
      data: isAuthenticated ? ['Orders', 'Help Center', 'Wishlist'] : [],
    },
    {
      title: 'More Options',
      data: ['Scan for coupon', 'FAQs', 'About Us', 'Terms of Use', 'Privacy Policy'],
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item}</Text>
    </TouchableOpacity>
  );

  const renderHeader = ({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      {!isAuthenticated ? (
        <View style={styles.notAuthenticatedContainer}>
          <View style={styles.profileIconContainer}>
            {/* Replace with your profile icon component */}
            <Text style={styles.profileIcon}>👤</Text>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.loginButtonText}>LOG IN/SIGN UP</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notAuthenticatedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconContainer: {
    marginBottom: 20,
  },
  profileIcon: {
    fontSize: 100,
    color: 'gray',
  },
  loginButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
});

export default ProfileScreen;

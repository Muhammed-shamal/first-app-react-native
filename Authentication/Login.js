import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { scale, verticalScale, moderateScale } from './responsive';
import LottieView from "lottie-react-native";
import auth from '@react-native-firebase/auth';


const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirm, setConfirm] = useState(null);

  const sendOtp = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmOtp = async () => {
    try {
      await confirm.confirm(otp);
      console.log("OTP confirmed");
    } catch (error) {
      console.log("Invalid OTP");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to OTP Login</Text>

      <LottieView
        source={require("../assets/Animation_login_page.json")}
        autoPlay
        loop
        style={{ width: 250, height: 225 }}
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Phone number"
          keyboardType="phone-pad"
        />
        <Ionicons
          name="call-outline"
          size={24}
          color="grey"
          style={styles.phoneIcon}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={sendOtp}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      {confirm && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setOtp}
            value={otp}
            placeholder="Enter OTP"
            keyboardType="number-pad"
          />
        </View>
      )}

      {confirm && (
        <TouchableOpacity style={styles.button} onPress={confirmOtp}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.forgotPassword}>I forgot my password</Text>

      <View style={styles.signupContainer}>
        <Text>Wanna try our services?</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>here you are</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: scale(16),
    backgroundColor: "#fff",
  },
  title: {
    fontSize: scale(24),
    marginBottom: verticalScale(24),
    fontWeight: "bold",
  },
  logo: {
    marginBottom: verticalScale(48),
  },
  input: {
    height: verticalScale(50),
    width: "100%",
    marginVertical: verticalScale(10),
    borderWidth: 1,
    padding: scale(10),
    borderRadius: 5,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#01a5fc",
    borderRadius: 25,
    padding: scale(12),
    alignItems: "center",
    marginTop: verticalScale(20),
    width: '100%',
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: scale(16),
  },
  forgotPassword: {
    color: "#0ed1c0",
    marginTop: verticalScale(20),
    fontSize: scale(14),
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: verticalScale(20),
  },
  signupText: {
    color: "#0ed1c0",
    marginLeft: scale(4),
    fontSize: scale(14),
  },
  logoIcon: {
    width: scale(120),
    height: scale(120),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(32),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: scale(10),
    padding: scale(10),
  },
  phoneIcon: {
    position: "absolute",
    right: scale(10),
    padding: scale(10),
  },
});

export default LoginScreen;

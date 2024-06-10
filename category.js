import {useState,useEffect,React} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

 

const CategoryScreen = ({ navigation }) => {
    const [categories, setCategories] = useState([]);
  
    // Manually map category names to images
    const categoryImages = {
      electronics: require('./images/electronic.jpg'),
      jewelery: require('./images/jwellery.webp'),
      "men's clothing": require('./images/mens.jpg'),
      "women's clothing": require('./images/women.jpg'),
    };
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCategories(data);
        });
    }, []);
  
    return (
      <View style={styles.container}>
        {/* <Text style={styles.header}>Shop by Category</Text> */}
        <ScrollView contentContainerStyle={styles.categoryContainer}>
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={styles.categoryCard}
              onPress={() => navigation.navigate('CategoryDetails', { category })}
            >
              <Image source={categoryImages[category]} style={styles.categoryImage} />
              <Text style={styles.categoryTitle}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  categoryCard: {
    width: '45%', // Adjust the width to make the cards smaller
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  categoryImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

export default CategoryScreen;

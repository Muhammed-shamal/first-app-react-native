import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // State to track the current page

  //search setups
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);



const categoryImages = {
    electronics: require('./assets/electronic.jpeg'),
    jewelery: require('./assets/jwellery.webp'),
    "men's clothing": require('./assets/mens-fasion.jpg'),
    "women's clothing": require('./assets/womens.jpg'),
  };


  useEffect(() => {
    // Fetch banners, categories, and featured products from API
    //fetchBanners();
    fetchCategories();
    fetchProducts()
    fetchFeaturedProducts();
  }, []);

  // const fetchBanners = async () => {
  //   const response = await fetch('https://fakestoreapi.com/banners');
  //   const data = await response.json();
  //   setBanners(data);
  // };

  const fetchCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/categories');
    const data = await response.json();
    setCategories(data);
  };

  const fetchFeaturedProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
    // Shuffle the array of products
    const shuffledProducts = shuffleArray(data);

    const randomFeaturedProducts = shuffledProducts.slice(0, 10);
    
    setFeaturedProducts(randomFeaturedProducts);
  };
  
  // Function to shuffle an array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data); // Initialize filteredProducts with all products
  };


  const banners = [
    { image: require('./assets/32273194_7921452.jpg') },
    { image: require('./assets/11461405_4739023.jpg') },
    { image: require('./assets/11386555_4689942.jpg') },
    {image:require("./assets/21532025_6373577.jpg")}
  ];
  


  const handlePageChange = (e) => {
    setActiveIndex(e.nativeEvent.position);
  };


  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {banners.map((_, index) => (
          <View key={index} style={[styles.dot, activeIndex === index ? styles.activeDot : null]} />
        ))}
      </View>
    );
  };


  const brandStores = [
    { name: 'Adidas', image: require('./assets/adidas.jpeg') },
    { name: 'Puma', image: require('./assets/puma.jpeg') },
    { name: 'Skechers', image: require('./assets/skechers.jpeg') },
    { name: 'Under Armour', image: require('./assets/under_armour.jpeg') },
    { name: 'Nike', image: require('./assets/nike.jpeg') },
    { name: 'Woodland', image: require('./assets/woodland-footer.png') },
  ];

  const renderBrandStoreItem = ({ item }) => (
    <View style={styles.brandStoreItem}>
      <Image source={item.image} style={styles.brandStoreImage} />
      <Text style={styles.brandStoreName}>{item.name}</Text>
    </View>
  );



  const footwearStores = [
    { name:"Women's Footwear Store", image: require('./assets/womens_footwear.jpg') },
    {name:"Mens Sneaker",image:require('./assets/sneaker.jpg')},
    { name: 'Sport shoes', image: require('./assets/sport shoe.jpg') },
    { name: 'Slipper', image: require('./assets/slipper.jpg') },
    { name: 'School Shoes', image: require('./assets/school_shoe.jpg') },
  ];

  

  const renderFootwearStoreItem = ({ item }) => (
    <TouchableOpacity style={styles.footwearStoreCard}>
      <Image source={item.image} style={styles.footwearStoreImage} />
      <Text style={styles.footwearStoreText}>{item.name}</Text>
    </TouchableOpacity>
  );

  
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate('Category', { category: item })}>
      <Image source={categoryImages[item]} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>₹{item.price}</Text>
    </TouchableOpacity>
  );


  
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for brands and products"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Banner Carousel */}
      <View style={styles.bannerContainer}>
        <PagerView style={styles.pagerView} initialPage={0} onPageSelected={handlePageChange}>
          {banners.map((banner, index) => (
            <View key={index} style={styles.bannerSlide}>
              <Image source={banner.image} style={styles.bannerImage} />
            </View>
          ))}
        </PagerView>
        {renderDots()}
      </View>



      {/* Categories */}
      <View style={styles.sectionContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />
      </View>

      {/* Price Store */}
      <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>Price Store</Text>
    <FlatList
      data={[
        { key: '1', label: 'UNDER ₹199' },
        { key: '2', label: 'UNDER ₹249' },
        { key: '3', label: 'UNDER ₹399' },
        { key: '4', label: 'UNDER ₹499' },
      ]}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.priceStoreItem}>
          <Text style={styles.priceStoreText}>{item.label}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.key}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.priceStoreContainer}
    />
  </View>


      {/* Budget Buys */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Budget Buys</Text>
        <FlatList
          data={featuredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productList}
        />
      </View>


       
         {/* Footwear */}
         <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Footwears</Text>
        <FlatList
          data={footwearStores}
          renderItem={renderFootwearStoreItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.footwearList}
        />
      </View>


      {/* Brand Stores */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Brand Stores</Text>
        <FlatList
          data={brandStores}
          renderItem={renderBrandStoreItem}
          keyExtractor={(item) => item.name}
          numColumns={3}
          contentContainerStyle={styles.brandStoreList}
        />
      </View>

      {/* Quote */}
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"Fashion is the armor to survive the reality of everyday life."</Text>
        <Text style={styles.quoteAuthor}>Bill Cunningham</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  bannerContainer: {
    height: 220,
  },
  pagerView: {
    flex: 1,
  },
  bannerSlide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },

  sectionContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryList: {
    paddingVertical: 10,
  },
  categoryCard: {
    width: 100,
    alignItems: 'center',
    marginRight: 10,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 14,
    textAlign: 'center',
  },
  priceStoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceStoreItem: {
    backgroundColor: '#f0e5ff',
    borderRadius: 25,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  priceStoreText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productList: {
    paddingVertical: 10,
  },
  productCard: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 14,
  },
  productPrice: {
    marginTop: 5,
    color: 'green',
  },


  brandStoreList: {
    paddingVertical: 10,
  },
  brandStoreItem: {
    width: '30%',
    alignItems: 'center',
    margin: '1.5%',
  },
  brandStoreImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  brandStoreName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  quoteContainer: {
    alignItems: 'center',
    padding: 20,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  quoteAuthor: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
  },




  footwearList: {
    paddingVertical: 10,
  },
  footwearStoreCard: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  footwearStoreImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  footwearStoreText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;


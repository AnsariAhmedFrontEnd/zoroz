// require("dotenv").config();
// const mongoose = require("mongoose");
// const Product = require("./models/Products"); // Adjust path as needed

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI);

// const products = [
//     // Electronics
//     {
//       name: "Smartphone",
//       description: "A modern smartphone with a 6.5-inch display and high-speed processor.",
//       price: 299,
//       category: "Electronics",
//       stock: 50,
//       imageUrl: "url1",
//     },
//     {
//       name: "Laptop",
//       description: "Lightweight laptop with 8GB RAM and 256GB SSD.",
//       price: 999,
//       category: "Electronics",
//       stock: 30,
//       imageUrl: "url2",
//     },
//     {
//       name: "Headphones",
//       description: "Noise-canceling over-ear headphones.",
//       price: 99,
//       category: "Electronics",
//       stock: 100,
//       imageUrl: "url3",
//     },
//     {
//       name: "Smartwatch",
//       description: "Smartwatch with fitness tracking and notifications.",
//       price: 149,
//       category: "Electronics",
//       stock: 75,
//       imageUrl: "url4",
//     },
//     {
//       name: "Tablet",
//       description: "10-inch tablet with 64GB storage and dual speakers.",
//       price: 249,
//       category: "Electronics",
//       stock: 40,
//       imageUrl: "url5",
//     },
    
//     // Clothing
//     {
//       name: "T-Shirt",
//       description: "Soft cotton T-shirt available in multiple colors.",
//       price: 19,
//       category: "Clothing",
//       stock: 200,
//       imageUrl: "url6",
//     },
//     {
//       name: "Jeans",
//       description: "Denim jeans with a comfortable fit.",
//       price: 39,
//       category: "Clothing",
//       stock: 150,
//       imageUrl: "url7",
//     },
//     {
//       name: "Jacket",
//       description: "Waterproof jacket for all seasons.",
//       price: 69,
//       category: "Clothing",
//       stock: 80,
//       imageUrl: "url8",
//     },
//     {
//       name: "Sneakers",
//       description: "Comfortable sneakers for everyday wear.",
//       price: 89,
//       category: "Clothing",
//       stock: 120,
//       imageUrl: "url9",
//     },
//     {
//       name: "Sweater",
//       description: "Warm woolen sweater available in various sizes.",
//       price: 49,
//       category: "Clothing",
//       stock: 90,
//       imageUrl: "url10",
//     },
  
//     // Home Essentials
//     {
//       name: "Blender",
//       description: "High-speed blender for smoothies and shakes.",
//       price: 49,
//       category: "HomeEssentials",
//       stock: 40,
//       imageUrl: "url11",
//     },
//     {
//       name: "Vacuum Cleaner",
//       description: "Powerful vacuum cleaner with HEPA filter.",
//       price: 99,
//       category: "HomeEssentials",
//       stock: 60,
//       imageUrl: "url12",
//     },
//     {
//       name: "Coffee Maker",
//       description: "Programmable coffee maker with 12-cup capacity.",
//       price: 79,
//       category: "HomeEssentials",
//       stock: 70,
//       imageUrl: "url13",
//     },
//     {
//       name: "Air Purifier",
//       description: "Quiet air purifier with HEPA filter.",
//       price: 199,
//       category: "HomeEssentials",
//       stock: 25,
//       imageUrl: "url14",
//     },
//     {
//       name: "Microwave Oven",
//       description: "Compact microwave with multiple settings.",
//       price: 129,
//       category: "HomeEssentials",
//       stock: 50,
//       imageUrl: "url15",
//     },
  
//     // Additional products across categories
//     {
//       name: "Gaming Console",
//       description: "Next-gen gaming console with high-resolution graphics.",
//       price: 499,
//       category: "Electronics",
//       stock: 20,
//       imageUrl: "url16",
//     },
//     {
//       name: "Running Shoes",
//       description: "Lightweight running shoes with cushioned soles.",
//       price: 59,
//       category: "Clothing",
//       stock: 110,
//       imageUrl: "url17",
//     },
//     {
//       name: "Air Fryer",
//       description: "Low-fat air fryer with digital controls.",
//       price: 89,
//       category: "HomeEssentials",
//       stock: 30,
//       imageUrl: "url18",
//     },
//     {
//       name: "Wireless Charger",
//       description: "Fast wireless charger compatible with multiple devices.",
//       price: 29,
//       category: "Electronics",
//       stock: 200,
//       imageUrl: "url19",
//     },
//     {
//       name: "Bluetooth Speaker",
//       description: "Portable Bluetooth speaker with deep bass.",
//       price: 59,
//       category: "Electronics",
//       stock: 130,
//       imageUrl: "url20",
//     },
//   ];
  
  

// async function seedDB() {
//   try {
//     await Product.deleteMany(); // Clear existing products
//     await Product.insertMany(products); // Add new products
//     console.log("Database seeded successfully.");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// seedDB();

# Mock eCommerce Website

A mock eCommerce website, inspired by Amazon, demonstrating a full shopping flow from product selection to checkout and payment confirmation.

## Project Overview

This project simulates an eCommerce website, complete with a product listing, product detail page, shopping cart, checkout, and mock payment processing. It's designed as a hands-on project to showcase skills in frontend and backend development, using React for the frontend and Node.js with Express for the backend, and includes integration with a MongoDB database.

## Key Features

- **Homepage**: Displays featured products and offers.
- **Product Listing Page**: Lists all products with basic details.
- **Product Detail Page**: Shows detailed information on a selected product with an option to add it to the cart.
- **Cart Page**: Displays selected items, with an option to adjust quantity or remove items.
- **Checkout Page**: Reviews cart items and prompts payment method selection.
- **Mock Payment**: Simulates payment processing with random success or failure results, leading to dedicated success and failure pages.

## Tech Stack

- **Frontend**: React, React Router, React-Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB (mock data for product listings)
- **Environment Variables**: `dotenv` for environment configuration
- **API Testing**: Axios or Fetch for handling API requests
- **State Management**: React Context API for managing cart state

## Installation and Setup

1. **Clone the repository**:

   git clone <repository_url>
   cd mock-ecommerce

2. **Backend setup**:

cd backend
npm install

3. **Create a .env file with the following variables**:

MONGO_URI=<Your MongoDB Connection String>
PORT=5000

4. **Start the backend server**:
   npm run dev

5. **Frontend Setup**:
   cd frontend
   npm install
   npm start

## Mock Data

Import mock data into MongoDB for product listings using your chosen method or set up a seeding script.

## Usage

- **Homepage**: View featured products.
- **Browse Products**: Navigate to the product listing page, click on products for detailed views.
- **Add to Cart**: Select products to add to your cart.
- **Checkout**: Review the cart, select payment method, and proceed to payment.
- **Mock Payment**: Experience simulated success/failure of payment to complete the flow.

## Project Highlights

- **Full Shopping Flow**: From product selection to checkout, showcasing end-to-end transaction handling.
- **Responsive Design**: Built with responsive elements using React-Bootstrap.
- **Mock APIs**: Provides simulated data and endpoints, allowing full application flow without real payments.
- **Error Handling**: Handles payment success/failure with appropriate user feedback.

## Future Enhancements

- **Authentication**: Add user sign-in and profile features.
- **Order History**: Implement a feature to track and view past orders.
- **Enhanced UI**: Improve styling and add animations for a better user experience.

**License**:
This project is open-source and available under the MIT License.

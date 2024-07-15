# E-commerce Application

This is a full-stack e-commerce application built with React Redux for the frontend, Node.js for the backend, and MySQL for the database. It includes features for viewing products, adding products to the cart, and checking out.

## Prerequisites

- Node.js (v14 or later)
- MySQL
- npm (v6 or later)

## Getting Started

### Step 1: Setup MySQL Database

1. Open your MySQL client (e.g., MySQL Workbench, phpMyAdmin, or command line).
2. Create a new database and tables by running the following SQL script:

```sql
CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(10, 2),
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Order_Chairs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    chair_id INT,
    FOREIGN KEY (order_id) REFERENCES Orders(id)
);

CREATE TABLE Order_Tables (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    table_id INT,
    FOREIGN KEY (order_id) REFERENCES Orders(id)
);

CREATE TABLE Order_Tops (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    top_id INT,
    FOREIGN KEY (order_id) REFERENCES Orders(id)
);

CREATE TABLE Products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    category VARCHAR(50)
);

-- Insert products
INSERT INTO Products (id, name, price, category) VALUES
(1, 'Lounge Chair', 2000, 'Chairs'),
(2, 'Dining Chair', 1800, 'Chairs'),
(3, 'Table1', 3000, 'Tables'),
(4, 'Table2', 3200, 'Tables'),
(5, 'Table3', 3100, 'Tables'),
(6, 'Dining Top', 900, 'Tops');

#### Setup Backend with Node.js :


##Installed the necessary dependencies:
    - npm install
    - mkdir backend
##Navigated to the backend directory:
    - cd backend
    - npm init -y
    - npm install express mysql body-parser cors
    
    ## Create Backend Files:
        - touch index.js db.js

    ## Run the backend server:
        - node index.js

##Setup Frontend with React Redux:
##Install Dependencies:
    
    - npx create-react-app frontend
    - cd frontend
    - npm install redux react-redux axios react-router-dom

## Create Frontend Files:
    
    - mkdir src/components src/pages src/redux 
    - touch src/redux/store.js src/redux/actions.js src/redux/reducers.js src/components/Navbar.js src/components/Product.js src/pages/ProductList.js src/pages/Cart.js src/pages/Checkout.js 

## Run Frontend:

    - npm start

####  E-commerce application should now be running locally. You can access the frontend at http://localhost:3000 and the backend at http://localhost:5000.












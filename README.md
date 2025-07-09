# Mini E‑Commerce SPA

This project is a **Mini E‑Commerce Single‑Page Application** built as part of the Qtec Solution Limited Frontend Developer Assessment Task.

## 🎯 Objective

A simple, responsive e-commerce app that:
- Lists at least 6 dummy products
- Allows users to add products to the cart
- Allows modifying quantities in a cart sidebar
- Displays total order amount
- Includes a checkout modal form (name, email, address) to simulate order placement

No user authentication is required.

## 🚀 Live Demo

Live deployed version: qtecdev-careers-test-project.vercel.app 


## 📁 GitHub Repository

Repository: https://github.com/Newaz-Sourav/Qtecdev-Careers-Test-Project 


## 🛠️ Tech Stack

- *Frontend:* React.js  
- *Language:* JavaScript  
- *Styling:* Tailwind CSS  
- *Bundler / Toolchain:* Vite  
- *Backend / API:* [FakeStore API](https://fakestoreapi.com/)  
- *Deployment:* Vercel
## 🧩 Features / Pages

### 1. Home Page
- Displays a grid of at least **6 products**
- Each product card includes: <br/>
  ⟶ Image placeholder <br/>
  ⟶ Product title <br/>
  ⟶ Price <br/>
  ⟶ “Add to Cart” button <br/>
- Clicking a product navigates to the Product Detail Page

### 2. Product Detail Page
- Shows full product info: <br/>
  ⟶ Larger image <br/>
  ⟶ Title<br/>
  ⟶ Description<br/>
  ⟶ Price<br/>
  ⟶ “Add to Cart” button<br/>

### 3. Cart Sidebar
- Slide-in/out sidebar accessible via "Cart" link or icon in navbar
- Shows added products with:<br/>
  ⟶ Quantity controls (increment / decrement)<br/>
  ⟶ Line item price and quantity<br/>
- Displays total amount at bottom
- “Checkout” button to open modal

### 4. Checkout Modal
- Popup modal form with:<br/>
  ⟶ Name field<br/>
  ⟶ Email field<br/>
  ⟶ Address field<br/>
- Submit button to simulate placing an order (no real API calls)

## 📐 Design
- Clean, modern card layout
- Responsive design for mobile and desktop
- Navbar with links: **Home** and **Cart**


## 📝 How to Run Locally

```bash
git clone https://github.com/Newaz-Sourav/Qtecdev-Careers-Test-Project.git
cd Qtecdev-Careers-Test-Project
npm install
npm run dev


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './Home';
import CategoryPage from './CategoryPage';
import ProductList from './ProductList';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/category/:category/:subCategory" element={<ProductList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
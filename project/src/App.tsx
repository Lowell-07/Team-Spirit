import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Shop from './pages/Shop';
import CategoryPage from './pages/CategoryPage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout>
                <LandingPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/shop" element={
            <ProtectedRoute>
              <Layout>
                <Shop />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/category/:category" element={
            <ProtectedRoute>
              <Layout>
                <CategoryPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/products/:category/:subcategory" element={
            <ProtectedRoute>
              <Layout>
                <ProductList />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Layout>
                <Cart />
              </Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
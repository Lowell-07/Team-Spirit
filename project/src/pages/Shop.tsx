import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'mens',
    name: "Men's Wear",
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=800',
    description: 'Shop the latest trends in men\'s fashion'
  },
  {
    id: 'womens',
    name: "Women's Wear",
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800',
    description: 'Discover elegant women\'s fashion'
  },
  {
    id: 'kids',
    name: "Kids' Wear",
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=800',
    description: 'Adorable styles for little ones'
  }
];

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Shop by Category</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                <p className="text-white/90">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const categoryData = {
  mens: {
    title: "Men's Collection",
    subcategories: [
      { id: 'shirts', name: 'Shirts', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800' },
      { id: 'pants', name: 'Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800' },
      { id: 'casual', name: 'Casual Wear', image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800' }
    ]
  },
  womens: {
    title: "Women's Collection",
    subcategories: [
      { id: 'dresses', name: 'Dresses', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800' },
      { id: 'sarees', name: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800' },
      { id: 'tops', name: 'Tops', image: 'https://images.unsplash.com/photo-1551048632-c72a365817d6?auto=format&fit=crop&w=800' }
    ]
  },
  kids: {
    title: "Kids' Collection",
    subcategories: [
      { id: 'boys', name: 'Boys', image: 'https://images.unsplash.com/photo-1503919472739-1c9c48f1c351?auto=format&fit=crop&w=800' },
      { id: 'girls', name: 'Girls', image: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?auto=format&fit=crop&w=800' },
      { id: 'infants', name: 'Infants', image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800' }
    ]
  }
};

export default function CategoryPage() {
  const { category } = useParams<{ category: keyof typeof categoryData }>();
  const data = category ? categoryData[category] : null;

  if (!data) return <div>Category not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">{data.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.subcategories.map((subcategory) => (
          <Link
            key={subcategory.id}
            to={`/products/${category}/${subcategory.id}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={subcategory.image}
                alt={subcategory.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition duration-300">
                <h2 className="text-2xl font-bold text-white">{subcategory.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
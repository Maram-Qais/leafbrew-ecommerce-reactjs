import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/Product/ProductCard';
import FilterBar from '../components/Product/FilterBar';
import { useToast } from '../hooks/useToast';
import Toast from '../components/UI/Toast';
import productsData from '../data/products.json';

const Shop = () => {
  const [selectedMood, setSelectedMood] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products] = useState(productsData);
  const { toasts, addToast, removeToast } = useToast();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const moodParam = params.get('mood');
    if (moodParam) {
      setSelectedMood(moodParam);
    }
  }, [location]);

  const handleAddToCart = (productName) => {
    addToast(`${productName} added to cart!`, 'success');
  };

  const filteredProducts = products.filter(product => {
    const matchesMood = selectedMood === 'All' || product.mood === selectedMood;
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesMood && matchesCategory;
  });

  return (
    <>
      <div className="min-h-screen bg-cream pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-4">
              Our Tea Collection
            </h1>
            <p className="text-lg font-work text-forest/70 max-w-2xl mx-auto">
              Discover premium organic teas carefully sourced from sustainable farms around the world
            </p>
          </motion.div>

          <FilterBar
            selectedMood={selectedMood}
            onMoodChange={setSelectedMood}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} onAddToCart={handleAddToCart} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🍃</div>
              <h3 className="text-2xl font-playfair font-semibold text-forest mb-2">
                No teas found
              </h3>
              <p className="font-work text-forest/70 mb-6">
                Try adjusting your filters to discover more teas
              </p>
              <button
                onClick={() => {
                  setSelectedMood('All');
                  setSelectedCategory('All');
                }}
                className="bg-forest text-cream px-6 py-3 rounded-full font-work font-semibold hover:bg-forest/90 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
      <Toast toasts={toasts} onRemove={removeToast} />
    </>
  );
};

export default Shop;
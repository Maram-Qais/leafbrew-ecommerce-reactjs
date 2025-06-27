import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiShoppingBag, HiCheck } from 'react-icons/hi';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/Product/ProductCard';
import { useToast } from '../hooks/useToast';
import Toast from '../components/UI/Toast';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    setProduct(foundProduct);

    if (foundProduct) {
      const related = productsData
        .filter(p => p.id !== foundProduct.id && (p.mood === foundProduct.mood || p.category === foundProduct.category))
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;
    
    setIsAdding(true);
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    addToast(`${quantity} ${product.name} added to cart!`, 'success');
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleRelatedAddToCart = (productName) => {
    addToast(`${productName} added to cart!`, 'success');
  };

  const getMoodColor = (mood) => {
    switch (mood?.toLowerCase()) {
      case 'calm':
        return 'bg-sage text-forest';
      case 'energy':
        return 'bg-terracotta text-cream';
      case 'digestion':
        return 'bg-forest text-cream';
      default:
        return 'bg-sage text-forest';
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-cream pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍃</div>
          <h2 className="text-2xl font-playfair font-semibold text-forest mb-2">Tea not found</h2>
          <Link to="/shop" className="text-terracotta hover:underline font-work">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-cream pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/shop"
              className="inline-flex items-center text-forest hover:text-terracotta transition-colors font-work"
            >
              <HiArrowLeft className="mr-2" />
              Back to Shop
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold font-work ${getMoodColor(product.mood)}`}>
                  {product.mood}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl font-playfair font-bold text-terracotta">
                  ${product.price}
                </p>
              </div>

              <p className="text-lg font-work text-forest/80 leading-relaxed">
                {product.description}
              </p>

              <div>
                <h3 className="text-xl font-playfair font-semibold text-forest mb-3">
                  Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-sage text-forest px-3 py-1 rounded-full text-sm font-work"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-work font-medium text-forest mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-sage text-forest w-10 h-10 rounded-full flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-work font-semibold text-forest w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-sage text-forest w-10 h-10 rounded-full flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full bg-forest text-cream py-4 rounded-full font-work font-semibold text-lg hover:bg-terracotta transition-colors disabled:opacity-70 flex items-center justify-center space-x-2"
                >
                  {isAdding ? (
                    <>
                      <HiCheck className="animate-pulse" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <HiShoppingBag />
                      <span>Add to Cart</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>

          {relatedProducts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-forest mb-8 text-center">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <ProductCard product={relatedProduct} onAddToCart={handleRelatedAddToCart} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
      <Toast toasts={toasts} onRemove={removeToast} />
    </>
  );
};

export default ProductDetail;
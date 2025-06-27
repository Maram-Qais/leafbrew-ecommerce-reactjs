import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from 'react-icons/hi';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, onAddToCart }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    if (onAddToCart) {
      onAddToCart(product.name);
    }
  };

  const getMoodColor = (mood) => {
    switch (mood.toLowerCase()) {
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

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
          <div className="relative overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute top-3 left-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold font-work ${getMoodColor(product.mood)}`}>
                {product.mood}
              </span>
            </div>
          </div>
          
          <div className="p-5">
            <h3 className="font-playfair text-xl font-semibold text-forest mb-2 group-hover:text-terracotta transition-colors">
              {product.name}
            </h3>
            <p className="font-work text-forest/70 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="font-playfair text-2xl font-bold text-forest">
                ${product.price}
              </span>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                className="bg-forest text-cream p-2 rounded-full hover:bg-terracotta transition-colors duration-300 group/btn"
              >
                <HiShoppingBag size={20} className="group-hover/btn:scale-110 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
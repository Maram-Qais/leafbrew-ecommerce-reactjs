import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiTrash, HiShoppingBag } from 'react-icons/hi';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-8xl mb-6">🛍️</div>
            <h1 className="text-3xl font-playfair font-bold text-forest mb-4">
              Your cart is empty
            </h1>
            <p className="text-lg font-work text-forest/70 mb-8">
              Discover our collection of premium organic teas
            </p>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-forest text-cream px-8 py-4 rounded-full font-work font-semibold text-lg hover:bg-terracotta transition-colors"
              >
                Start Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-playfair font-bold text-forest mb-2">
            Your Cart
          </h1>
          <p className="font-work text-forest/70">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl hover:scale-105 transition-transform"
                    />
                  </Link>
                  
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-playfair text-xl font-semibold text-forest hover:text-terracotta transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="font-work text-forest/70 text-sm mt-1">{item.mood}</p>
                    <p className="font-playfair text-lg font-bold text-forest mt-2">
                      ${item.price}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="bg-sage text-forest w-8 h-8 rounded-full flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
                    >
                      -
                    </button>
                    <span className="font-work font-semibold text-forest w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="bg-sage text-forest w-8 h-8 rounded-full flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                  >
                    <HiTrash size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 shadow-md h-fit sticky top-24"
          >
            <h2 className="font-playfair text-2xl font-bold text-forest mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between font-work">
                <span className="text-forest/70">Subtotal</span>
                <span className="font-semibold text-forest">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-work">
                <span className="text-forest/70">Shipping</span>
                <span className="font-semibold text-forest">Free</span>
              </div>
              <div className="border-t border-sage pt-4">
                <div className="flex justify-between font-playfair text-xl font-bold">
                  <span className="text-forest">Total</span>
                  <span className="text-forest">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-forest text-cream py-3 rounded-full font-work font-semibold hover:bg-terracotta transition-colors flex items-center justify-center space-x-2"
              >
                <HiShoppingBag />
                <span>Checkout</span>
              </motion.button>
              
              <button
                onClick={clearCart}
                className="w-full bg-sage text-forest py-3 rounded-full font-work font-medium hover:bg-forest hover:text-cream transition-colors"
              >
                Clear Cart
              </button>
            </div>
            
            <p className="text-xs font-work text-forest/60 text-center mt-4">
              *Checkout is for demo purposes only
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
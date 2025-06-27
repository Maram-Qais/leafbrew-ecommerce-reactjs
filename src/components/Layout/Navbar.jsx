import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiShoppingBag, HiMenu, HiX } from 'react-icons/hi';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-sm'
      } backdrop-blur-md bg-[#6B705C]/80`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center outline-none focus:outline-none">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-playfair font-bold text-cream"
            >
              Leaf & Brew
            </motion.h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-work font-medium transition-all duration-200 outline-none focus:outline-none ${
                  location.pathname === item.path
                    ? 'text-cream underline underline-offset-8 decoration-[1.5px]'
                    : 'text-cream/80 hover:text-cream'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link to="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-cream hover:text-terracotta transition-colors"
              >
                <HiShoppingBag size={24} />
                {getTotalItems() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-terracotta text-cream text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                  >
                    {getTotalItems()}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-cream hover:text-terracotta transition-colors"
              >
                <HiShoppingBag size={24} />
                {getTotalItems() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-terracotta text-cream text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                  >
                    {getTotalItems()}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream hover:text-terracotta transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-[#6B705C]/80 backdrop-blur-md"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 font-work font-medium transition-all duration-200 outline-none focus:outline-none ${
                  location.pathname === item.path
                    ? 'text-cream underline underline-offset-8 decoration-[1.5px]'
                    : 'text-cream/80 hover:text-cream'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;


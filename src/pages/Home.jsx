import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiSparkles, HiLightningBolt, HiHeart } from 'react-icons/hi';
import ProductCard from '../components/Product/ProductCard';
import { useToast } from '../hooks/useToast';
import Toast from '../components/UI/Toast';
import productsData from '../data/products.json';
import { useState, useEffect } from 'react';

const Home = () => {
  const { toasts, addToast, removeToast } = useToast();
  const featuredProducts = productsData.filter(product => product.featured);

  const handleAddToCart = (productName) => {
    addToast(`${productName} added to cart!`, 'success');
  };

  const categories = [
    {
      name: 'Calm',
      description: 'Soothing blends for relaxation and peace',
      icon: HiSparkles,
      color: 'bg-sage',
      textColor: 'text-forest',
    },
    {
      name: 'Energy',
      description: 'Energizing teas to fuel your day',
      icon: HiLightningBolt,
      color: 'bg-terracotta',
      textColor: 'text-cream',
    },
    {
      name: 'Digestion',
      description: 'Gentle herbs for digestive wellness',
      icon: HiHeart,
      color: 'bg-forest',
      textColor: 'text-cream',
    },
  ];
  const heroImages = [
    {
      url: '/assets/sliders/browntea.png',
      caption: 'Brewed in silence, steeped in focus. A dark companion for spells of thought.',
    },
    {
      url: '/assets/sliders/ment.png',
      caption: 'A breath of cool intent. Calm in every leaf, clarity in every sip.',
    },
    {
      url: '/assets/sliders/b.png',
      caption: 'Bold like blood, sweet like sin. A cup that stirs the heart and sharpens the will.',
    },
  
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, 7000);
  return () => clearInterval(interval);
}, []);
  return (
    <>
      <div className="min-h-screen bg-cream">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-1000"

  style={{
    backgroundImage: `url(${heroImages[currentIndex].url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
    <div className="absolute inset-0 bg-forest/40"></div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
  >
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-playfair font-bold text-cream mb-6"
              style={{ fontFamily: 'Quintessential, serif' }}
    >
      Leaf & Brew
    </motion.h1>

    <motion.p
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-xl md:text-2xl font-work text-cream/90 mb-8 leading-relaxed transition-opacity duration-1000"
    >
      {heroImages[currentIndex].caption}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <Link to="/shop">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-md border-2 border-terracotta text-cream bg-terracotta/10 backdrop-blur-md hover:bg-terracotta hover:text-cream font-playfair tracking-wider uppercase transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        >
          Brew by Intention
        </motion.button>
      </Link>
    </motion.div>
  </motion.div>
</section>


        <section className="py-16 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-4">
              Find Your Perfect Blend
            </h2>
            <p className="text-lg font-work text-forest/70 max-w-2xl mx-auto">
              Each tea is carefully selected to match your moment and mood
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/shop?mood=${category.name}`}>
                  <div className={`${category.color} ${category.textColor} rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                    <category.icon className="mx-auto text-5xl mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-playfair font-bold mb-3">{category.name}</h3>
                    <p className="font-work opacity-90">{category.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-4">
              Featured Teas
            </h2>
            <p className="text-lg font-work text-forest/70 max-w-2xl mx-auto">
              Handpicked favorites that our community loves most
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} onAddToCart={handleAddToCart} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-forest text-cream px-8 py-3 rounded-full font-work font-semibold hover:bg-forest/90 transition-colors"
              >
                View All Teas
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </div>
      <Toast toasts={toasts} onRemove={removeToast} />
    </>
  );
};

export default Home;
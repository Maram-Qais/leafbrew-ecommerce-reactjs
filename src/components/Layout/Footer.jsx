import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-forest text-cream py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-playfair font-bold mb-2"
            >
              Leaf & Brew
            </motion.h3>
            <p className="font-work text-cream/70 leading-relaxed text-sm max-w-xs">
              Herbal alchemy in every cup. Brewed with purpose, steeped in peace.
            </p>
          </div>

          <div>
            <h4 className="font-playfair font-semibold mb-3 text-lg">Explore</h4>
            <ul className="space-y-1 font-work">
              <li>
                <Link to="/shop" className="text-cream/70 hover:text-cream transition-colors">
                  Shop Teas
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/70 hover:text-cream transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-cream/70 hover:text-cream transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-cream/70 hover:text-cream transition-colors">
                  Brew Basket
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold mb-3 text-lg">Contact</h4>
            <ul className="space-y-2 font-work">
              <li className="flex items-center text-cream/70">
                <HiMail className="mr-2 text-lg" />
                <span>rituals@leafandbrew.com</span>
              </li>
              <li className="flex items-center text-cream/70">
                <HiPhone className="mr-2 text-lg" />
                <span>+1 (555) 123-LEAF</span>
              </li>
              <li className="flex items-center text-cream/70">
                <HiLocationMarker className="mr-2 text-lg" />
                <span>Witchwood Hollow</span>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-cream/20 mt-8 pt-4 text-center text-xs font-work text-cream/50"
        >
          <p>&copy; 2025 Leaf & Brew. Crafted by starlight and steeped with love.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

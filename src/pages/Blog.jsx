import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Tea Meditation',
      excerpt:
        'Discover how a moonlit mint infusion can deepen your presence, soothe your spirit, and open the mind’s eye.',
      image: '/assets/sliders/ment.png',
      category: 'Wellness',
      readTime: '5 min read',
      date: 'March 15, 2024',
    },
    {
      id: 2,
      title: 'Green Tea vs. Matcha: Understanding the Difference',
      excerpt:
        'From emerald leaves to powdered ritual, learn which green potion best awakens your energy and focus.',
      image: '/assets/sliders/green.png',
      category: 'Education',
      readTime: '7 min read',
      date: 'March 12, 2024',
    },
    {
      id: 3,
      title: 'Creating Your Evening Tea Ritual',
      excerpt:
        'Transform dusk into dawn’s promise with a sacred cup—perfect blends to guide you into dream’s embrace.',
      image: '/assets/sliders/tea.png',
      category: 'Lifestyle',
      readTime: '6 min read',
      date: 'March 10, 2024',
    },
    {
      id: 4,
      title: 'The Health Benefits of Chamomile Tea',
      excerpt:
        'Sip serenity: explore how golden petals calm digestion and soothe the restless mind under starlight.',
      image: '/assets/sliders/b.png',
      category: 'Health',
      readTime: '8 min read',
      date: 'March 8, 2024',
    },
    {
      id: 5,
      title: 'Sustainable Tea Farming: Our Partner Gardens',
      excerpt:
        'Journey to the earth that sustains our leaves—meet the stewards who cultivate magic with care and fair trade.',
      image: '/assets/sliders/browntea.png',
      category: 'Sustainability',
      readTime: '10 min read',
      date: 'March 5, 2024',
    },
    {
      id: 6,
      title: 'Brewing the Perfect Cup: Temperature & Timing Guide',
      excerpt:
        'Master the ancient alchemy of water, leaf, and time—unlock every nuance of flavor and feeling in your cup.',
      image: '/assets/sliders/mint.png',
      category: 'Education',
      readTime: '4 min read',
      date: 'March 3, 2024',
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Wellness':
        return 'bg-sage text-forest';
      case 'Education':
        return 'bg-terracotta text-cream';
      case 'Lifestyle':
        return 'bg-forest text-cream';
      case 'Health':
        return 'bg-sage text-forest';
      case 'Sustainability':
        return 'bg-forest text-cream';
      default:
        return 'bg-sage text-forest';
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-forest mb-6">
            Tea Stories & Wisdom
          </h1>
          <p className="text-xl font-work text-forest/70 max-w-3xl mx-auto leading-relaxed">
            Explore the world of tea through our collection of mystical articles on wellness,
            sustainability, and the art of mindful living.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
                      'Featured'
                    )}`}
                  >
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit ${getCategoryColor(
                    articles[0].category
                  )}`}
                >
                  {articles[0].category}
                </span>
                <h2 className="text-3xl font-playfair font-bold text-forest mb-4">
                  {articles[0].title}
                </h2>
                <p className="font-work text-forest/70 leading-relaxed mb-6">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between font-work text-sm text-forest/60 mb-6">
                  <span>{articles[0].date}</span>
                  <span>{articles[0].readTime}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-forest text-cream px-6 py-3 rounded-full font-work font-semibold hover:bg-terracotta transition-colors w-fit"
                >
                  Read Article
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                      article.category
                    )}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-forest mb-3 group-hover:text-terracotta transition-colors">
                  {article.title}
                </h3>
                <p className="font-work text-forest/70 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between font-work text-xs text-forest/60">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-sage rounded-3xl p-8 md:p-12 text-center mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest mb-4">
            Stay Steeped in Knowledge
          </h2>
          <p className="text-lg font-work text-forest/80 mb-8 max-w-2xl mx-auto">
            Subscribe for weekly tea wisdom, wellness tips, and exclusive rituals delivered
            straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-forest/20 focus:outline-none focus:border-forest font-work"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-forest text-cream px-6 py-3 rounded-full font-work font-semibold hover:bg-terracotta transition-colors whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;

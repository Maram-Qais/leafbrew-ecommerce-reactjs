import { motion } from 'framer-motion';

const FilterBar = ({ selectedMood, onMoodChange, selectedCategory, onCategoryChange }) => {
  const moods = ['All', 'Calm', 'Energy', 'Digestion'];
  const categories = ['All', 'herbal', 'green', 'black'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cream rounded-2xl p-6 shadow-md mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-playfair text-lg font-semibold text-forest mb-2">
            Shop by Mood
          </label>
          <select
            value={selectedMood}
            onChange={(e) => onMoodChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-sage bg-white text-forest font-work focus:outline-none focus:ring-2 focus:ring-forest/40 transition"
          >
            {moods.map((mood) => (
              <option key={mood} value={mood}>
                {mood}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-playfair text-lg font-semibold text-forest mb-2">
            Tea Type
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-sage bg-white text-forest font-work focus:outline-none focus:ring-2 focus:ring-forest/40 transition"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterBar;

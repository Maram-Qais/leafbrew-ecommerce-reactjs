import { motion } from 'framer-motion';
import { GiHerbsBundle, GiSparkles, GiFairyWings } from 'react-icons/gi';

const About = () => {
  const values = [
    {
      icon: GiHerbsBundle,
      title: 'Enchanted Blends',
      description: 'Each leaf is chosen under moonlight rituals, hand-mixed to soothe hearts and stir ancient memory.',
    },
    {
      icon: GiFairyWings,
      title: 'Earth’s Whisper',
      description: 'Our brews are harvested from sustainable gardens where nature leads and humans follow.',
    },
    {
      icon: GiSparkles,
      title: 'Spiritual Purity',
      description: 'Infused with intention, every sip is a small spell for peace, clarity, and restoration.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-forest mb-6">
            A Tale Steeped in Magic
          </h1>
          <p className="text-xl font-work text-forest/70 max-w-3xl mx-auto leading-relaxed">
            Leaf & Brew was born from moonlight, mystery, and a deep reverence for the earth’s oldest remedy — tea. 
            We’re here to guide your rituals, one sacred cup at a time.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-playfair font-bold text-forest">
              Where Lore Meets Leaf
            </h2>
            <p className="font-work text-forest/80 leading-relaxed">
              Once a dream whispered through forests and steeps, Leaf & Brew is now a sanctuary for seekers — of calm, 
              clarity, and connection. We’ve journeyed across mystical terrains, collecting teas that carry not just taste, 
              but tale.
            </p>
            <p className="font-work text-forest/80 leading-relaxed">
              Our ingredients are grown in sacred balance with the earth, where nature and spirit collaborate. 
              Each pouch is a portal — not just a drink, but an offering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src='/assets/sliders/ment.png'
              alt="Mystic tea ritual"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest text-center mb-12">
            Our Ethos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="bg-sage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-3xl text-forest" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-forest mb-3">
                  {value.title}
                </h3>
                <p className="font-work text-forest/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-sage rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest mb-6">
            Our Oath
          </h2>
          <p className="text-lg font-work text-forest/80 max-w-4xl mx-auto leading-relaxed">
            To enchant, heal, and awaken. Through botanicals and breath, we weave potions that reconnect you with 
            the wild, the wise, and the wonder within.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

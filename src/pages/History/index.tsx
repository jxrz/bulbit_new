import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function History() {
  const { t } = useTranslation();

  const values = [
    {
      title: t('history.val1_title'),
      description: t('history.val1_desc'),
      icon: '/src/assets/images/mnwu9n4r-kzjgkt8.svg'
    },
    {
      title: t('history.val2_title'),
      description: t('history.val2_desc'),
      icon: '/src/assets/images/mnwu9n4r-fiy54jg.svg'
    },
    {
      title: t('history.val3_title'),
      description: t('history.val3_desc'),
      icon: '/src/assets/images/mnwu9n4r-shbr2em.svg'
    },
    {
      title: t('history.val4_title'),
      description: t('history.val4_desc'),
      icon: '/src/assets/images/mnwu9n4r-9lxvptw.svg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('history.title')} | Bulbit Korean BBQ</title>
        <meta name="description" content={t('history.intro_desc')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/src/assets/images/mnwu9n4v-pdxjlbc.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 text-center px-4 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-secondary uppercase">
              {t('history.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
              {t('history.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="brand-panel rounded-[34px] px-6 py-10 md:px-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('history.intro_title')}
            </h2>
            <p className="text-lg md:text-xl text-text leading-relaxed max-w-2xl mx-auto">
              {t('history.intro_desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="flex flex-col gap-16 md:gap-24">
            
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center"
            >
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg border border-primary/10">
                <img src="/src/assets/images/mnwu9n4v-uootlu2.png" alt="Ingredientes frescos" className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="brand-display text-2xl md:text-3xl font-black text-secondary-light mb-4">{t('history.feat1_title')}</h3>
                <p className="text-secondary/80 text-lg">
                  {t('history.feat1_desc')}
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row-reverse gap-8 lg:gap-16 items-center"
            >
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg border border-primary/10">
                <img src="/src/assets/images/mnwu9n4v-c03zqu6.png" alt="Técnica de asado al carbón" className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="brand-display text-2xl md:text-3xl font-black text-secondary-light mb-4">{t('history.feat2_title')}</h3>
                <p className="text-secondary/80 text-lg">
                  {t('history.feat2_desc')}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-24 bg-primary/90 text-white">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-4 rounded-[28px] border border-secondary/15 bg-black/10 p-6 text-center"
              >
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                  <img src={value.icon} alt={value.title} className="w-10 h-10 md:w-12 md:h-12 brightness-0 invert" />
                </div>
                <h4 className="text-xl font-bold mt-2">{value.title}</h4>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

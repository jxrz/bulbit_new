import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { menuItems } from '@/data/menu';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const specials = menuItems.filter(item => item.isPopular).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{t('home.title1')}{t('home.title2')} | Bulbit Korean BBQ</title>
        <meta name="description" content={t('home.subtitle')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-90"
            src="https://www.youtube.com/embed/5CwtUWEXc6g?autoplay=1&mute=1&loop=1&playlist=5CwtUWEXc6g&controls=0&showinfo=0&rel=0&playsinline=1"
            allow="autoplay; encrypted-media"
            title="Korean BBQ Promo Video"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>
        
        <div className="container relative z-10 text-center px-4 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-white bg-primary rounded-full uppercase shadow-lg">
              {t('home.badge')}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              {t('home.title1')} <span className="text-secondary">{t('home.title2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl drop-shadow">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link 
                to="/menu" 
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
              >
                <BookOpen size={20} />
                {t('home.btn_menu')}
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
              >
                <Calendar size={20} />
                {t('home.btn_reserve')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('home.specials_subtitle')}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark">{t('home.specials_title')}</h2>
            </div>
            <Link to="/menu" className="hidden sm:flex items-center gap-1 text-primary font-semibold hover:text-primary-dark transition-colors">
              {t('home.view_all')} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface rounded-2xl overflow-hidden shadow-soft group cursor-pointer flex flex-col border border-primary/5"
              >
                <div className="relative h-48 overflow-hidden bg-secondary/20">
                  <img 
                    src={item.imageUrl} 
                    alt={t(item.nameKey)}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.badgesKeys.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-bold text-primary bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                        {t(item.badgesKeys[0])}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-text-dark mb-1">{t(item.nameKey)}</h3>
                    <p className="text-sm text-text-light line-clamp-2 mb-4">{t(item.descKey)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-primary">
                      {item.price === null ? 'Consultar' : `$${item.price.toFixed(2)}`}
                    </span>
                    <Link to="/menu" className="text-sm font-bold text-white bg-text-dark hover:bg-primary px-4 py-2 rounded-full transition-colors shadow-sm">
                      {t('home.view_detail')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/menu" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
              {t('home.view_all_dishes')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-12 md:py-24 bg-surface">
        <div className="container px-4 mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-primary/10 to-secondary/20 border border-primary/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            
            <div className="flex-1 text-center md:text-left relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark mb-4">{t('home.promo_title')}</h2>
              <p className="text-text-light md:text-lg max-w-2xl">{t('home.promo_desc')}</p>
            </div>
            <Link 
              to="/contact" 
              className="relative z-10 flex-shrink-0 flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-transform hover:-translate-y-1 shadow-[0_10px_25px_-5px_rgba(25,102,154,0.4)]"
            >
              <Calendar size={24} />
              {t('home.promo_btn')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

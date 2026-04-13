import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { menuItems } from '@/data/menu';

export default function Menu() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: t('menu.cat_all') },
    { id: 'carnes', name: t('menu.cat_carnes') },
    { id: 'acompañamientos', name: t('menu.cat_acompanamientos') },
    { id: 'tradicionales', name: t('menu.cat_tradicionales') }
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = t(item.nameKey).toLowerCase().includes(searchQuery.toLowerCase()) || 
                            t(item.descKey).toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, t]);

  return (
    <>
      <Helmet>
        <title>{t('menu.title')} | Bulbit Korean BBQ</title>
        <meta name="description" content={t('menu.subtitle')} />
      </Helmet>

      <div className="bg-background min-h-screen py-8 md:py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-text-dark mb-2">{t('menu.title')}</h1>
              <p className="text-text-light">{t('menu.subtitle')}</p>
            </div>
            <div className="w-full md:w-80 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-text-light" />
              </div>
              <input 
                type="text" 
                placeholder={t('menu.search')} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-surface border border-primary/10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-10 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={clsx(
                  "whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm",
                  activeCategory === category.id 
                    ? "bg-primary text-white" 
                    : "bg-surface text-text hover:bg-primary/5 border border-primary/10"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-surface rounded-2xl overflow-hidden shadow-soft flex flex-col group border border-primary/5"
                >
                  <div className="relative h-56 overflow-hidden bg-secondary/10">
                    <img 
                      src={item.imageUrl} 
                      alt={t(item.nameKey)} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badgesKeys.length > 0 && (
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {item.badgesKeys.map(badgeKey => (
                          <span key={badgeKey} className="px-2.5 py-1 text-[10px] font-bold text-primary bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                            {t(badgeKey)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <h3 className="text-xl font-bold text-text-dark">{t(item.nameKey)}</h3>
                      <span className="text-xl font-bold text-red-600">${item.price.toFixed(2)}</span>
                    </div>
                    
                    <p className="text-sm text-text-light mb-6 flex-grow">
                      {t(item.descKey)}
                    </p>
                    
                    <button className="flex items-center justify-center gap-2 w-full py-3 bg-primary/5 text-primary hover:bg-primary hover:text-white font-bold rounded-xl transition-colors">
                      <Plus size={18} />
                      {t('menu.btn_add')}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-text-light">{t('menu.no_results')}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
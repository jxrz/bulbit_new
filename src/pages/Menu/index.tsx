import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { menuItems } from '@/data/menu';

const menuSections = [
  { id: 'samgyeopsal', titleKey: 'menu.cat_samgyeopsal', accent: 'from-primary/15 to-primary/5' },
  { id: 'sets', titleKey: 'menu.cat_sets', accent: 'from-secondary/30 to-primary/5' },
  { id: 'para_compartir', titleKey: 'menu.cat_para_compartir', accent: 'from-primary/10 to-secondary/15' },
  { id: 'para_uno', titleKey: 'menu.cat_para_uno', accent: 'from-secondary/25 to-primary/10' },
  { id: 'ramen', titleKey: 'menu.cat_ramen', accent: 'from-primary/10 to-secondary/20' },
  { id: 'toppings', titleKey: 'menu.cat_toppings', accent: 'from-primary/10 to-secondary/15' },
  { id: 'bebidas_alcoholicas', titleKey: 'menu.cat_bebidas_alcoholicas', accent: 'from-primary/15 to-red-500/5' },
  { id: 'bebidas', titleKey: 'menu.cat_bebidas', accent: 'from-secondary/25 to-sky-100/40' },
] as const;

const compactSectionIds = new Set(['toppings', 'bebidas_alcoholicas', 'bebidas']);

function cleanMenuText(text: string) {
  return text
    .replace(/\s*\((?:\d+\s*(?:a\s*\d+)?\s*pers?\.?)\)/gi, '')
    .replace(/\s*para\s+\d+\s*a\s*\d+\s+personas\.?/gi, '')
    .replace(/\s*para\s+\d+\s+personas\.?/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export default function Menu() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: t('menu.cat_all') },
    ...menuSections.map((section) => ({
      id: section.id,
      name: t(section.titleKey),
    })),
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        t(item.nameKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(item.descKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.includesKey ? t(item.includesKey).toLowerCase().includes(searchQuery.toLowerCase()) : false);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, t]);

  const visibleSections = useMemo(() => {
    if (activeCategory !== 'all') {
      const currentSection = menuSections.find((section) => section.id === activeCategory);
      return currentSection ? [{ ...currentSection, items: filteredItems }] : [];
    }

    return menuSections
      .map((section) => ({
        ...section,
        items: filteredItems.filter((item) => item.category === section.id),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeCategory, filteredItems]);

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

          {/* Sections */}
          <div className="space-y-10">
            <AnimatePresence mode="popLayout">
              {visibleSections.map((section) => (
                <motion.section
                  key={section.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.28 }}
                  className="rounded-[28px] border border-primary/10 bg-surface/80 p-5 md:p-7 shadow-soft"
                >
                  {(() => {
                    const isCompactSection = compactSectionIds.has(section.id);

                    return (
                      <>
                  <div className={clsx('mb-6 rounded-3xl bg-gradient-to-r px-5 py-4', section.accent)}>
                    <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-dark">{t(section.titleKey)}</h2>
                        <p className="text-sm text-text-light">
                          {section.items.length} {section.items.length === 1 ? 'opción disponible' : 'opciones disponibles'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    layout
                    className={clsx(
                      isCompactSection
                        ? 'overflow-hidden rounded-3xl border border-primary/10 bg-white'
                        : 'grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'
                    )}
                  >
                    {section.items.map((item) => {
                      const itemName = cleanMenuText(t(item.nameKey));
                      const itemDesc = cleanMenuText(t(item.descKey));
                      const itemIncludes = item.includesKey ? cleanMenuText(t(item.includesKey)) : '';

                      if (isCompactSection) {
                        return (
                          <motion.article
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="border-b border-primary/10 px-4 py-4 last:border-b-0 md:px-5"
                          >
                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                              <div className="min-w-0 flex-1">
                                <div className="mb-1 flex flex-wrap items-center gap-2">
                                  <h3 className="text-base md:text-lg font-bold text-text-dark">
                                    {itemName}
                                  </h3>
                                  {item.badgesKeys.map((badgeKey) => (
                                    <span
                                      key={badgeKey}
                                      className="rounded-full bg-primary/8 px-2 py-0.5 text-[10px] font-bold text-primary"
                                    >
                                      {t(badgeKey)}
                                    </span>
                                  ))}
                                </div>

                                <p className="text-sm leading-6 text-text-light">
                                  {itemDesc}
                                </p>

                                {itemIncludes && (
                                  <p className="mt-2 text-sm leading-6 text-text">
                                    <span className="font-bold text-primary">Incluye:</span> {itemIncludes}
                                  </p>
                                )}
                              </div>

                              <div className="shrink-0 md:pl-6">
                                <div className="inline-flex rounded-full bg-primary/8 px-3.5 py-1.5 text-sm font-bold text-primary">
                                  {item.price === null ? 'Consultar' : `$${item.price.toFixed(2)}`}
                                </div>
                              </div>
                            </div>
                          </motion.article>
                        );
                      }

                      return (
                        <motion.article
                          key={item.id}
                          layout
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.25 }}
                          className="group overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft"
                        >
                          <div className="relative h-44 overflow-hidden bg-secondary/10">
                            <img
                              src={item.imageUrl}
                              alt={itemName}
                              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
                            <div className="absolute right-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-sm font-bold text-primary shadow-sm">
                              {item.price === null ? 'Consultar' : `$${item.price.toFixed(2)}`}
                            </div>
                            {item.badgesKeys.length > 0 && (
                              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                {item.badgesKeys.map((badgeKey) => (
                                  <span
                                    key={badgeKey}
                                    className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-primary backdrop-blur-sm shadow-sm"
                                  >
                                    {t(badgeKey)}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="flex h-full flex-col p-5">
                            <h3 className="mb-3 text-xl font-bold leading-snug text-text-dark">
                              {itemName}
                            </h3>

                            <p className="mb-4 text-sm leading-6 text-text-light">
                              {itemDesc}
                            </p>

                            {itemIncludes && (
                              <div className="mt-auto rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm leading-6 text-text">
                                <span className="font-bold text-primary">Incluye:</span> {itemIncludes}
                              </div>
                            )}
                          </div>
                        </motion.article>
                      );
                    })}
                  </motion.div>
                      </>
                    );
                  })()}
                </motion.section>
              ))}
            </AnimatePresence>
          </div>
          
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

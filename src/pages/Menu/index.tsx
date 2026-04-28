import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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

  const categories = [
    { id: 'all', name: t('menu.cat_all') },
    ...menuSections.map((section) => ({
      id: section.id,
      name: t(section.titleKey),
    })),
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => item.isAvailable && (activeCategory === 'all' || item.category === activeCategory));
  }, [activeCategory]);

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

      <div className="min-h-screen py-8 md:py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          {/* Header & Visual Menu CTA */}
          <div className="brand-panel-dark mb-10 flex flex-col gap-6 rounded-[34px] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="brand-kicker mb-3 text-xs font-bold text-secondary">{t('home.badge')}</p>
              <h1 className="brand-display mb-2 text-3xl font-black text-secondary-light md:text-5xl">{t('menu.title')}</h1>
              <p className="max-w-2xl text-secondary/90">{t('menu.subtitle')}</p>
            </div>
            <div className="w-full md:max-w-sm">
              <Link
                to="/menu/visual"
                className="group flex w-full items-center gap-4 rounded-[28px] border border-secondary/20 bg-secondary/10 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-secondary/35 hover:bg-secondary/15"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-secondary-light shadow-sm transition-transform group-hover:scale-105">
                  <BookOpen size={24} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-black uppercase tracking-[0.18em] text-secondary-light">
                    {t('menu.visual_cta')}
                  </span>
                  <span className="mt-1 block text-sm leading-5 text-secondary/75">
                    {t('menu.visual_cta_caption')}
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-10 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={clsx(
                  "whitespace-nowrap rounded-full border px-6 py-2.5 text-sm font-bold transition-all shadow-sm",
                  activeCategory === category.id 
                    ? "border-primary/40 bg-primary text-secondary-light" 
                    : "border-secondary/25 bg-[#201612] text-secondary/95 hover:bg-primary/20 hover:text-secondary-light"
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
                  className="brand-panel rounded-[28px] p-5 md:p-7 shadow-soft"
                >
                  {(() => {
                    const isCompactSection = compactSectionIds.has(section.id);

                    return (
                      <>
                  <div className={clsx('mb-6 rounded-[26px] bg-gradient-to-r px-5 py-4', section.accent, 'from-primary/25 via-secondary/45 to-[#123b58]/20')}>
                    <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
                      <div>
                        <h2 className="brand-display text-2xl font-black text-text-dark md:text-3xl">{t(section.titleKey)}</h2>
                        <p className="text-sm font-medium text-text-light">
                          {section.items.length} {section.items.length === 1 ? 'opción disponible' : 'opciones disponibles'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    layout
                    className={clsx(
                      isCompactSection
                        ? 'overflow-hidden rounded-[28px] border border-primary/10 bg-surface/95'
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
                                    className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary"
                                    >
                                      {t(badgeKey)}
                                    </span>
                                  ))}
                                </div>

                                <p className="text-sm leading-6 text-text">
                                  {itemDesc}
                                </p>

                                {itemIncludes && (
                                  <p className="mt-2 text-sm leading-6 text-text">
                                    <span className="font-bold text-primary">Incluye:</span> {itemIncludes}
                                  </p>
                                )}
                              </div>

                              <div className="shrink-0 md:pl-6">
                                <div className="inline-flex rounded-full bg-text-dark px-3.5 py-1.5 text-sm font-bold text-secondary-light">
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
                          className="group overflow-hidden rounded-[30px] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,248,239,0.98),rgba(243,233,217,0.94))] shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-soft"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-[#140f0d]">
                            <img
                              src={item.imageUrl}
                              alt={itemName}
                              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,11,0.06)_0%,rgba(18,13,11,0.18)_42%,rgba(18,13,11,0.72)_100%)]" />
                            <div className="absolute right-4 top-4 rounded-full bg-[#f6e9d7]/92 px-3.5 py-1.5 text-sm font-black text-text-dark shadow-sm">
                              {item.price === null ? 'Consultar' : `$${item.price.toFixed(2)}`}
                            </div>
                            {item.badgesKeys.length > 0 && (
                              <div className="absolute left-4 top-4 flex max-w-[70%] flex-wrap gap-2">
                                {item.badgesKeys.map((badgeKey) => (
                                  <span
                                    key={badgeKey}
                                    className="rounded-full border border-secondary/20 bg-[#201612]/78 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-secondary-light backdrop-blur-sm shadow-sm"
                                  >
                                    {t(badgeKey)}
                                  </span>
                                ))}
                              </div>
                            )}
                            <div className="absolute inset-x-0 bottom-0 p-4">
                              <h3 className="max-w-[85%] text-xl font-black uppercase leading-tight text-secondary-light md:text-2xl">
                                {itemName}
                              </h3>
                            </div>
                          </div>

                          <div className="flex h-full flex-col gap-4 p-5 md:p-6">
                            <p className="text-sm leading-6 text-text">
                              {itemDesc}
                            </p>

                            {itemIncludes && (
                              <div className="mt-auto rounded-[22px] border border-primary/10 bg-primary/5 px-4 py-3 text-sm leading-6 text-text">
                                <span className="mb-1 block text-[11px] font-black uppercase tracking-[0.18em] text-primary">
                                  Incluye
                                </span>
                                {itemIncludes}
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

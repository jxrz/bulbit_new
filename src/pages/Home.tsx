import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { menuItems } from '@/data/menu';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const specials = menuItems.filter(item => item.isPopular).slice(0, 4);
  const heroItems = specials.slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{t('home.title1')}{t('home.title2')} | Bulbit Korean BBQ</title>
        <meta name="description" content={t('home.subtitle')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-secondary/15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(20,15,13,0.92), rgba(20,15,13,0.72)), radial-gradient(circle at top right, rgba(18,59,88,0.45), transparent 28%), radial-gradient(circle at bottom left, rgba(155,51,35,0.55), transparent 32%), url('/background.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(243,231,206,0.06)_48%,transparent_48%,transparent_100%)] opacity-60" />

        <div className="container relative z-10 mx-auto grid min-h-[82vh] max-w-6xl items-center gap-10 px-4 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="brand-panel-dark rounded-[34px] p-7 md:p-10 brand-glow"
          >
            <span className="brand-kicker inline-flex rounded-full border border-secondary/25 bg-secondary/10 px-4 py-1.5 text-[11px] font-bold text-secondary-light">
              {t('home.badge')}
            </span>
            <h1 className="brand-display mt-6 text-5xl font-black leading-[0.95] text-secondary-light md:text-7xl">
              {t('home.title1')}
              <span className="mt-3 block text-primary-light">{t('home.title2')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-secondary/90 md:text-lg">
              {t('home.subtitle')}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary px-8 py-4 text-lg font-bold text-secondary-light transition-all hover:bg-primary-dark"
              >
                <BookOpen size={20} />
                {t('home.btn_menu')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary/25 bg-secondary/10 px-8 py-4 text-lg font-bold text-secondary-light transition-all hover:bg-secondary/15"
              >
                <Calendar size={20} />
                {t('home.btn_reserve')}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex min-h-[420px] items-center justify-center"
          >
            <div className="absolute inset-0 -rotate-3 rounded-[36px] border border-secondary/10 bg-primary/15" />
            <div className="absolute inset-6 rotate-2 rounded-[30px] border border-[#1f5a86]/30 bg-[#173d60]/20" />
            {heroItems.map((item, index) => (
              <div
                key={item.id}
                className={`brand-panel absolute w-[88%] max-w-md overflow-hidden rounded-[30px] ${index === 0 ? '-rotate-3 md:-translate-x-8 md:-translate-y-10' : 'rotate-3 md:translate-x-10 md:translate-y-10'}`}
              >
                <div className="relative h-52 overflow-hidden bg-text-dark">
                  <img src={item.imageUrl} alt={t(item.nameKey)} className="h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120d0bd9] to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary-light">
                    Bulbit
                  </div>
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black uppercase leading-tight text-text-dark">{t(item.nameKey)}</h3>
                    <span className="shrink-0 rounded-full bg-text-dark px-3 py-1.5 text-sm font-bold text-secondary-light">
                      {item.price === null ? 'Consultar' : `$${item.price.toFixed(2)}`}
                    </span>
                  </div>
                  <p className="line-clamp-3 text-sm leading-6 text-text">
                    {t(item.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="brand-panel-dark rounded-[34px] p-6 md:p-10">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="brand-kicker mb-3 text-sm font-bold text-secondary">{t('home.specials_subtitle')}</p>
                <h2 className="brand-display text-3xl font-black text-secondary-light md:text-4xl">{t('home.specials_title')}</h2>
              </div>
              <Link to="/menu" className="hidden items-center gap-1 font-semibold text-secondary-light transition-colors hover:text-secondary sm:flex">
                {t('home.view_all')} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {specials.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="brand-panel group flex flex-col overflow-hidden rounded-[28px] border border-primary/15 transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative h-48 overflow-hidden bg-text-dark">
                    <img
                      src={item.imageUrl}
                      alt={t(item.nameKey)}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120d0bbf] to-transparent" />
                    {item.badgesKeys.length > 0 && (
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-secondary-light shadow-sm">
                          {t(item.badgesKeys[0])}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-grow flex-col justify-between p-5">
                    <div>
                      <h3 className="mb-2 text-lg font-black uppercase text-text-dark">{t(item.nameKey)}</h3>
                      <p className="mb-4 line-clamp-2 text-sm text-text-light">{t(item.descKey)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="rounded-full bg-text-dark px-3.5 py-1.5 text-base font-bold text-secondary-light">
                        {item.price === null ? 'Consultar' : `$${item.price.toFixed(2)}`}
                      </span>
                      <Link to="/menu" className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-secondary-light transition-colors hover:bg-primary-dark">
                        {t('home.view_detail')}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link to="/menu" className="inline-flex items-center gap-2 font-bold text-secondary-light transition-colors hover:text-secondary">
                {t('home.view_all_dishes')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="brand-panel-dark relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[34px] p-8 md:flex-row md:p-12"
          >
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-[#123b58]/30 blur-3xl"></div>
            
            <div className="flex-1 text-center md:text-left relative z-10">
              <p className="brand-kicker mb-3 text-sm font-bold text-secondary">{t('home.specials_subtitle')}</p>
              <h2 className="brand-display mb-4 text-2xl font-black text-secondary-light md:text-3xl lg:text-4xl">{t('home.promo_title')}</h2>
              <p className="max-w-2xl text-secondary/80 md:text-lg">{t('home.promo_desc')}</p>
            </div>
            <Link 
              to="/contact" 
              className="relative z-10 flex shrink-0 items-center gap-3 rounded-full border border-secondary/25 bg-primary px-8 py-4 text-lg font-bold text-secondary-light transition-transform hover:-translate-y-1 hover:bg-primary-dark"
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

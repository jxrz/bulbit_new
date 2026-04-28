import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import VisualMenuCarousel from '@/components/menu/VisualMenuCarousel';

export default function MenuVisual() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('menu.visual_title')} | Bulbit Korean BBQ</title>
        <meta name="description" content={t('menu.visual_desc')} />
      </Helmet>

      <div className="min-h-screen py-8 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="brand-panel-dark mb-10 flex flex-col gap-6 rounded-[34px] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="brand-kicker mb-3 text-xs font-bold text-secondary">{t('menu.visual_badge')}</p>
              <h1 className="brand-display mb-2 text-3xl font-black text-secondary-light md:text-5xl">
                {t('menu.visual_title')}
              </h1>
              <p className="max-w-2xl text-secondary/90">{t('menu.visual_desc')}</p>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-secondary/25 bg-secondary/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-secondary-light transition-all hover:-translate-y-0.5 hover:bg-secondary/15"
            >
              <ArrowLeft size={18} />
              {t('menu.visual_back')}
            </Link>
          </div>

          <div className="mb-10 flex items-center gap-3 rounded-[28px] border border-secondary/15 bg-[#1a120f]/90 px-5 py-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-secondary-light shadow-sm">
              <BookOpen size={22} />
            </span>
            <p className="text-sm leading-6 text-secondary/85 md:text-base">
              {t('menu.visual_hint')}
            </p>
          </div>

          <VisualMenuCarousel />
        </div>
      </div>
    </>
  );
}

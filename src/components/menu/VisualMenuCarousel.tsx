import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Search, X, ZoomIn, ZoomOut } from 'lucide-react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const menuSlides = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  imageUrl: `/menu/${index + 1}.webp`,
}));

export default function VisualMenuCarousel() {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.6);

  const activeMenuSlide = menuSlides[activeSlide];

  useEffect(() => {
    if (!isAutoPlaying) return undefined;

    const timer = window.setInterval(() => {
      setSlideDirection(1);
      setActiveSlide((currentSlide) => (currentSlide + 1) % menuSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (!isZoomOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsZoomOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomOpen]);

  function handleSlideSelect(nextIndex: number) {
    if (nextIndex === activeSlide) return;

    setIsAutoPlaying(false);
    setSlideDirection(nextIndex > activeSlide ? 1 : -1);
    setActiveSlide(nextIndex);
  }

  function handleNextSlide() {
    setIsAutoPlaying(false);
    setSlideDirection(1);
    setActiveSlide((currentSlide) => (currentSlide + 1) % menuSlides.length);
  }

  function handlePreviousSlide() {
    setIsAutoPlaying(false);
    setSlideDirection(-1);
    setActiveSlide((currentSlide) => (currentSlide - 1 + menuSlides.length) % menuSlides.length);
  }

  function handleOpenZoom() {
    setIsAutoPlaying(false);
    setZoomLevel(1.6);
    setIsZoomOpen(true);
  }

  function handleCloseZoom() {
    setIsZoomOpen(false);
    setZoomLevel(1.6);
  }

  function handleZoomChange(nextZoom: number) {
    setZoomLevel(Math.min(3, Math.max(1, nextZoom)));
  }

  return (
    <>
      <div className="brand-panel-dark overflow-hidden rounded-[34px] p-4 md:p-6">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_290px]">
          <div className="relative overflow-hidden rounded-[30px] border border-secondary/12 bg-[#120d0d] p-2 md:p-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,59,88,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(155,51,35,0.32),transparent_35%)]" />
            <div className="relative overflow-hidden rounded-[24px] border border-secondary/10">
              <AnimatePresence custom={slideDirection} mode="wait">
                <motion.figure
                  key={activeMenuSlide.id}
                  custom={slideDirection}
                  initial={{ opacity: 0, x: slideDirection > 0 ? 70 : -70, rotate: slideDirection > 0 ? 1.4 : -1.4 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: slideDirection > 0 ? -70 : 70, rotate: slideDirection > 0 ? -1.4 : 1.4 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/5] md:min-h-[820px]"
                >
                  <button
                    type="button"
                    onClick={handleOpenZoom}
                    aria-label={t('menu.visual_zoom_open')}
                    className="block h-full w-full"
                  >
                    <img
                      src={activeMenuSlide.imageUrl}
                      alt={t('menu.visual_slide_label', { current: activeSlide + 1, total: menuSlides.length })}
                      className="h-full w-full bg-[#120d0d] object-contain object-center"
                    />
                  </button>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,11,0.12)_0%,rgba(18,13,11,0.14)_22%,rgba(18,13,11,0.22)_100%)]" />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3 md:p-4">
                    <span className="brand-kicker rounded-full border border-secondary/15 bg-[#201612]/72 px-3 py-1.5 text-[10px] font-bold text-secondary-light backdrop-blur-sm">
                      {t('menu.visual_badge')}
                    </span>
                    <span className="rounded-full border border-secondary/15 bg-[#f4e6d1]/88 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-text-dark shadow-sm">
                      {t('menu.visual_slide_label', { current: activeSlide + 1, total: menuSlides.length })}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <button
                      type="button"
                      onClick={handleOpenZoom}
                      aria-label={t('menu.visual_zoom_open')}
                      className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-[#201612]/78 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-secondary-light shadow-sm backdrop-blur-sm transition-all hover:bg-[#2b1b15]"
                    >
                      <Search size={14} />
                      {t('menu.visual_zoom_cta')}
                    </button>
                  </div>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-2">
              <button
                type="button"
                onClick={handlePreviousSlide}
                aria-label={t('menu.visual_prev')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/20 bg-[#f4e6d1]/92 text-text-dark shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => setIsAutoPlaying((currentValue) => !currentValue)}
                aria-label={isAutoPlaying ? t('menu.visual_autoplay_stop') : t('menu.visual_autoplay_start')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/20 bg-[#201612]/85 text-secondary-light shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-[#2b1b15]"
              >
                {isAutoPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                aria-label={t('menu.visual_next')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/20 bg-[#f4e6d1]/92 text-text-dark shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-[28px] border border-secondary/15 bg-[#1a120f]/90 p-5">
              <p className="brand-kicker mb-3 text-xs font-bold text-secondary">{t('menu.visual_badge')}</p>
              <h2 className="brand-display text-2xl font-black text-secondary-light">
                {t('menu.visual_title')}
              </h2>
              <p className="mt-3 text-sm leading-6 text-secondary/80">
                {t('menu.visual_cta_caption')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-2">
              {menuSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleSlideSelect(index)}
                  className={clsx(
                    'group overflow-hidden rounded-[24px] border p-2 text-left transition-all',
                    activeSlide === index
                      ? 'border-secondary/45 bg-secondary/12 shadow-soft'
                      : 'border-secondary/12 bg-[#201612]/60 hover:border-secondary/25 hover:bg-secondary/8'
                  )}
                >
                  <div className="overflow-hidden rounded-[18px] bg-[#120d0d]">
                    <img
                      src={slide.imageUrl}
                      alt={t('menu.visual_slide_label', { current: index + 1, total: menuSlides.length })}
                      className="aspect-[4/5] w-full bg-[#120d0d] object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 px-1 pb-1 pt-3">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-secondary-light">
                      {t('menu.visual_slide_label', { current: index + 1, total: menuSlides.length })}
                    </span>
                    <span
                      className={clsx(
                        'h-2.5 w-2.5 rounded-full transition-colors',
                        activeSlide === index ? 'bg-primary' : 'bg-secondary/30'
                      )}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[#120d0df2] backdrop-blur-md"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-3 border-b border-secondary/10 px-4 py-4 md:px-6">
                <div>
                  <p className="brand-kicker text-[10px] font-bold text-secondary">{t('menu.visual_badge')}</p>
                  <p className="mt-1 text-sm font-bold text-secondary-light">
                    {t('menu.visual_zoom_hint')}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleZoomChange(zoomLevel - 0.3)}
                    aria-label={t('menu.visual_zoom_out')}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/20 bg-[#201612]/85 text-secondary-light"
                  >
                    <ZoomOut size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleZoomChange(1.6)}
                    aria-label={t('menu.visual_zoom_reset')}
                    className="rounded-full border border-secondary/20 bg-[#201612]/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-secondary-light"
                  >
                    {Math.round(zoomLevel * 100)}%
                  </button>
                  <button
                    type="button"
                    onClick={() => handleZoomChange(zoomLevel + 0.3)}
                    aria-label={t('menu.visual_zoom_in')}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/20 bg-[#201612]/85 text-secondary-light"
                  >
                    <ZoomIn size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseZoom}
                    aria-label={t('menu.visual_zoom_close')}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/20 bg-[#f4e6d1]/92 text-text-dark"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto p-4 md:p-6">
                <div className="mx-auto flex min-h-full min-w-max items-start justify-center">
                  <img
                    src={activeMenuSlide.imageUrl}
                    alt={t('menu.visual_slide_label', { current: activeSlide + 1, total: menuSlides.length })}
                    style={{ width: `${zoomLevel * 100}%`, maxWidth: 'none' }}
                    className="h-auto rounded-[24px] bg-[#120d0d] shadow-soft"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

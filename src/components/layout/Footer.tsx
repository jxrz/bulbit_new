import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-secondary/20 bg-[#120d0be3] py-8 md:py-12 pb-24 md:pb-12 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="px-4 py-2">
            <img
              src="/logo_beige.webp"
              alt="Bulbit Korean BBQ"
              className="h-12 md:h-14 w-auto max-w-[210px] md:max-w-[260px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
            />
          </Link>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-secondary/85">
            <Link to="#" className="transition-colors hover:text-secondary-light">{t('nav.privacy')}</Link>
            <Link to="#" className="transition-colors hover:text-secondary-light">{t('nav.terms')}</Link>
            <Link to="#" className="transition-colors hover:text-secondary-light">{t('nav.accessibility')}</Link>
          </div>
          
          <div className="text-center text-xs text-secondary/80">
            {t('nav.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}

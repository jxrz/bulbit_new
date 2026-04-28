import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface border-t border-primary/10 py-8 md:py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="px-4 py-2">
            <img
              src="/logotipo.png"
              alt="Bulbit Korean BBQ"
              className="h-12 md:h-14 w-auto max-w-[210px] md:max-w-[260px] object-contain"
            />
          </Link>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-text-light">
            <Link to="#" className="hover:text-primary transition-colors">{t('nav.privacy')}</Link>
            <Link to="#" className="hover:text-primary transition-colors">{t('nav.terms')}</Link>
            <Link to="#" className="hover:text-primary transition-colors">{t('nav.accessibility')}</Link>
          </div>
          
          <div className="text-xs text-text-light text-center">
            {t('nav.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}

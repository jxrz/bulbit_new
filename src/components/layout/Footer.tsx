import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface border-t border-primary/10 py-8 md:py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/">
            <img src="/logo.jpeg" alt="Bulbit Logo" className="h-10 object-contain mix-blend-multiply" />
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
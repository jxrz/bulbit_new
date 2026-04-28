import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.history'), path: '/history' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 border-b border-secondary/20 bg-[#120d0be3] backdrop-blur-md shadow-[0_12px_40px_-22px_rgba(0,0,0,0.9)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center px-4 py-2">
          <img
            src="/logo_beige.webp"
            alt="Bulbit Korean BBQ"
            className="h-11 md:h-14 w-auto max-w-[200px] md:max-w-[260px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                "text-sm font-semibold transition-colors hover:text-secondary-light",
                location.pathname === link.path ? "text-secondary-light" : "text-secondary/90"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher />
          <Link to="/contact" className="rounded-full border border-secondary/25 bg-primary px-6 py-2.5 text-sm font-bold text-secondary-light transition-colors hover:bg-primary-dark shadow-soft">
            {t('nav.reserve_table')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button className="p-2 text-secondary-light" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-secondary-light" /> : <Menu className="text-secondary-light" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full border-b border-secondary/20 bg-[#17100dcc] px-4 py-4 shadow-soft backdrop-blur-md flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "text-lg font-semibold py-2",
                location.pathname === link.path ? "text-secondary-light" : "text-secondary/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full border border-secondary/25 bg-primary px-6 py-3 text-center font-bold text-secondary-light shadow-soft"
          >
            {t('nav.reserve_table')}
          </Link>
        </div>
      )}
    </header>
  );
}

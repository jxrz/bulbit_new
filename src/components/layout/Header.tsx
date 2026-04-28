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
    <header className="fixed w-full top-0 z-50 bg-secondary/90 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center px-4 py-2">
          <img
            src="/logotipo.png"
            alt="Bulbit Korean BBQ"
            className="h-11 md:h-14 w-auto max-w-[200px] md:max-w-[260px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                "text-sm font-semibold transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-text"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher />
          <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-dark transition-colors shadow-soft">
            {t('nav.reserve_table')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface shadow-soft border-b border-primary/10 py-4 px-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "text-lg font-semibold py-2",
                location.pathname === link.path ? "text-primary" : "text-text"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white text-center px-6 py-3 rounded-full font-bold mt-2 shadow-soft"
          >
            {t('nav.reserve_table')}
          </Link>
        </div>
      )}
    </header>
  );
}

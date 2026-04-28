import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KR' },
    { code: 'zh', label: '中文' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = i18n.language?.split('-')[0] || 'es';

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-semibold text-secondary-light hover:text-white transition-colors"
      >
        <Globe size={18} />
        {languages.find(lang => lang.code === currentLang)?.label || 'ES'}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 flex w-24 flex-col rounded-xl border border-secondary/20 bg-[#1a120f] py-2 shadow-soft">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={clsx(
                "px-4 py-2 text-left text-sm transition-colors hover:bg-secondary/10",
                currentLang === lang.code ? "font-bold text-secondary-light" : "text-secondary/90"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

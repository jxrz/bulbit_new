import { Link, useLocation } from 'react-router-dom';
import { Home, Utensils, Users, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export default function MobileNav() {
  const { t } = useTranslation();
  const location = useLocation();
  
  const links = [
    { name: t('nav.home'), path: '/', icon: Home },
    { name: t('nav.menu'), path: '/menu', icon: Utensils },
    { name: t('nav.history'), path: '/history', icon: Users },
    { name: t('nav.contact'), path: '/contact', icon: Calendar },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-full border-t border-secondary/20 bg-[#120d0be8] backdrop-blur-md shadow-[0px_-10px_32px_0px_rgba(0,0,0,0.45)]">
      <div className="flex justify-around items-center h-20 px-2 pb-safe">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
          
          return (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                "flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors",
                isActive ? "text-secondary-light" : "text-secondary/65 hover:text-secondary-light"
              )}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
